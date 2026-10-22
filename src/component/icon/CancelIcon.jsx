import Icon from "../../assets/cancel.svg";

const CancelIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Cancel",
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

export default CancelIcon;