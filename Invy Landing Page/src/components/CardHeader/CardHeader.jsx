/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CardHeader = ({
  className,
  avatar = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-10@2x.png",
  text = "Anan Rio",
}) => {
  return (
    <div className={`card-header ${className}`}>
      <div className="avatar-wrapper">
        <img className="avatar-2" alt="Avatar" src={avatar} />
      </div>
      <div className="media-content">
        <div className="anan-rio">{text}</div>
        <div className="text-wrapper-2">Regular Client</div>
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
};
