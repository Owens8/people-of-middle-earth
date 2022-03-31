// import React from "react";
// import { useState } from "react";
// 
// function SearchForm() {
//   const blankCharacter = {
//     _id: "",
//     height: "",
//     race: "",
//     gender: "",
//     birth: "",
//     spouse: "",
//     death: "",
//     realm: "",
//     hair: "",
//     name: "",
//     wikiUrl: "",
//   };
// 
//   const [characterSearch, setCharacterSearch] = useState(blankCharacter);
//   const { name } = characterSearch;
// 
//   function updateSearch(e) {
//     console.log(e.target.value)
//     setCharacterSearch( e.target.value );
//   }
// 
//   return (
//     <div className="search-form">
//       <input
//         type={name}
//         name="name"
//         onChange={updateSearch}
//         placeholder="Please enter the name"
//       />
//       <input type="submit" value="Submit" />
//     </div>
//   );
// }
// 
// export default SearchForm;
