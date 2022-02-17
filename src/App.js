import Navbar from "./component/Navbar";
import "./component/style.css";
import React from "react";
import RecipeSearch from "./component/RecipeSearch";
import { Route, Switch } from "react-router-dom";
import RecipeDetails from "./component/RecipeDetails";
import Categories from "./component/Categories"
import Mealofday from "./component/Mealofday";
import Home from "./component/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Mealofday" component={Mealofday} />
        <Route exact path="/RecipeSearch" component={RecipeSearch} />
        <Route exact path="/RecipeDetails" component={RecipeDetails} />
        <Route exact path="/Categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
