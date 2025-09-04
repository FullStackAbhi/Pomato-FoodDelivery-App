// import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="header-contents">
        <h2>Order your favourite food hear</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary experties.Our mission
          is to satisfy your cravings and elevate your dining experience{" "}
        </p>
        <Link to={"explore-menu"}>
          <button>View Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
