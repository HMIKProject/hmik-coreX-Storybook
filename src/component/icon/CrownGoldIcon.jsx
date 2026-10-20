import React from "react";
import Icon from "../../assets/crowngold.svg";

export const CrownGoldIcon = ({
  width = 167,
  height = 167,
  alt = "Mahkota Emas HMIK",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-crown-gold ${className}`.trim()}
      {...props}
    />
  );
};

export default CrownGoldIcon;
