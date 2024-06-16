import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Placeorder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
// import React from "react";

const App = () => {
  const [showLogin, setShowlogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <div className="app">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
