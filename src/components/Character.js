import React from "react";

function Character({ character }) {
  return (
    <div className="character">
      <h3>{character.name}</h3>
      <p>{character.wikiUrl}</p>
      <p>{character.race}</p>
      <p>{character.gender}</p>
    </div>
  );
}

export default Character;
