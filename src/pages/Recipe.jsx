import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./Recipe.scss";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailedData = await data.json();
    console.log("detailedData", detailedData);
    setDetails(detailedData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  console.log(details);
  console.log(typeof details.summary);
  const summary = details.summary ? parse(details.summary) : null;
  return (
    <div>
      <p>{details.title}</p>
      <img src={details.image} alt={details.title} />
      <p>{summary}</p>
      <h5>Health Information</h5>
      <div>
        <h6>Vegan</h6>
        {details.vagan ? <p>yes</p> : <p>no</p>}
      </div>
      <div>
        <h6>Vegetarian</h6>
        {details.vegatarian ? <p>yes</p> : <p>no</p>}
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
      <ol>
        {details.analyzedInstructions[0]?.steps?.map((steps) => {
          return <li>{steps.step}</li>;
        })}
      </ol>
    </div>
  );
}

export default Recipe;
