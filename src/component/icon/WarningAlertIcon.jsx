import Icon from "../../assets/warningAlert.svg";

export const WarningAlertIcon = ({
  width = 84,
  height = 84,
  alt = "Icon Peringatan",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-warning-alert ${className}`.trim()}
      {...props}
    />
  );
};

export default WarningAlertIcon;
