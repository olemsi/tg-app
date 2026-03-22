import { useState } from 'react';
import { VERSIONS } from './data/characters.ts';
import { useCharts, getVersionPrefix } from './hooks/useCharts.ts';
import { useCollection } from './hooks/useCollection.ts';
import { getTotalProgress } from './utils/progress.ts';
import { Header } from './components/Header.tsx';
import { CategoryTabs } from './components/CategoryTabs.tsx';
import { CategorySection } from './components/CategorySection.tsx';
import { ChartSelector } from './components/ChartSelector.tsx';

export default function App() {
  const [versionId, setVersionId] = useState('uni');
  const [activeTab, setActiveTab] = useState<string | 'all'>('all');

  const {
    versionCharts, activeChart, storageKey,
    selectChart, addChart, renameChart, deleteChart,
    isLoading: chartsLoading,
  } = useCharts(versionId);

  const { collectionState, toggleCharacter, isLoading: collectionLoading } = useCollection(storageKey);

  const version = VERSIONS.find(v => v.id === versionId);
  if (!version) return null;

  const { obtained, total } = getTotalProgress(version.categories, collectionState);

  const visibleCategories = activeTab === 'all'
    ? version.categories
    : version.categories.filter(c => c.id === activeTab);

  if (chartsLoading || collectionLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      {VERSIONS.length > 1 && (
        <div className="version-selector">
          {VERSIONS.map(v => (
            <button
              key={v.id}
              type="button"
              className={`version-btn ${v.id === versionId ? 'active' : ''}`}
              onClick={() => { setVersionId(v.id); setActiveTab('all'); }}
            >
              {v.name}
            </button>
          ))}
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
        activeId={activeTab}
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
