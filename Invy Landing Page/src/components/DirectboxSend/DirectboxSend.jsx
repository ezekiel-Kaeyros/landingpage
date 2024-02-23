/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DirectboxSend = ({
  property1,
  className,
  propertyBulk = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bulk-2@2x.png",
}) => {
  return (
    <img
      className={`directbox-send ${className}`}
      alt="Property linear"
      src={
        property1 === "bold"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-bold-2@2x.png"
          : property1 === "outline"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-outline-2@2x.png"
          : property1 === "twotone"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-twotone-2@2x.png"
          : property1 === "bulk"
          ? propertyBulk
          : property1 === "broken"
          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-broken-2@2x.png"
          : "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/property-1-linear-2@2x.png"
      }
    />
  );
};

DirectboxSend.propTypes = {
  property1: PropTypes.oneOf(["twotone", "broken", "outline", "bold", "linear", "bulk"]),
  propertyBulk: PropTypes.string,
};
