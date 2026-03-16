import { useState, useEffect, useRef, useCallback } from 'react';
import type { CollectionState } from '../types/index.ts';
import { useCloudStorage } from './useCloudStorage.ts';

const STORAGE_KEY = 'collection';
const DEBOUNCE_MS = 300;

export function useCollection() {
  const [state, setState] = useState<CollectionState>({});
  const [isLoading, setIsLoading] = useState(true);
  const { getItem, setItem } = useCloudStorage();
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const latestState = useRef(state);

  const persist = useCallback((newState: CollectionState) => {
    latestState.current = newState;
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      setItem(STORAGE_KEY, JSON.stringify(newState));
    }, DEBOUNCE_MS);
  }, [setItem]);

  const flushSave = useCallback(() => {
    clearTimeout(saveTimer.current);
    setItem(STORAGE_KEY, JSON.stringify(latestState.current));
  }, [setItem]);

  useEffect(() => {
    getItem(STORAGE_KEY).then(raw => {
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          setState(parsed);
          latestState.current = parsed;
        } catch { /* ignore corrupt data */ }
      }
      setIsLoading(false);
    });
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

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
