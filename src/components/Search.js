import React from "react";
import SearchForm from "./SearchForm";
import Filter from "./Filter";


function Search({searchTerm, updateSearch }) {


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
      <h1>This is the Search Components</h1>
      {/* <Filter /> */}
    </div>
  );
}









export default Search;
