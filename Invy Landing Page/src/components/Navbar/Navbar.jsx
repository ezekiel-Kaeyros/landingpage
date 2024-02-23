/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import "./style.css";

export const Navbar = ({ property1, className, buttonClassName, textClassName, iconClassName }) => {
  return (
    <div className={`navbar property-1-6-${property1} ${className}`}>
      {["default", "tablet"].includes(property1) && (
        <>
          <div className="frame">
            <Logo
              className="logo-instance"
              logo="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo-@2x.png"
            />
            <div className="buttons-container">
              <div className="text-button">Integration</div>
              <div className="text-button">Pricing</div>
            </div>
          </div>
          <button className={`button-2 ${buttonClassName}`}>
            <div className={`text-4 ${textClassName}`}>Contact Us</div>
            <img
              className={`icon ${iconClassName}`}
              alt="Icon"
              src="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/icon@2x.png"
            />
          </button>
        </>
      )}

      {property1 === "mobile" && (
        <>
          <Logo
            className="instance-node"
            logo="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo--1@2x.png"
          />
          <Menu
            className="menu-instance"
            property1="linear"
            propertyLinear="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/menu@2x.png"
          />
        </>
      )}
    </div>
  );
};

Navbar.propTypes = {
  property1: PropTypes.oneOf(["default", "tablet", "mobile"]),
};
