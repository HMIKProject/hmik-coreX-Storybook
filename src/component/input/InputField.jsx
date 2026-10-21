import React from "react";
import "./InputField.css";

<<<<<<< HEAD
const InputField = ({
=======
export const InputField = ({
>>>>>>> 4380e3f37571573f8032b3a1a304491cae91d412
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