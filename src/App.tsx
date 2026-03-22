import { useState, useEffect, useRef } from 'react';
import { VERSIONS } from './data/characters.ts';
import { useCharts, getVersionPrefix } from './hooks/useCharts.ts';
import { useCollection } from './hooks/useCollection.ts';
import { getTotalProgress } from './utils/progress.ts';
import { Header } from './components/Header.tsx';
import { CategoryTabs } from './components/CategoryTabs.tsx';
import { CategorySection } from './components/CategorySection.tsx';
import { ChartSelector } from './components/ChartSelector.tsx';

function loadSaved<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

export default function App() {
  const [versionId, setVersionId] = useState(() => loadSaved('last_version', 'uni'));
  const [activeTab, setActiveTab] = useState<string | 'all'>(() => loadSaved('last_tab', 'all'));
  const [versionOpen, setVersionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => { localStorage.setItem('last_version', JSON.stringify(versionId)); }, [versionId]);
  useEffect(() => { localStorage.setItem('last_tab', JSON.stringify(activeTab)); }, [activeTab]);

  useEffect(() => {
    if (!versionOpen) return;
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setVersionOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [versionOpen]);

  const {
    versionCharts, activeChart, storageKey,
    selectChart, addChart, renameChart, deleteChart,
    isLoading: chartsLoading,
  } = useCharts(versionId);

  const { collectionState, toggleCharacter, isLoading: collectionLoading } = useCollection(storageKey);

  const version = VERSIONS.find(v => v.id === versionId);
  if (!version) return null;

  const { obtained, total } = getTotalProgress(version.categories, collectionState);

  // If saved tab doesn't exist in current version, fall back to 'all'
  const validTab = activeTab === 'all' || version.categories.some(c => c.id === activeTab)
    ? activeTab : 'all';

  const visibleCategories = validTab === 'all'
    ? version.categories
    : version.categories.filter(c => c.id === validTab);

  if (chartsLoading || collectionLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      {VERSIONS.length > 1 && (
        <div className="version-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="version-toggle"
            onClick={() => setVersionOpen(!versionOpen)}
          >
            <span className="version-toggle-name">{version.name}</span>
            <span className={`version-chevron${versionOpen ? ' open' : ''}`}>&#x25BE;</span>
          </button>
          {versionOpen && (
            <div className="version-menu">
              {VERSIONS.map(v => (
                <button
                  key={v.id}
                  type="button"
                  className={`version-menu-item${v.id === versionId ? ' active' : ''}`}
                  onClick={() => { setVersionId(v.id); setActiveTab('all'); setVersionOpen(false); }}
                >
                  {v.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <ChartSelector
        charts={versionCharts}
        activeChart={activeChart}
        prefix={getVersionPrefix(versionId)}
        onSelect={selectChart}
        onAdd={addChart}
        onRename={renameChart}
        onDelete={deleteChart}
      />
      <Header obtained={obtained} total={total} title={activeChart?.name || version.name} />
      <CategoryTabs
        categories={version.categories}
        activeId={validTab}
        onSelect={setActiveTab}
        collectionState={collectionState}
      />
      <main className="content">
        {visibleCategories.map(cat => (
          <CategorySection
            key={cat.id}
            category={cat}
            collectionState={collectionState}
            onToggle={toggleCharacter}
          />
        ))}
      </main>
    </div>
  );
}
