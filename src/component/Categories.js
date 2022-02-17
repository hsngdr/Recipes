import Axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";
import { useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const category=location.state.category;
  const api_id = "c00557ab";
  const api_key = "ba5ed2cdcc4e64ff63a51f2cc935d8d4";

  const url = `https://api.edamam.com/search?q=${category}&app_id=${api_id}&app_key=${api_key}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
  };

  useEffect(()=>{
      getData();
      
  },[category]);

  useEffect(()=>{console.log(recipes[0])},[recipes]);
  return (
    <div>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} props={recipe} />)}
      </div>
    </div>
  );
};

export default Categories;
