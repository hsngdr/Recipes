import Axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const api_id = "c00557ab";
  const api_key = "ba5ed2cdcc4e64ff63a51f2cc935d8d4";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    setQuery("");
  };

  const onChanged = (e) => {
    setQuery(e.target.value);
  };

  const onSubmited = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div>
      <div className="search-container">
        <form onSubmit={onSubmited}>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            autoComplete="off"
            onChange={onChanged}
            value={query}
          />
          <button type="submit" value="search">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} props={recipe} />)}
      </div>
    </div>
  );
};

export default RecipeSearch;
