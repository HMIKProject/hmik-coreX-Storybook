import React from "react";
import Icon from "../../assets/home.svg";

export const HomeIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Home",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default HomeIcon;