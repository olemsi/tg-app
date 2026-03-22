import { useState } from 'react';
import type { Category, CollectionState } from '../types/index.ts';
import { getCategoryProgress } from '../utils/progress.ts';
import { ProgressBar } from './ProgressBar.tsx';
import { CharacterItem } from './CharacterItem.tsx';

interface CategorySectionProps {
  category: Category;
  collectionState: CollectionState;
  onToggle: (charId: string) => void;
}

export function CategorySection({ category, collectionState, onToggle }: CategorySectionProps) {
  const { obtained, total } = getCategoryProgress(category, collectionState);
  const [showGuide, setShowGuide] = useState(false);

  return (
    <section className="category-section">
      <div className="category-header">
        <span className="category-title">
          {category.emoji} {category.name}
        </span>
        {category.guideUrl && (
          <button type="button" className="category-guide" onClick={() => setShowGuide(true)}>
            Guide
          </button>
        )}
        <ProgressBar obtained={obtained} total={total} />
      </div>
      <div className="character-list">
        {category.characters.map(char => (
          <CharacterItem
            key={char.id}
            character={char}
            obtained={!!collectionState[char.id]}
            onToggle={() => onToggle(char.id)}
          />
        ))}
      </div>
      {showGuide && category.guideUrl && (
        <div className="guide-overlay" onClick={() => setShowGuide(false)}>
          <div className="guide-viewer">
            <img src={category.guideUrl} alt="Growth guide" />
          </div>
        </div>
      )}
    </section>
  );
}
