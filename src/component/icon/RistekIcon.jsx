import Icon from "../../assets/ristek.svg";

const RistekIcon = ({
  width = 55,
  height = 55,
  alt = "Icon Ristek",
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

export default RistekIcon;