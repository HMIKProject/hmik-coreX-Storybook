import { useRef, useState, useEffect } from "react";
import "./OTPInputGroup.css";

export const OTPInputGroup = ({
  length = 6,
  value = "",
  onChange,
  onComplete,
  isError = false,
  disabled = false,
  autoFocus = true,
  className = "",
  ...props
}) => {
  const [digits, setDigits] = useState(() => {
    const initial = new Array(length).fill("");
    if (value) {
      for (let i = 0; i < Math.min(value.length, length); i++) {
        initial[i] = value[i];
      }
    }
    return initial;
  });

  const [prevValue, setPrevValue] = useState(value);
  const inputsRef = useRef([]);

  // Sync state during render if value prop changes (React 19 recommended pattern)
  if (prevValue !== value) {
    setPrevValue(value);
    const updated = new Array(length).fill("");
    if (value) {
      for (let i = 0; i < Math.min(value.length, length); i++) {
        updated[i] = value[i];
      }
    }
    setDigits(updated);
  }

  useEffect(() => {
    if (autoFocus && inputsRef.current[0] && !disabled) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus, disabled]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, ""); // Hanya angka
    if (!val) {
      // Clear input
      const newDigits = [...digits];
      newDigits[index] = "";
      setDigits(newDigits);
      const combined = newDigits.join("");
      if (onChange) onChange(combined);
      return;
    }

    const lastChar = val[val.length - 1];
    const newDigits = [...digits];
    newDigits[index] = lastChar;
    setDigits(newDigits);

    const combined = newDigits.join("");
    if (onChange) onChange(combined);

    if (newDigits.every((d) => d !== "") && onComplete) {
      onComplete(combined);
    }

    // Auto-advance to next box
    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, length);
    if (!pasteData) return;

    const newDigits = [...digits];
    for (let i = 0; i < pasteData.length; i++) {
      newDigits[i] = pasteData[i];
    }
    setDigits(newDigits);

    const combined = newDigits.join("");
    if (onChange) onChange(combined);

    if (newDigits.every((d) => d !== "") && onComplete) {
      onComplete(combined);
    }

    const nextIndex = Math.min(pasteData.length, length - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  return (
    <div
      className={`otp-input-container ${isError ? "otp-input-error" : ""} ${
        disabled ? "otp-input-disabled" : ""
      } ${className}`.trim()}
      {...props}
    >
      <div className="otp-input-group" onPaste={handlePaste}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={disabled}
            className={`otp-digit-box ${digit ? "otp-digit-filled" : ""}`}
            aria-label={`Digit OTP ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInputGroup;
