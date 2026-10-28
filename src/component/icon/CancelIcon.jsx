import React from "react";
import Icon from "../../assets/cancel.svg";

export const CancelIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Cancel",
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

export default CancelIcon;