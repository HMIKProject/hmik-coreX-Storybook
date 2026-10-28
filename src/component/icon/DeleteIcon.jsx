import React from "react";
import Icon from "../../assets/delete.svg";

export const DeleteIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Delete",
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

export default DeleteIcon;