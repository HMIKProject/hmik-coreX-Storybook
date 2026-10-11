import React from "react";
import "./InputField.css";

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  variant = "default",
  className = "",
  ...props
}) => {
  const getVariantClass = () => {
    if (variant === "success") return "input-success";
    if (variant === "error") return "input-error";
    if (variant === "warning") return "input-warning";
    return "";
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input-field ${getVariantClass()} ${className}`.trim()}
      {...props}
    />
  );
};

export default InputField;