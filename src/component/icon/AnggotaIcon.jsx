import React from "react";
import Icon from "../../assets/anggota.svg";

export const AnggotaIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Anggota",
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

export default AnggotaIcon;