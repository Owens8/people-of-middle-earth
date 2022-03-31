import React from "react";

function Character({ character }) {
  return (
    <div className="character">
      <h3>{character.name}</h3>
      <p>{character.wikiUrl}</p>
      <p>{character.race}</p>
      <p>{character.gender}</p>
      <p>{character.spouse}</p>
      <p>{character.birth}</p>
      <p>{character.death}</p>
      <p>{character.height}</p>
    </div>
  );
}

export default Character;

