import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ props }) => {
  const { label, image, url, mealType, calories } = props.recipe;
  return (
    <div className="card-container">
      <div className="recipe">
        <div className="card-head">
          <img src={image} alt={label} />
        </div>
        <div className="card-body">
          <span className="tag">{mealType[0]}</span>
          <h4 className="card-title">{label}</h4>
          <h5>Calorie : {calories.toFixed(0)}</h5>
          <a
            className="text-none"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tag-source">Source</span>
          </a>
          <br />
        </div>
        <Link
          className="text-none"
          to={{
            pathname: "/RecipeDetails",
            state: {
              recipe: props.recipe,
            },
          }}
        >
          <div className="show-more">Show more</div>
        </Link>
      </div>
    </div>
  );
};
export default Recipe;
