import React from "react";
import Icon from "../../assets/cameraAdmin.svg";

export const CameraIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Camera",
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

export default CameraIcon;