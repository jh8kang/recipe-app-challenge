import "./Searched.scss";
import { useEffect, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Pagination } from "./index";
import { FiArrowRight } from "react-icons/fi";

function Searched({ formData }) {
  let [searchedRecipes, setSearchedRecipes] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(5);
  let searchMax = 50;

  // Fetches searched recipes from spoonacular API. Searches the inpu and filters by cuisine.
  const getSearched = useCallback(async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${formData.searchInput}&number=${searchMax}&cuisine=${formData.filteredCuisines}`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);
  }, [formData, searchMax]);
  useEffect(() => {
    getSearched();
  }, [formData, getSearched]);

  // Gets page items to display on current page in pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedRecipes?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Updates current page number in pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row g-5 justify-content-start searched-container ">
        {currentItems?.map((item) => {
          return (
            <div className="col-md-4 col-lg-3" id={item.id} key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.id} className="card-img" />
                <div className="card-body">
                  <Link to={"/recipe/" + item.id} className="card-link">
                    <p className="card-title">{item.title}</p>
                    <FiArrowRight className="arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={searchedRecipes?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Searched;
