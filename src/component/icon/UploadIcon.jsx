import Icon from "../../assets/upload.svg";

export const UploadIcon = ({
  width = 24,
  height = 24,
  alt = "Icon Upload",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-upload ${className}`.trim()}
      {...props}
    />
  );
};

export default UploadIcon;
