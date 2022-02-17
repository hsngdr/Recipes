import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Random = ({ props }) => {
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState([]);

  const api_id = "c00557ab";
  const api_key = "ba5ed2cdcc4e64ff63a51f2cc935d8d4";

  const url = `https://api.edamam.com/search?q=${props}&app_id=${api_id}&app_key=${api_key}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setMeal(recipes[Math.floor(Math.random() * recipes.length)]);
  }, [recipes]);

  return (
    <div>
      <div className="detail-container">
        <div className="detail-title">{meal?.recipe?.label}</div>
        <div className="detail-headers">
          <img src={meal?.recipe?.image} alt={meal?.recipe?.label} />
          <div className="meal">{meal?.recipe?.mealType}</div>
          <div className="meal">
            Calories :{meal?.recipe?.calories.toFixed(0)}
          </div>
          <br />
          <a
            className="detail-source"
            target="_blank"
            rel="noopener noreferrer"
            href={meal?.recipe?.url}
          >
            <span className="detail-span">Source</span>
          </a>
          <br/><br/>
          <Link
            className="text-none"
            to={{
              pathname: "/RecipeDetails",
              state: {
                recipe: meal?.recipe,
              },
            }}
          >
            <span className="detail-span">Show Recipe Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Random;
