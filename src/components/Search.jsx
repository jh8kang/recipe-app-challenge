import "./Search.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ submitHandler, setInput, input }) {
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log("submithandler");
  //   };
  return (
    <form onSubmit={submitHandler}>
      <div className="search-bar">
        <FaSearch className="search-bar_icon"></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search for a recipe"
          value={input}
        />
      </div>
    </form>
  );
}

export default Search;
