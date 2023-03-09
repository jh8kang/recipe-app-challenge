import React, { useState } from "react";
import { Popular, Search, Searched } from "../components";

function Home() {
  let [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submithandler");
  };
  return (
    <div className="home">
      <Popular />
      <Search submitHandler={submitHandler} setInput={setInput} input={input} />
      <Searched input={input} />
    </div>
  );
}

export default Home;
