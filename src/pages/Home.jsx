import React, { useState } from "react";
import { Popular, Search } from "../components";
import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Popular /> */}
        <div className="slogan_container">
          <p className="slogan_text">Discover Your Next Recipe</p>
          <p className="slogan_description">
            Recipe search directory by Amy Kang for Medavie Blue Cross
          </p>
        </div>
        <Search />
      </div>
    </>
  );
}

export default Home;
