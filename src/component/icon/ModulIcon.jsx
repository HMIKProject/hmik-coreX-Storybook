import React from "react";
import Icon from "../../assets/modul.svg";

export const ModulIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Modul",
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

export default ModulIcon;