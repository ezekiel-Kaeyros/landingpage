/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Shop = ({
  property1,
  className,
  propertyBulk = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bulk-1@2x.png",
}) => {
  return (
    <img
      className={`shop ${className}`}
      alt="Property linear"
      src={
        property1 === "bold"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bold-4@2x.png"
          : property1 === "outline"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-outline-1@2x.png"
          : property1 === "twotone"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-twotone-1@2x.png"
          : property1 === "bulk"
          ? propertyBulk
          : property1 === "broken"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-broken-4@2x.png"
          : "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-linear-1@2x.png"
      }
    />
  );
};

Shop.propTypes = {
  property1: PropTypes.oneOf(["twotone", "broken", "outline", "bold", "linear", "bulk"]),
  propertyBulk: PropTypes.string,
};
