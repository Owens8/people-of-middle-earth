import React from "react";
import { useState, useEffect } from "react";
function App() {


  function Search() {
    // TODO
  
    function SearchForm() {
      // TODO
    }

    function Filter() {
      // TODO
    }
    return (
      <>
        <SearchForm />
        <Filter />
      </>
    );
  }


  function CharacterContainer() {
    //TODO
    
    function Character() {
      //TODO
    }

    return (
      <Character />
    )
  }

  return (
    <div className="App">
      <h1>People of Middle-Earth</h1>
      <Search />
      <CharacterContainer /> 
    </div>
  );
}

export default App;
