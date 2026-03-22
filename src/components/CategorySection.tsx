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

  return (
    <section className="category-section">
      <div className="category-header">
        <span className="category-title">
          {category.emoji} {category.name}
        </span>
        {category.guideUrl && (
          <a href={category.guideUrl} target="_blank" rel="noopener noreferrer" className="category-guide">
            Guide
          </a>
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
    </section>
  );
}
