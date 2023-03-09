import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    // console.log("data", data);
    const detailedData = await data.json();
    console.log("detailedData", detailedData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return <div>Recipe</div>;
}

export default Recipe;
