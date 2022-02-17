import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="navbar" id="nav">
        <Link className="logo" to="/">
          Recipes
        </Link>
        <div className="link">
          <Link to="/">Home</Link>
          <Link to="/Mealofday">Meal Of Day</Link>

          <div className="dropdown">
            <button className="dropbtn">
              Categories
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="header">
                <h2>Mega Menu</h2>
              </div>
              <div className="row">
                <div className="column">
                  <h3>Main Course</h3>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Soup" },
                    }}
                  >
                    Soup
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Pizza" },
                    }}
                  >
                    Pizza
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Chicken" },
                    }}
                  >
                    Chicken
                  </Link>
                </div>
                <div className="column">
                  <h3>Itermediate Meals</h3>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Breakfast" },
                    }}
                  >
                    Breakfast
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Salad" },
                    }}
                  >
                    Salad
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Nugget" },
                    }}
                  >
                    Nugget
                  </Link>
                </div>
                <div className="column">
                  <h3>Dessert</h3>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Milkshake" },
                    }}
                  >
                    Milkshake
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Ice cream" },
                    }}
                  >
                    Ice cream
                  </Link>
                  <Link
                    to={{
                      pathname: "/Categories",
                      state: { category: "Baklava" },
                    }}
                  >
                    Baklava
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
