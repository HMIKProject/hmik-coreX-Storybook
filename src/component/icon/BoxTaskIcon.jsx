import React from "react";
import Icon from "../../assets/boxTask.svg";

export const BoxTaskIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Box Task",
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

export default BoxTaskIcon;