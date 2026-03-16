import type { Category, CollectionState } from '../types/index.ts';

export function getCategoryProgress(category: Category, state: CollectionState) {
  const total = category.characters.length;
  const obtained = category.characters.filter(c => state[c.id]).length;
  return { obtained, total };
}

export function getTotalProgress(categories: Category[], state: CollectionState) {
  let obtained = 0;
  let total = 0;
  for (const cat of categories) {
    const p = getCategoryProgress(cat, state);
    obtained += p.obtained;
    total += p.total;
  }
  return { obtained, total };
}
