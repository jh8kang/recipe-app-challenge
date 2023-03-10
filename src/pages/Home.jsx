import React from "react";
import { Popular, Search } from "../components";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      {/* <Popular /> */}
      <div className="slogan_container">
        <h5 className="slogan_text">Better food better mood.</h5>
        <p className="slogan_description">
          Food, drinks, pastery recipe's available in just one click.
        </p>
      </div>
      <Search />
    </div>
  );
}

export default Home;
