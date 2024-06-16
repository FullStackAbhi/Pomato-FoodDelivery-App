// import React from "react";
import AppDownload from "../../Components/AppDownload/AppDownload";
import Exploremenu from "../../Components/ExploreMenu/Exploremenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
