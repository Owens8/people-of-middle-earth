import React from "react";
import { useState, useEffect } from "react";
import CharactersContainer from "./CharactersContainer";
import Search from "./Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("Human");

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

  function updateSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredCharacters = characters.filter(
    (character) => character.race === filterBy
  );

  return (
    <div className="App">
      <h1>People of Middle-Earth</h1>
      <Search
        searchTerm={searchTerm}
        updateSearch={updateSearch}
        filterBy={filterBy}
        onChangeFilter={setFilterBy}
      />
      <CharactersContainer searchTerm={searchTerm} characters={filteredCharacters} />
    </div>
  );
}

export default App;
