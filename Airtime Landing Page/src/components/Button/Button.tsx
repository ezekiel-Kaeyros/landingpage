/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Add4 } from "../../icons/Add4";

interface Props {
  hasRightIcon: boolean;
  button: string;
  hasLeftIcon: boolean;
  property1:
    | "btn-right-icon"
    | "default"
    | "btn-disable"
    | "btn-icon-outline"
    | "btn-hover"
    | "btn-left-icon"
    | "btn-light"
    | "btn-outline"
    | "btn-mobile"
    | "btn-icon-only";
  className: any;
  divClassName: any;
  divClassNameOverride: any;
}

export const Button = ({
  hasRightIcon = true,
  button = "Button",
  hasLeftIcon = true,
  property1,
  className,
  divClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center rounded-[var(--token-raduis-sm)] justify-center relative ${
        ["btn-icon-outline", "btn-outline"].includes(property1) ? "border border-solid" : ""
      } ${["btn-icon-outline", "btn-outline"].includes(property1) ? "border-token-colors-btn-colors" : ""} ${
        property1 === "btn-disable" ? "opacity-60" : ""
      } ${
        property1 === "btn-right-icon"
          ? "gap-[var(--primitives-spacing-4-grid-2)]"
          : ["btn-left-icon", "btn-outline"].includes(property1)
          ? "gap-[var(--token-raduis-sm)]"
          : "gap-[var(--token-raduis-md)]"
      } ${
        property1 === "default"
          ? "pt-[var(--primitives-spacing-4-grid-3)] pr-[var(--primitives-spacing-4-grid-6)] pb-[var(--primitives-spacing-4-grid-3)] pl-[var(--primitives-spacing-4-grid-6)]"
          : property1 === "btn-disable"
          ? "px-[24px] py-[12px]"
          : property1 === "btn-mobile"
          ? "pt-[var(--primitives-spacing-4-grid-3)] pb-[var(--primitives-spacing-4-grid-3)] px-[16px]"
          : ["btn-icon-only", "btn-icon-outline"].includes(property1)
          ? "p-[16px]"
          : "px-[16px] py-[12px]"
      } ${
        ["btn-icon-only", "btn-left-icon", "btn-mobile", "btn-right-icon", "default"].includes(property1)
          ? "bg-token-colors-btn-colors"
          : property1 === "btn-hover"
          ? "bg-token-colors-btn-hover"
          : property1 === "btn-disable"
          ? "bg-[#66c79466]"
          : property1 === "btn-light"
          ? "bg-token-colors-btn-light"
          : ""
      } ${className}`}
    >
      {["btn-disable", "btn-hover", "default"].includes(property1) && (
        <div
          className={`font-desktop-button w-fit mt-[-1.00px] tracking-[var(--desktop-button-letter-spacing)] text-[length:var(--desktop-button-font-size)] [font-style:var(--desktop-button-font-style)] relative font-[number:var(--desktop-button-font-weight)] whitespace-nowrap leading-[var(--desktop-button-line-height)] ${
            property1 === "btn-disable" ? "text-token-colors-subtitle-text" : "text-token-colors-btn-label"
          } ${divClassNameOverride}`}
        >
          {button}
        </div>
      )}

      {["btn-icon-only", "btn-icon-outline", "btn-left-icon", "btn-light", "btn-mobile", "btn-outline"].includes(
        property1
      ) && (
        <>
          <>
            {hasLeftIcon && (
              <Add4
                className="!relative !w-[24px] !h-[24px]"
                color={
                  ["btn-icon-outline", "btn-outline"].includes(property1)
                    ? "#04773B"
                    : property1 === "btn-light"
                    ? "#0C1618"
                    : "white"
                }
              />
            )}
          </>
        </>
      )}

      {["btn-left-icon", "btn-right-icon"].includes(property1) && (
        <div className="font-desktop-button w-fit tracking-[var(--desktop-button-letter-spacing)] [font-style:var(--desktop-button-font-style)] text-[length:var(--desktop-button-font-size)] text-token-colors-btn-label font-[number:var(--desktop-button-font-weight)] leading-[var(--desktop-button-line-height)] whitespace-nowrap relative">
          {button}
        </div>
      )}

      {["btn-light", "btn-mobile", "btn-outline"].includes(property1) && (
        <div
          className={`font-desktop-button w-fit tracking-[var(--desktop-button-letter-spacing)] [font-style:var(--desktop-button-font-style)] text-[length:var(--desktop-button-font-size)] relative font-[number:var(--desktop-button-font-weight)] whitespace-nowrap leading-[var(--desktop-button-line-height)] ${
            property1 === "btn-light"
              ? "text-token-colors-text-color"
              : property1 === "btn-mobile"
              ? "text-token-colors-btn-label"
              : "text-token-colors-btn-colors"
          } ${divClassName}`}
        >
          {button}
        </div>
      )}

      {["btn-light", "btn-mobile", "btn-outline", "btn-right-icon"].includes(property1) && (
        <>
          <>
            {hasRightIcon && (
              <Add4
                className="!relative !w-[24px] !h-[24px]"
                color={property1 === "btn-outline" ? "#04773B" : property1 === "btn-light" ? "#0C1618" : "white"}
              />
            )}
          </>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  hasRightIcon: PropTypes.bool,
  button: PropTypes.string,
  hasLeftIcon: PropTypes.bool,
  property1: PropTypes.oneOf([
    "btn-right-icon",
    "default",
    "btn-disable",
    "btn-icon-outline",
    "btn-hover",
    "btn-left-icon",
    "btn-light",
    "btn-outline",
    "btn-mobile",
    "btn-icon-only",
  ]),
};
