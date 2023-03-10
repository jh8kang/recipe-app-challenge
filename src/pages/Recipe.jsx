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
  console.log(details.summary);
  return (
    <div className="recipe">
      <div className="recipe-fixed-column">
        <img src={details.image} alt={details.title} className="recipe-img" />
      </div>
      <div className="scrollable-column">
        <div className="section">
          <p className="recipe-title">{details.title}</p>
          <p>{summary}</p>
        </div>
        <div className="section">
          <h5 className="section-title">Health Information</h5>
          <div className="section-body">
            {details.vegan ? <div className="tag">Vegan</div> : null}
            {details.vegetarian ? <div className="tag">Vegetarian</div> : null}
            {details.dairyFree ? <div className="tag">Dairy Free</div> : null}
            {details.glutenFree ? <div className="tag">Gluten Free</div> : null}
          </div>
        </div>
        <div className="section">
          <h5 className="section-title">
            Ingredients ({`${details.servings}`}Serving)
          </h5>
          <div className="ingredients">
            {details.extendedIngredients?.map((ingredient) => {
              return (
                <div key={ingredient.id} className="ingredients-container">
                  {ingredient.measures.metric.amount}&nbsp;
                  {ingredient.measures.metric.unitShort} &nbsp;&nbsp;&nbsp;
                  {ingredient.nameClean} &nbsp;&nbsp;
                </div>
              );
            })}
          </div>
        </div>
        <div className="section">
          <h5 className="section-title">
            Cooking Instructions ({details.readyInMinutes} Min){" "}
          </h5>
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
