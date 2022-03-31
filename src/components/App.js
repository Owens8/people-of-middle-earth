import React from "react";
import { useState, useEffect } from "react";
// import CharactersContainer from "./CharactersContainer";
// import Search from "./Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer xvi06TocPJvBmrQC4yZv",
    };

    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        { headers: headers }
      );
      const charactersData = await rawCharacters.json();
      const characters = charactersData.docs;
      setCharacters(characters);
    };
    fetchData();
  }, []);

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

  function CharactersContainer({ characters }) {
    return (
      <div className="character-container">
        {characters.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }

        }).map((character) => (
          <Character key={character._id} character={character} />
        ))}
      </div>
    );
  }

  function Search() {
    const { name } = setSearchTerm;

    function updateSearch(e) {
      setSearchTerm(e.target.value);
    }

    return (
      <div className="search-container">
        <input
          type="text"
          name="name"
          value={searchTerm}
          onChange={updateSearch}
          placeholder="Please enter the name"
        />
        {/* <input type="submit" value="Submit" /> */}
        <h1>This is the Search Components</h1>
        <Filter />
      </div>
    );
  }

  function Filter() {
    return (
      <div className="filter">
        <h2>This is the Filter Component</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>People of Middle-Earth</h1>
      <Search />
      <CharactersContainer characters={characters} />
    </div>
  );
}

export default App;
