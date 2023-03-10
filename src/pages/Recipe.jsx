import "./Recipe.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    if (!data.ok) {
      throw new Error("Failed to fetch recipe details");
    }
    const detailedData = await data.json();
    setDetails(detailedData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  const summary = details.summary ? parse(details.summary) : null;
  const instructions = details.instructions
    ? parse(details.instructions)
    : null;
  return (
    <div>
      <img src={details.image} alt={details.title} />
      <p>{details.title}</p>
      <p>{summary}</p>
      <h5>Health Information</h5>
      <div>
        <h6>Vegan</h6>
        {details.vegan ? <p>yes</p> : <p>no</p>}
      </div>
      <div>
        <h6>Vegetarian</h6>
        {details.vegetarian ? <p>yes</p> : <p>no</p>}
      </div>
      <div>
        <h6>Dairy free</h6>
        {details.dairyFree ? <p>yes</p> : <p>no</p>}
      </div>
      <div>
        <h6>Gluten free</h6>
        {details.glutenFree ? <p>yes</p> : <p>no</p>}
      </div>
      <h5>Ingredients for {`${details.servings}`} servings </h5>
      {details.extendedIngredients?.map((ingredient) => {
        return (
          <div key={ingredient.id} className="ingredient-container">
            <p>{ingredient.nameClean} &nbsp;&nbsp;</p>
            <p>{ingredient.measures.metric.amount}&nbsp;</p>
            <p>{ingredient.measures.metric.unitShort}</p>
          </div>
        );
      })}

      <h5>Instructions ({details.readyInMinutes} Min) </h5>
      <div>{instructions}</div>
    </div>
  );
}

export default Recipe;
