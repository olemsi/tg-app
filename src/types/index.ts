export type Gender = 'male' | 'female' | 'both' | 'none';
export type Stage = 'baby' | 'child' | 'teen' | 'adult' | 'special' | 'tamapet';

export interface Character {
  id: string;
  name: string;
  gender?: Gender;
  stage?: Stage;
  condition?: string;
  sprite?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  characters: Character[];
}

export interface DeviceVersion {
  id: string;
  name: string;
  categories: Category[];
}

export interface Chart {
  id: string;
  versionId: string;
  name: string;
}

export type CollectionState = Record<string, boolean>;
