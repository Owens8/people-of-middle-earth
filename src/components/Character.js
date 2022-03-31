import React from "react";

function Character({ character }) {
  return (
    <div className="character">
      <h3>{character.name}</h3>
      <p>{character.wikiUrl}</p>
      <p>Race: {character.race}</p>
      <p>Gender: {character.gender}</p>
      <p>Spouse: {character.spouse}</p>
      <p>Birth Year: {character.birth}</p>
      <p>Death Year: {character.death}</p>
      <p>Height: {character.height}</p>
    </div>
  );
}

export default Character;

