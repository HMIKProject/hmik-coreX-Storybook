import React from "react";
import Icon from "../../assets/medkre.svg";

export const MedkreIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Medkre",
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

export default MedkreIcon;