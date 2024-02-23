/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Avatar = ({
  sizes,
  outline,
  online,
  className,
  avatarClassName,
  avatar = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar@2x.png",
  img = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-6@2x.png",
  avatar1 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-8@2x.png",
  avatar2 = "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-4@2x.png",
}) => {
  return (
    <div className={`avatar online-${online} ${sizes} ${className}`}>
      {!online && (
        <img
          className={`img-2 ${avatarClassName}`}
          alt="Avatar"
          src={
            outline && sizes === "md"
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-1@2x.png"
              : !outline && sizes === "xl"
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-2@2x.png"
              : outline && sizes === "xl"
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-3@2x.png"
              : !outline && sizes === "lg"
              ? avatar2
              : sizes === "lg" && outline
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-5@2x.png"
              : !outline && sizes === "sm"
              ? img
              : outline && sizes === "sm"
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-7@2x.png"
              : !outline && sizes === "xs"
              ? avatar1
              : sizes === "xs" && outline
              ? "https://cdn.animaapp.com/projects/65cc79cff9ce0f2159399612/releases/65cded7faf1edc31c38a7e07/img/avatar-9@2x.png"
              : avatar
          }
        />
      )}

      {online && <div className={`ellipse ${avatarClassName}`} />}
    </div>
  );
};

Avatar.propTypes = {
  sizes: PropTypes.oneOf(["xl", "xs", "lg", "sm", "md"]),
  outline: PropTypes.bool,
  online: PropTypes.bool,
  avatar: PropTypes.string,
  img: PropTypes.string,
  avatar1: PropTypes.string,
  avatar2: PropTypes.string,
};
