import React from "react";

function Character({ character }) {
  return (
    <div className="character">
      <h3>{character.name}</h3>
      <p>{character.wikiUrl}</p>
      <p>Race: {character.race}</p>
      {/* <p>Gender: {character.gender}</p> */}
      {/* <p>Spouse: {character.spouse}</p> */}
      {/* <p>{character.wikiUrl === "" || character.wikiUrl === "NaN" ? "" : character.wikiUrl }</p> */}
      {/* <p>{character.race === "" || character.race === "NaN" ? "" : "Race: " + character.race }</p> */}
      <p>
        {character.gender === "" || character.gender === "NaN"
          ? ""
          : "Gender: " + character.gender}
      </p>
      <p>
        {character.spouse === "" || character.spouse === "NaN"
          ? ""
          : "Spouse: " + character.spouse}
      </p>
      <p>
        {character.death === "" || character.death === "NaN"
          ? ""
          : "Death Year: " + character.death}
      </p>
      <p>
        {character.height === "" || character.height === "NaN"
          ? ""
          : "Height: " + character.height}
      </p>
    </div>
  );
}

export default Character;
