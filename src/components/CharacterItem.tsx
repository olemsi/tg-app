import { useState } from 'react';
import type { Character } from '../types/index.ts';
import { getGenderIcon } from '../utils/progress.ts';

interface CharacterItemProps {
  character: Character;
  obtained: boolean;
  onToggle: () => void;
}

export function CharacterItem({ character, obtained, onToggle }: CharacterItemProps) {
  const [expanded, setExpanded] = useState(false);
  const gender = getGenderIcon(character.gender);

  return (
    <div className={`character-item ${obtained ? 'obtained' : ''}`}>
      <button
        type="button"
        className="character-row"
        onClick={onToggle}
      >
        {character.sprite ? (
          <img
            src={character.sprite}
            alt={character.name}
            className="character-sprite"
            loading="lazy"
          />
        ) : (
          <span className="character-check">{obtained ? '\u2705' : '\u2B1C'}</span>
        )}
        <span className="character-name">
          {character.name}
          {gender && <span className="character-gender"> {gender}</span>}
        </span>
        {obtained && character.sprite && <span className="character-obtained-mark">\u2705</span>}
      </button>
      {character.condition && (
        <>
          <button
            type="button"
            className="character-info-btn"
            onClick={() => setExpanded(!expanded)}
            aria-label="Show conditions"
          >
            {expanded ? '\u25B2' : '\u2139\uFE0F'}
          </button>
          {expanded && (
            <div className="character-condition">
              {character.condition}
            </div>
          )}
        </>
      )}
    </div>
  );
}
