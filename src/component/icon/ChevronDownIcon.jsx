import React from "react";
import Icon from "../../assets/ChevronDownIcon.svg";

const ChevronDownIcon = ({
  width = 15,
  height = 15,
  alt = "Icon Chevron Down",
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

export default ChevronDownIcon;
