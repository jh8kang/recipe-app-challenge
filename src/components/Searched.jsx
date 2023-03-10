import "./Searched.scss";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Pagination } from "./index";

function Searched({ formData }) {
  let [searchedRecipes, setSearchedRecipes] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage] = useState(5);
  let searchMax = 50;
  console.log("formData inside Searched component", formData);
  const getSearched = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${formData.searchInput}&number=${searchMax}&cuisine=${formData.filteredCuisines}`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);
  };
  useEffect(() => {
    getSearched();
  }, [formData]);

  //   Get current post
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedRecipes?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  //   Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log("searchedRecipes", searchedRecipes);
  return (
    <div className="container">
      <div className="row g-5 justify-content-start">
        {currentItems?.map((item) => {
          return (
            <div className="col-md-3" id={item.id} key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.id} />
                <div className="card-body">
                  <p className="card-text description-text">{item.title}</p>
                </div>
                <Link to={"/recipe/" + item.id}>
                  <button type="button" className="btn btn-primary card-btn">
                    Details
                  </button>
                </Link>
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
