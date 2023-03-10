import React, { useState } from "react";
import { Search } from "../components";
import "./Home.scss";
import { Searched } from "../components";
import heroImage from "../assets/images/hero-illustration.png";
import chicken from "../assets/images/chicken.png";

function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let [formData, setFormData] = useState({
    searchInput: "",
    filteredCuisines: "",
  });

  return (
    <div className="home">
      <div className="hero">
        <div className="slogan-container">
          <p className="slogan-text">Discover Your Next Recipe</p>
          <p className="slogan-description">
            Recipe search directory by Amy Kang for Medavie Blue Cross
          </p>
        </div>
        <Search
          formData={formData}
          isSubmitted={isSubmitted}
          setFormData={setFormData}
          setIsSubmitted={setIsSubmitted}
        />

        <img src={heroImage} alt="hero" className="hero-img" />
      </div>
      {isSubmitted ? (
        <Searched formData={formData} />
      ) : (
        <div className="no-search-message">
          <img src={chicken} alt="chicken" className="chicken-icon" />
          <p>Try typing "Chicken" in the search bar.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
