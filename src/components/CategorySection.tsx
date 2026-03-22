import { useState, useRef, useCallback } from 'react';
import type { Category, CollectionState } from '../types/index.ts';
import { getCategoryProgress } from '../utils/progress.ts';
import { ProgressBar } from './ProgressBar.tsx';
import { CharacterItem } from './CharacterItem.tsx';

interface CategorySectionProps {
  category: Category;
  collectionState: CollectionState;
  onToggle: (charId: string) => void;
}

function GuideViewer({ src, onClose }: { src: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const pinchRef = useRef({ startDist: 0, startScale: 1 });
  const panRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0 });
  const lastTap = useRef(0);
  const viewerRef = useRef<HTMLDivElement>(null);

  const getDistance = (t: React.TouchList) => {
    const dx = t[0].clientX - t[1].clientX;
    const dy = t[0].clientY - t[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = { startDist: getDistance(e.touches), startScale: scale };
    } else if (e.touches.length === 1 && scale > 1) {
      panRef.current = {
        startX: e.touches[0].clientX, startY: e.touches[0].clientY,
        startTx: translate.x, startTy: translate.y,
      };
    }
  }, [scale, translate]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getDistance(e.touches);
      const newScale = Math.min(5, Math.max(1, pinchRef.current.startScale * (dist / pinchRef.current.startDist)));
      setScale(newScale);
      if (newScale <= 1) setTranslate({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && scale > 1) {
      const dx = e.touches[0].clientX - panRef.current.startX;
      const dy = e.touches[0].clientY - panRef.current.startY;
      setTranslate({ x: panRef.current.startTx + dx, y: panRef.current.startTy + dy });
    }
  }, [scale]);

  const onDoubleTap = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 1) return;
    const now = Date.now();
    if (now - lastTap.current < 300) {
      e.preventDefault();
      if (scale > 1) {
        setScale(1);
        setTranslate({ x: 0, y: 0 });
      } else {
        setScale(3);
      }
    }
    lastTap.current = now;
  }, [scale]);

  return (
    <div className="guide-overlay">
      <button type="button" className="guide-close" onClick={onClose}>&#x2715;</button>
      <div
        ref={viewerRef}
        className="guide-viewer"
        onTouchStart={(e) => { onDoubleTap(e); onTouchStart(e); }}
        onTouchMove={onTouchMove}
      >
        <img
          src={src}
          alt="Growth guide"
          draggable={false}
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  );
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
        <GuideViewer src={category.guideUrl} onClose={() => setShowGuide(false)} />
      )}
    </section>
  );
}
