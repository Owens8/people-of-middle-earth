import React from "react";
import { useState, useEffect } from "react";
function App() {
  // function Search() {
  //   // TODO

  //   function SearchForm() {
  //     // TODO
  //   }

  //   function Filter() {
  //     // TODO
  //   }
  //   return (
  //     <>
  //       <SearchForm />
  //       <Filter />
  //     </>
  //   );
  // }

  // function CharacterContainer() {
  //   //TODO

  //   function Character() {
  //     //TODO
  //   }

  //   return <Character />;
  // }

  const [characters, setCharacters] = useState([]);

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
      const charactersData = await rawCharacters.json(); // All Characters
      const characters = charactersData.docs;
      setCharacters(characters)
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>People of Middle-Earth</h1>
      {characters.map((character) => <p key={character._id}>{character.name} {character.race} {character.wikiUrl}}</p>)}
      {/*
        <Search />
        <CharacterContainer />
      */}


    </div>
  );
}

export default App;
