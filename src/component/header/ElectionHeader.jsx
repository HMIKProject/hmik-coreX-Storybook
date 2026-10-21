import React from "react";
import CrownGoldIcon from "../icon/CrownGoldIcon";
import VoteBoxIcon from "../icon/VoteBoxIcon";
import "./ElectionHeader.css";

export const ElectionHeader = ({
  title = "PEMILIHAN KETUA & WAKIL KETUA HMIK",
  badgeText = "ILMU KOMPUTER",
  showCrown = true,
  showVoteBox = true,
  showBadge = true,
  className = "",
  ...props
}) => {
  return (
    <div className={`election-header-wrapper ${className}`.trim()} {...props}>
      <div className="election-header-card">
        {showCrown && (
          <div className="election-header-crown">
            <CrownGoldIcon alt="Mahkota Pemira HMIK" />
          </div>
        )}

        <div className="election-header-content">
          <h1 className="election-header-title">{title}</h1>
          {showVoteBox && (
            <VoteBoxIcon
              width={58}
              height={50}
              className="election-header-icon"
              alt="Kotak Suara"
            />
          )}
        </div>

        {showBadge && badgeText && (
          <div className="election-header-badge">
            <span>{badgeText}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectionHeader;
