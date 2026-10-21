import React from "react";
import Icon from "../../assets/CheckSquareIcon.svg";

export const CheckSquareIcon = ({
  width = 20,
  height = 20,
  alt = "Icon Check Square",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-check-square ${className}`.trim()}
      {...props}
    />
  );
};

export default CheckSquareIcon;
