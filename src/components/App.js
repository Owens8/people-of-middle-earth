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

  const [character, setCharacter] = useState();

  useEffect(() => {
    const headers = {
      Accept: "application/json",
      Authorization: "Bearer xvi06TocPJvBmrQC4yZv",
    };

    const fetchData = async () => {
      const rawQuotes = await fetch("https://the-one-api.dev/v2/quote", {
        headers: headers,
      });
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        { headers: headers }
      );
      const characters = await rawCharacters.json(); // All Characters
      const character = characters.docs[0]; 
      console.log(character)
      setCharacter(character.name);
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>People of Middle-Earth</h1>
       {character}

      {/*
        <Search />
        <CharacterContainer />
      */}


    </div>
  );
}

export default App;
