import React from "react";
import Icon from "../../assets/ChevronLeftIcon.svg";

const ChevronLeftIcon = ({
  width = 17,
  height = 27,
  alt = "Icon Chevron Left",
  className = "",
  style = {}
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
    />
  );
};

export default ChevronLeftIcon;
