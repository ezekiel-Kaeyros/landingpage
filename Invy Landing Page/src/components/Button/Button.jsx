/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Add } from "../Add";
import "./style.css";

export const Button = ({
  hasIcon = true,
  label = "Button",
  property1,
  size,
  states,
  outlined,
  className,
  override = (
    <Add
      className="add-instance"
      property1="bulk"
      propertyBulk="https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add-3@2x.png"
    />
  ),
  textClassName,
}) => {
  return (
    <button className={`button outlined-${outlined} ${size} ${states} ${property1} ${className}`}>
      {property1 === "default" && <div className={`text ${textClassName}`}>{label}</div>}

      {property1 === "right-icon" && outlined && <div className="text-wrapper">{label}</div>}

      {["icon-only", "left-icon", "right-icon"].includes(property1) && (
        <>
          <>
            {hasIcon && (
              <>
                <>
                  {(property1 === "left-icon" || (!outlined && property1 === "right-icon")) && <>{override}</>}

                  {(property1 === "icon-only" || (outlined && property1 === "right-icon")) && (
                    <Add
                      className="add-instance"
                      property1="bulk"
                      propertyBulk={
                        outlined && states === "active"
                          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add@2x.png"
                          : states === "disabled" && outlined && size === "desktop"
                          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add-6@2x.png"
                          : states === "active" && !outlined
                          ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add-3@2x.png"
                          : "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/add-9@2x.png"
                      }
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}

      {(property1 === "left-icon" || (!outlined && property1 === "right-icon")) && <div className="div">{label}</div>}
    </button>
  );
};

Button.propTypes = {
  hasIcon: PropTypes.bool,
  label: PropTypes.string,
  property1: PropTypes.oneOf(["right-icon", "icon-only", "left-icon", "default"]),
  size: PropTypes.oneOf(["desktop", "mobile"]),
  states: PropTypes.oneOf(["active", "disabled"]),
  outlined: PropTypes.bool,
};
