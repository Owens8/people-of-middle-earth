import React from "react";

function Search({ searchTerm, updateSearch, filterBy, onChangeFilter }) {
  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className="search">
      <h3>Search By Name: </h3>
      <input
        type="text"
        name="name"
        value={searchTerm}
        onChange={updateSearch}
        placeholder="Please enter the name"
      />
      {/* <input type="submit" value="Submit" /> */}
      {/* <h1>This is the Search Components</h1> */}
      <label className="select">
        <strong>Filter by race: </strong>
        <select onChange={handleFilterChange} value={filterBy}>
          <option value="Human">Human</option>
          <option value="Ainur">Ainur</option>
          <option value="Balrog">Balrog</option>
          <option value="Black Uruk">Black Uruk</option>
          <option value="Dragon">Dragon</option>
          <option value="Dragons">Dragons</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Dwarves">Dwarves</option>
          <option value="Eagle">Eagle</option>
          <option value="Elf">Elf</option>
          <option value="Elves">Elves</option>
          <option value="Ent">Ent</option>
          <option value="Ents">Ents</option>
          <option value="Goblin,Orc">Goblin,Orc</option>
          <option value="God">God</option>
          <option value="Great Eagles">Great Eagles</option>
          <option value="Great Spiders">Great Spiders</option>
          <option value="Half-elven">Half-elven</option>
          <option value="Hobbit">Hobbit</option>
          <option value="Hobbits">Hobbits</option>
          <option value="Horse">Horse</option>
          <option value="Maiar">Maiar</option>
          <option value="Maiar,Balrogs">Maiar,Balrogs</option>
          <option value="Men">Men</option>
          <option value="Men,Wraith">Men,Wraith</option>
          <option value="Orc">Orc</option>
          <option value="Orcs">Orcs</option>
          <option value="Raven">Raven</option>
          <option value="Stone-trolls">Stone-trolls</option>
          <option value="Uruk-hai">Uruk-hai</option>
          <option value="Uruk-hai,Orc">Uruk-hai,Orc</option>
          <option value="Urulóki">Urulóki</option>
          <option value="Vampire">Vampire</option>
          <option value="Werewolves">Werewolves</option>
          <option value="Wolfhound">Wolfhound</option>
        </select>
      </label>
    </div>
  );
}

export default Search;
