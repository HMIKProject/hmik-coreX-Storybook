import React from "react";
import Icon from "../../assets/eyeoff.svg";

<<<<<<< HEAD
const Eyeoff = ({
=======
export const Eyeoff = ({
>>>>>>> 4380e3f37571573f8032b3a1a304491cae91d412
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