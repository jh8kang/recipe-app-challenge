import "./Search.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Searched, AdvancedSearch } from "../components";

function Search() {
  //   let [input, setInput] = useState("");
  let [searchedInput, setSearchedInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submithandler", e.target.searchInput.value);
    setSearchedInput(e.target.searchInput.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded shadow-none"
            name="searchInput"
            aria-label="Search"
            aria-describedby="search-addon"
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a recipe"
          />
          <button type="submit" className="btn btn-outline-primary">
            <FaSearch />
          </button>
        </div>
        <AdvancedSearch />
      </form>

      <Searched searchedInput={searchedInput} />
    </>
  );
}

export default Search;
