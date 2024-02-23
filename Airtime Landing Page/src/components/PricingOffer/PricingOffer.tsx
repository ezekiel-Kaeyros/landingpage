/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1Twotone } from "../../icons/Property1Twotone";

interface Props {
  text: string;
  className: any;
  icon: JSX.Element;
  divClassName: any;
}

export const PricingOffer = ({
  text = "100 Numbers / month ",
  className,
  icon = <Property1Twotone className="!relative !w-[18px] !h-[18px]" color="#56787F" />,
  divClassName,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[5px] relative ${className}`}>
      {icon}
      <p
        className={`relative w-fit mt-[-1.00px] [font-family:'Visby_CF-Regular',Helvetica] font-normal text-primitives-colors-rich-black-200 text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap ${divClassName}`}
      >
        {text}
      </p>
    </div>
  );
};

PricingOffer.propTypes = {
  text: PropTypes.string,
};
