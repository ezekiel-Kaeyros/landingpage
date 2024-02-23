/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const Add4 = ({ color = "#0C1618", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        opacity={opacity}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M12 18V6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <g opacity="0" />
    </svg>
  );
};

Add4.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
