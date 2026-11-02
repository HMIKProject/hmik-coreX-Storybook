import Icon from "../../assets/checkRoundSuccess.svg";

export const CheckRoundSuccessIcon = ({
  width = 142,
  height = 142,
  alt = "Icon Sukses Centang",
  className = "",
  ...props
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={`icon-check-round-success ${className}`.trim()}
      {...props}
    />
  );
};

export default CheckRoundSuccessIcon;
