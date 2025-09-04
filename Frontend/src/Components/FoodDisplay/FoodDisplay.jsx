/* eslint-disable react/prop-types */
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import { Foodiitem } from "../FoodItem/Foodiitem";

// import React from 'react'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredList =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.map((item) => (
          <Foodiitem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
