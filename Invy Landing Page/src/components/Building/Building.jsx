/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Building = ({
  property1,
  property2,
  className,
  propertyBulk = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bulk--property-2-building-4@2x.png",
}) => {
  return (
    <img
      className={`building ${className}`}
      alt="Property linear"
      src={
        property1 === "bold"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bold--property-2-building-4@2x.png"
          : property1 === "outline"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-outline--property-2-building-4@2x.png"
          : property1 === "twotone"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-twotone--property-2-building-4@2x.png"
          : property1 === "bulk"
          ? propertyBulk
          : property1 === "broken"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-broken--property-2-building-4@2x.png"
          : "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-linear--property-2-building-4@2x.png"
      }
    />
  );
};

Building.propTypes = {
  property1: PropTypes.oneOf(["twotone", "broken", "outline", "bold", "linear", "bulk"]),
  property2: PropTypes.oneOf(["building-4"]),
  propertyBulk: PropTypes.string,
};
