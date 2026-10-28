import Icon from "../../assets/reset.svg";

const ResetIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Reset",
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default ResetIcon;