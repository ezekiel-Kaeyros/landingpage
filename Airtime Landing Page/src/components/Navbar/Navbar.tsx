/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Linear2 } from "../../icons/Property1Linear2";

interface Props {
  property1: "variant-3" | "tablet" | "default";
  className: any;
}

export const Navbar = ({ property1, className }: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-[#e3e3e3fc] flex items-center justify-between rounded-[100px] [-webkit-backdrop-filter:blur(34px)_brightness(100%)] bg-[#fcfcfc57] backdrop-blur-[34px] backdrop-brightness-[100%] relative ${
        property1 === "default" ? "w-[1282px]" : "w-[756px]"
      } ${
        property1 === "default"
          ? "p-[16px]"
          : "pt-[var(--tokens-spacing-4-pt-2)] pr-[var(--tokens-spacing-4-pt-2)] pb-[var(--tokens-spacing-4-pt-2)] pl-[var(--tokens-spacing-4-pt-2)]"
      } ${className}`}
    >
      <div className="inline-flex items-center gap-[30px] flex-[0_0_auto] relative">
        <img
          className={`object-cover relative ${property1 === "variant-3" ? "w-[49.68px]" : "w-[99.37px]"} ${
            property1 === "variant-3" ? "h-[16px]" : "h-[32px]"
          }`}
          alt="Asset"
          src={property1 === "variant-3" ? "/img/asset-2-300x-1-7.png" : "/img/asset-2-300x-1-8.png"}
        />
        {["default", "tablet"].includes(property1) && (
          <div className="inline-flex items-center gap-[20px] flex-[0_0_auto] relative">
            <div className="[font-family:'Urbanist',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-grey-30 font-medium leading-[21px] whitespace-nowrap relative">
              Integration
            </div>
            <div className="[font-family:'Urbanist',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[14px] text-grey-30 font-medium leading-[21px] whitespace-nowrap relative">
              Pricing
            </div>
          </div>
        )}
      </div>
      {["default", "tablet"].includes(property1) && (
        <button className="all-[unset] box-border inline-flex items-center gap-[8px] flex-[0_0_auto] pl-[16px] pr-[8px] py-[8px] rounded-[100px] bg-[#65dd91] relative">
          <div className="[font-family:'Urbanist',Helvetica] w-fit tracking-[0] text-[14px] text-[#292828] font-medium leading-[21px] whitespace-nowrap relative">
            Contact Us
          </div>
          <img className="flex-[0_0_auto] relative" alt="Icon container" src="/img/icon-container-14.svg" />
        </button>
      )}

      {property1 === "variant-3" && <Property1Linear2 className="!relative !w-[24px] !h-[24px]" color="#4C4C4D" />}
    </div>
  );
};

Navbar.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "tablet", "default"]),
};
