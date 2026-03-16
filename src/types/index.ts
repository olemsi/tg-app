export interface Character {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  characters: Character[];
}

export type CollectionState = Record<string, boolean>;
