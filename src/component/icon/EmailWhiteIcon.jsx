import React from "react";
import Icon from "../../assets/emailWhite.svg";

export const EmailWhiteIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Email Putih",
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

export default EmailWhiteIcon;