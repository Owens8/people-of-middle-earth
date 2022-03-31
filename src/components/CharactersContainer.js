import React from "react";
import Character from "./Character";

function CharactersContainer({ characters, searchTerm }) {
  return (
    <div className="character-container">
      {characters
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((character) => (
          <Character key={character._id} character={character} />
        ))}
    </div>
  );
}
export default CharactersContainer;
