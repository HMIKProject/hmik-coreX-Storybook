import Icon from "../../assets/crown.svg";

const CrownIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Crown",
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

export default CrownIcon;