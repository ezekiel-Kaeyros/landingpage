/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  className,
  logo = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/logo--3@2x.png",
}) => {
  return <img className={`logo ${className}`} alt="Logo" src={logo} />;
};

Logo.propTypes = {
  logo: PropTypes.string,
};
