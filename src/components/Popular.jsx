import { useEffect, useState } from "react";
import "./Popular.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Popular() {
  let [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  // getPopular fetches random popular recipies
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&limitLicense=true`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data);
    }
  };
  return (
    <div className="popular_recipe">
      <h3 className="popular_recipe_heading">Popular</h3>
      <Splide
        options={{
          perPage: 5,
          breakpoints: {
            768: {
              perPage: 3,
            },
            1024: { perPage: 4 },
            1300: { perPage: 5 },
          },

          pagination: false,
          arrows: true,
          drag: true,
          width: "100vw",
          gap: "1rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div key={recipe.id} className="popular_recipe_card">
                <Link to={"/recipe/" + recipe.id}>
                  <img
                    className="popular_recipe_img"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  {/* <p className="popular_recipe_title">{recipe.title}</p> */}
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Popular;
