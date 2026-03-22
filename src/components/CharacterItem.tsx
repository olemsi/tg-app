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
    <div className={`character-card${obtained ? ' obtained' : ''}`}>
      <button type="button" className="card-toggle" onClick={onToggle}>
        {obtained && <span className="card-check">&#x2713;</span>}
        {character.sprite ? (
          <img src={character.sprite} alt="" className="card-sprite" loading="lazy" />
        ) : (
          <div className="card-sprite-placeholder" />
        )}
        <span className="card-name">{character.name}{gender && <span className="card-gender"> {gender}</span>}</span>
      </button>
      {character.condition && (
        <>
          {showCondition && (
            <div className="card-condition">{character.condition}</div>
          )}
          <button
            type="button"
            className="card-info"
            onClick={() => setShowCondition(!showCondition)}
          >
            {showCondition ? '\u25B2' : '\u2139\uFE0F'}
          </button>
        </>
      )}
    </div>
  );
}
