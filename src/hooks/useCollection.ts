import { useState, useEffect, useRef, useCallback } from 'react';
import type { CollectionState } from '../types/index.ts';
import { useCloudStorage } from './useCloudStorage.ts';

const DEBOUNCE_MS = 300;

/** Merge old gender-split IDs into a single unified ID. */
const ID_MIGRATIONS: [old: string, unified: string][] = [
  ['uni-unimarutchi-m', 'uni-unimarutchi'],
  ['uni-unimarutchi-f', 'uni-unimarutchi'],
];

function migrateCollection(state: CollectionState): CollectionState {
  let changed = false;
  const next = { ...state };
  for (const [old, unified] of ID_MIGRATIONS) {
    if (next[old]) {
      next[unified] = true;
      delete next[old];
      changed = true;
    }
  }
  return changed ? next : state;
}

export function useCollection(storageKey: string) {
  const [state, setState] = useState<CollectionState>({});
  const [isLoading, setIsLoading] = useState(true);
  const { getItem, setItem } = useCloudStorage();
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const latestState = useRef(state);
  const keyRef = useRef(storageKey);

  const persist = useCallback((newState: CollectionState) => {
    latestState.current = newState;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      setItem(keyRef.current, JSON.stringify(newState));
    }, DEBOUNCE_MS);
  }, [setItem]);

  const flushSave = useCallback(() => {
    clearTimeout(saveTimer.current);
    setItem(keyRef.current, JSON.stringify(latestState.current));
  }, [setItem]);

  useEffect(() => {
    // Flush pending save for the previous key before switching
    if (keyRef.current !== storageKey) {
      clearTimeout(saveTimer.current);
      setItem(keyRef.current, JSON.stringify(latestState.current));
    }
    keyRef.current = storageKey;

    setIsLoading(true);
    getItem(storageKey).then(raw => {
      let parsed: CollectionState = {};
      if (raw) {
        try { parsed = migrateCollection(JSON.parse(raw)); } catch { /* ignore */ }
      }
      setState(parsed);
      latestState.current = parsed;
      setIsLoading(false);
    });
  }, [storageKey]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) flushSave();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [flushSave]);

  const toggleCharacter = useCallback((charId: string) => {
    setState(prev => {
      const next = { ...prev, [charId]: !prev[charId] };
      persist(next);
      return next;
    });
  }, [persist]);

  return { collectionState: state, toggleCharacter, isLoading };
}
