/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TestimonyCard = ({
  role = "PDG of Oschuna",
  nameOfTestimoner = "Mme Christine Mbong",
  testimony = "“I have been extremely happy with the results of working with Invy, and I would highly recommend them to anyone who is looking for a high-quality tool.”",
  property1,
  className,
  imgClassName,
  img = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--2@2x.png",
  imageClassName,
  image = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image-2@2x.png",
  img1 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--3@2x.png",
  containerClassName,
  textClassName,
  tittleClassName,
  image1 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/image@2x.png",
  img2 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/--1@2x.png",
  img3 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/-@2x.png",
}) => {
  return (
    <div className={`testimony-card property-1-${property1} ${className}`}>
      <img
        className={`image ${imageClassName}`}
        alt="Image"
        src={["light", "mobile"].includes(property1) ? image : image1}
      />
      <div className={`container ${containerClassName}`}>
        <div className={`text-2 ${textClassName}`}>
          {["default", "light", "mobile"].includes(property1) && <p className="text-wrapper-33">{testimony}</p>}

          {property1 === "variant-2" && (
            <p className="text-wrapper-33">
              “I have been extremely happy with the results of working with Invy, and I would highly recommend them to
              anyone who is looking for a high-quality tool.”
            </p>
          )}
        </div>
        <div className="text-container">
          <div className={`tittle ${tittleClassName}`}>
            {["default", "light", "mobile"].includes(property1) && <>{nameOfTestimoner}</>}

            {property1 === "variant-2" && <>Mme Christine Mbong</>}
          </div>
          <div className="text-3">
            {["default", "light", "mobile"].includes(property1) && <>{role}</>}

            {property1 === "variant-2" && <>PDG of Oschuna</>}
          </div>
        </div>
      </div>
      <img
        className={`img ${imgClassName}`}
        alt="Img"
        src={property1 === "variant-2" ? img2 : property1 === "mobile" ? img : property1 === "light" ? img1 : img3}
      />
    </div>
  );
};

TestimonyCard.propTypes = {
  role: PropTypes.string,
  nameOfTestimoner: PropTypes.string,
  testimony: PropTypes.string,
  property1: PropTypes.oneOf(["variant-2", "light", "mobile", "default"]),
  img: PropTypes.string,
  image: PropTypes.string,
  img1: PropTypes.string,
  image1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
};
