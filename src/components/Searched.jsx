import "./Searched.scss";
import { useEffect, useState } from "react";
// import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Searched({ input }) {
  let [searchedRecipes, setSearchedRecipes] = useState([]);
  const getSearched = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${input}&number=20`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);
    console.log(data);
  };
  useEffect(() => {
    getSearched();
  }, [input]);
  return (
    <div className="container">
      <div className="row">
        {searchedRecipes.map((item) => {
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
    </div>
  );
}

export default Searched;
