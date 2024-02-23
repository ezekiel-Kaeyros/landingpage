/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Card = ({
  value = "01",
  content = "Gain valuable insights into your shop's performance with comprehensive analytics and reporting tools. ",
  className,
  numberClassName,
  headingClassName,
}) => {
  return (
    <div className={`card ${className}`}>
      <div className={`number ${numberClassName}`}>{value}</div>
      <p className={`heading ${headingClassName}`}>{content}</p>
    </div>
  );
};

Card.propTypes = {
  value: PropTypes.string,
  content: PropTypes.string,
};
