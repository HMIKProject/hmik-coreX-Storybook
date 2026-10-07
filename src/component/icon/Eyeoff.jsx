import React from "react";
import Icon from "../../assets/eyeoff.svg";

const Eyeoff = ({
  width = 20,
  height = 20,
  alt = "Icon Eye Off",
  className = "",
  onClick,
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onClick={onClick}
    />
  );
};

export default Eyeoff;