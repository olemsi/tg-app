import type { Character } from '../types/index.ts';

interface CharacterItemProps {
  character: Character;
  obtained: boolean;
  onToggle: () => void;
}

export function CharacterItem({ character, obtained, onToggle }: CharacterItemProps) {
  return (
    <button
      type="button"
      className={`character-item ${obtained ? 'obtained' : ''}`}
      onClick={onToggle}
    >
      <span className="character-check">{obtained ? '\u2705' : '\u2B1C'}</span>
      <span className="character-name">{character.name}</span>
    </button>
  );
}
