/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  question: string;
  answer: string;
  number: string;
  property1: "dropped" | "default";
  className: any;
  numberClassName: any;
  textContainerClassName: any;
  headingClassName: any;
  paragraphClassName: any;
  headingClassNameOverride: any;
  button: string;
}

export const FaqCard = ({
  question = "What countries can I send airtime to?",
  answer = "In all countries in the world ......",
  number = "01",
  property1,
  className,
  numberClassName,
  textContainerClassName,
  headingClassName,
  paragraphClassName,
  headingClassNameOverride,
  button = "/img/button-16.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`border border-solid border-white-95 w-[1160px] flex gap-[50px] px-[60px] py-[40px] rounded-[10px] bg-absolutewhite relative ${
        property1 === "dropped" ? "items-start" : "items-center"
      } ${property1 === "default" ? "justify-center" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Urbanist',Helvetica] w-[50px] mt-[-1.00px] tracking-[0] text-[38px] text-grey-10 font-bold leading-[normal] relative ${numberClassName}`}
      >
        {number}
      </div>
      <div className={`flex flex-col items-start grow gap-[14px] flex-1 relative ${textContainerClassName}`}>
        <p
          className={`[font-family:'Urbanist',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-[18px] text-grey-20 font-semibold leading-[normal] relative ${
            property1 === "dropped" ? headingClassName : property1 === "default" ? headingClassNameOverride : undefined
          }`}
        >
          {question}
        </p>
        {property1 === "dropped" && (
          <p
            className={`relative self-stretch [font-family:'Urbanist',Helvetica] font-medium text-grey-30 text-[16px] tracking-[0] leading-[24px] ${paragraphClassName}`}
          >
            {answer}
          </p>
        )}
      </div>
      <img
        className="flex-[0_0_auto] relative"
        alt="Button"
        src={property1 === "dropped" ? "/img/button-15.svg" : button}
      />
    </div>
  );
};

FaqCard.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  number: PropTypes.string,
  property1: PropTypes.oneOf(["dropped", "default"]),
  button: PropTypes.string,
};
