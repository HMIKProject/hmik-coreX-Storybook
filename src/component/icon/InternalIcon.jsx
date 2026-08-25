import Icon from "../../assets/internal.svg";

const InternalIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Internal",
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

export default InternalIcon;