import "./Search.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoOptions } from "react-icons/io5";
import { Searched, AdvancedSearch } from "../components";

function Search() {
  //   let [input, setInput] = useState("");
  let [searchedInput, setSearchedInput] = useState("");
  let [filter, setFilter] = useState(false);
  let [formData, setFormData] = useState({
    searchInput: "",
    filteredCuisines: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  let [cuisines, setCuisines] = useState([
    { name: "African", checked: false },
    { name: "American", checked: false },
    { name: "British", checked: false },
    { name: "Cajun", checked: false },
    { name: "Caribbean", checked: false },
    { name: "Chinese", checked: false },
    { name: "Eastern European", checked: false },
    { name: "European", checked: false },
    { name: "French", checked: false },
    { name: "German", checked: false },
    { name: "Greek", checked: false },
    { name: "Indian", checked: false },
    { name: "Japonese", checked: false },
    { name: "Jewish", checked: false },
    { name: "Korean", checked: false },
    { name: "Latin American", checked: false },
    { name: "Mediterranean", checked: false },
    { name: "Mexican", checked: false },
    { name: "Middle Eastern", checked: false },
    { name: "Nordic", checked: false },
    { name: "Southern", checked: false },
    { name: "Spanish", checked: false },
    { name: "Thai", checked: false },
    { name: "Vietnamese", checked: false },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchedInput(e.target.searchInput.value);
    const selectedCuisines = cuisines
      .filter((c) => c.checked)
      .map((c) => c.name);
    const query = `${selectedCuisines.join(",")}`;
    setFilter(false);
    setFormData({
      ...formData,
      searchInput: e.target.searchInput.value,
      filteredCuisines: query,
    });
    setIsSubmitted(true);
    document.getElementById("searchForm").reset();
  };

  const filterHandler = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  const saveFilterHandler = (e) => {
    e.preventDefault();
    const selectedCuisines = cuisines
      .filter((c) => c.checked)
      .map((c) => c.name);
    const query = `${selectedCuisines.join(",")}`;
    setFormData({
      ...formData,
      filteredCuisines: query,
    });
    setFilter(false);
  };

  return (
    <>
      <form onSubmit={submitHandler} id="searchForm">
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
          <IoOptions className="filter-icon" onClick={filterHandler} />
        </div>
        {filter ? (
          <AdvancedSearch
            cuisines={cuisines}
            setCuisines={setCuisines}
            saveFilterHandler={saveFilterHandler}
            setFilter={setFilter}
            submitHandler={submitHandler}
          />
        ) : null}
      </form>
      {isSubmitted ? (
        <Searched searchedInput={searchedInput} formData={formData} />
      ) : null}
    </>
  );
}

export default Search;
