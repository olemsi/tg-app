import type { Category, CollectionState } from '../types/index.ts';
import { getCategoryProgress } from '../utils/progress.ts';

interface CategoryTabsProps {
  categories: Category[];
  activeId: string | 'all';
  onSelect: (id: string | 'all') => void;
  collectionState: CollectionState;
}

export function CategoryTabs({ categories, activeId, onSelect, collectionState }: CategoryTabsProps) {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          type="button"
          className={`tab ${activeId === 'all' ? 'active' : ''}`}
          onClick={() => onSelect('all')}
        >
          All
        </button>
        {categories.map(cat => {
          const { obtained, total } = getCategoryProgress(cat, collectionState);
          return (
            <button
              type="button"
              key={cat.id}
              className={`tab ${activeId === cat.id ? 'active' : ''}`}
              onClick={() => onSelect(cat.id)}
            >
              {cat.emoji} <span className="tab-badge">{obtained}/{total}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
