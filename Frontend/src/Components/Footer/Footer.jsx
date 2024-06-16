import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="navbar-pomato-logo" src={assets.logo} alt="" />
          <p>
            The name Pomato is a portmanteau of the words Potato and Tomato. A
            pomato is a grafted plant that's a combination of a tomato plant and
            a potato plant.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>7782026508</li>
            <li>abhishekcpr2000@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        Copyright 2024 Pomato.com - All Right Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
