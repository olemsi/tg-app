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

export function getGenderIcon(gender?: string): string {
  switch (gender) {
    case 'male': return '\u2642';
    case 'female': return '\u2640';
    case 'both': return '\u2642\u2640';
    default: return '';
  }
}
