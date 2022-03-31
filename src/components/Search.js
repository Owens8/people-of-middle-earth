import React from "react";

function Search({ searchTerm, updateSearch, filterBy, onChangeFilter }) {
  function handleFilterChange(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        name="name"
        value={searchTerm}
        onChange={updateSearch}
        placeholder="Please enter the name"
      />
      {/* <input type="submit" value="Submit" /> */}
      {/* <h1>This is the Search Components</h1> */}
      <label>
        <strong>Filter by race: </strong>
        <select onChange={handleFilterChange} value={filterBy}>
          <option value="Human">Human</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Elves">Elves</option>
          <option value="Maiar">Maiar</option>
          <option value="Ent">Ent</option>
          <option value="Orc">Orc</option>
          <option value="Dragon">Dragon</option>
          <option value="Ainur">Ainur</option>
        </select>
      </label>
    </div>
  );
}

export default Search;
