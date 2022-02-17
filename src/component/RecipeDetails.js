import React from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = () => {
  const location = useLocation();
  const { calories, label, image, url, digest, ingredientLines, mealType } =
    location.state.recipe;

    console.log(location.state.recipe)
  const digestList = digest.map((a) => (
    <li className="detail-lis" key={uuidv4()}>
      {a.label}
    </li>
  ));
  const ingredientList = ingredientLines.map((b) => (
    <li className="detail-li" key={uuidv4()}>
      {b}
    </li>
  ));

  return (
    <div>
      <div className="detail-container">
        <div className="detail-title">{label}</div>
        <div className="detail-headers">
          <img src={image} alt={label} />
          <div className="meal">{mealType}</div>
          <div className="meal">Calories :{calories.toFixed(0)}</div>
          <br />
          <a
            className="detail-source"
            target="_blank"
            rel="noopener noreferrer"
            href={url}
          >
            <span className="detail-span">Source</span>
          </a>
        </div>
        <div className="detail-body">
          <div className="body-title">Instructions</div>
          <div>
            <ul>{ingredientList}</ul>
          </div>
          <div className="body-title">Nutrient</div>
          <div>
            <ul className="detail-list">{digestList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
