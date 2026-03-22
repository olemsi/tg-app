import { useState, useEffect, useCallback, useRef } from 'react';
import { VERSIONS } from '../data/characters.ts';
import type { Chart } from '../types/index.ts';
import { useCloudStorage } from './useCloudStorage.ts';

const CHARTS_KEY = 'charts';

function createDefaultCharts(): Chart[] {
  return VERSIONS.map(v => ({
    id: `_def_${v.id}`,
    versionId: v.id,
    name: v.id.toUpperCase(),
  }));
}

export function getChartStorageKey(chart: Chart): string {
  return chart.id.startsWith('_def_') ? 'collection' : `col_${chart.id}`;
}

export function getVersionPrefix(versionId: string): string {
  return versionId.toUpperCase();
}

export const MAX_CHART_NAME = 32;

export function useCharts(versionId: string) {
  const [allCharts, setAllCharts] = useState<Chart[]>([]);
  const [activeIds, setActiveIds] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const { getItem, setItem } = useCloudStorage();
  const chartsRef = useRef(allCharts);
  chartsRef.current = allCharts;

  useEffect(() => {
    getItem(CHARTS_KEY).then(raw => {
      let parsed: Chart[] = [];
      if (raw) {
        try { parsed = JSON.parse(raw); } catch { /* ignore */ }
      }
      if (parsed.length === 0) {
        parsed = createDefaultCharts();
        setItem(CHARTS_KEY, JSON.stringify(parsed));
      }
      setAllCharts(parsed);
      setIsLoading(false);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const persistCharts = useCallback((next: Chart[]) => {
    setAllCharts(next);
    chartsRef.current = next;
    setItem(CHARTS_KEY, JSON.stringify(next));
  }, [setItem]);

  const versionCharts = allCharts.filter(c => c.versionId === versionId);
  const activeChart = versionCharts.find(c => c.id === activeIds[versionId]) || versionCharts[0];
  const storageKey = activeChart ? getChartStorageKey(activeChart) : 'collection';

  const selectChart = useCallback((chartId: string) => {
    setActiveIds(prev => ({ ...prev, [versionId]: chartId }));
  }, [versionId]);

  const addChart = useCallback((name: string) => {
    const id = Date.now().toString(36);
    const chart: Chart = { id, versionId, name: name.slice(0, MAX_CHART_NAME) };
    persistCharts([...chartsRef.current, chart]);
    setActiveIds(prev => ({ ...prev, [versionId]: id }));
  }, [versionId, persistCharts]);

  const renameChart = useCallback((chartId: string, name: string) => {
    persistCharts(
      chartsRef.current.map(c => c.id === chartId ? { ...c, name: name.slice(0, MAX_CHART_NAME) } : c),
    );
  }, [persistCharts]);

  const deleteChart = useCallback((chartId: string) => {
    const chart = chartsRef.current.find(c => c.id === chartId);
    if (!chart) return;
    const remaining = chartsRef.current.filter(c => c.id !== chartId);
    if (remaining.filter(c => c.versionId === chart.versionId).length === 0) return;
    persistCharts(remaining);
    setActiveIds(prev => {
      if (prev[chart.versionId] === chartId) {
        const { [chart.versionId]: _, ...rest } = prev;
        return rest;
      }
      return prev;
    });
  }, [persistCharts]);

  return {
    versionCharts, activeChart, storageKey,
    selectChart, addChart, renameChart, deleteChart,
    isLoading,
  };
}
