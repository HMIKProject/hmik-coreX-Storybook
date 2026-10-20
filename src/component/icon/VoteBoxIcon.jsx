import React from "react";
import Icon from "../../assets/VoteBoxIcon.svg";

export const VoteBoxIcon = ({
  width = 44,
  height = 44,
  alt = "Icon Kotak Suara",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-vote-box ${className}`.trim()}
      {...props}
    />
  );
};

export default VoteBoxIcon;
