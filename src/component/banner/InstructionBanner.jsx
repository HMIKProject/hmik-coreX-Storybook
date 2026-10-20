import React from "react";
import "./InstructionBanner.css";

export const InstructionBanner = ({
  text = "Silakan pilih salah satu pasangan calon di bawah ini. Klik sekali untuk memilih, klik lagi untuk konfirmasi suara Anda.",
  className = "",
  ...props
}) => {
  return (
    <div className={`instruction-banner-wrapper ${className}`.trim()} {...props}>
      <div className="instruction-banner">
        <p className="instruction-banner-text">{text}</p>
      </div>
    </div>
  );
};

export default InstructionBanner;
