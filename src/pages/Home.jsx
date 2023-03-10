import React, { useState } from "react";
import { Search } from "../components";
import "./Home.scss";
import { Searched } from "../components";

function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  let [formData, setFormData] = useState({
    searchInput: "",
    filteredCuisines: "",
  });
  return (
    <div className="home">
      <div className="hero">
        <div className="slogan_container">
          <p className="slogan_text">Discover Your Next Recipe</p>
          <p className="slogan_description">
            Recipe search directory by Amy Kang for Medavie Blue Cross
          </p>
        </div>
        <Search
          formData={formData}
          isSubmitted={isSubmitted}
          setFormData={setFormData}
          setIsSubmitted={setIsSubmitted}
        />
      </div>
      {isSubmitted ? <Searched formData={formData} /> : null}
    </div>
  );
}

export default Home;
