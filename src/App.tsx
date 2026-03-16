import { useState } from 'react';
import { CATEGORIES } from './data/characters.ts';
import { useCollection } from './hooks/useCollection.ts';
import { getTotalProgress } from './utils/progress.ts';
import { Header } from './components/Header.tsx';
import { CategoryTabs } from './components/CategoryTabs.tsx';
import { CategorySection } from './components/CategorySection.tsx';

export default function App() {
  const { collectionState, toggleCharacter, isLoading } = useCollection();
  const [activeTab, setActiveTab] = useState<string | 'all'>('all');

  const { obtained, total } = getTotalProgress(CATEGORIES, collectionState);

  const visibleCategories = activeTab === 'all'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.id === activeTab);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <Header obtained={obtained} total={total} />
      <CategoryTabs
        categories={CATEGORIES}
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
