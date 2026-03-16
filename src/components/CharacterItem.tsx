import { useState } from 'react';
import type { Character } from '../types/index.ts';
import { getGenderIcon } from '../utils/progress.ts';

interface CharacterItemProps {
  character: Character;
  obtained: boolean;
  onToggle: () => void;
}

export function CharacterItem({ character, obtained, onToggle }: CharacterItemProps) {
  const [showCondition, setShowCondition] = useState(false);
  const gender = getGenderIcon(character.gender);

  return (
    <div className={`character-item ${obtained ? 'obtained' : ''}`}>
      <button type="button" className="character-row" onClick={onToggle}>
        <span className="character-check">{obtained ? '\u2705' : '\u2B1C'}</span>
        {character.sprite && (
          <img
            src={character.sprite}
            alt=""
            className="character-sprite"
            loading="lazy"
          />
        )}
        <span className="character-name">
          {character.name}
          {gender && <span className="character-gender"> {gender}</span>}
        </span>
      </button>
      {character.condition && (
        <button
          type="button"
          className="character-info-btn"
          onClick={() => setShowCondition(!showCondition)}
        >
          {showCondition ? '\u25B2' : '\u2139\uFE0F'}
        </button>
      )}
      {showCondition && character.condition && (
        <div className="character-condition">
          {character.condition}
        </div>
      )}
    </div>
  );
}
