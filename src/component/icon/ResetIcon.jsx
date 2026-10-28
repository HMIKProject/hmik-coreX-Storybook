import React from "react";
import Icon from "../../assets/reset.svg";

export const ResetIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Reset",
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

export default ResetIcon;