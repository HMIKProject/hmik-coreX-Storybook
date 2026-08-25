import Icon from "../../assets/gear.svg";

const GearIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Gear",
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

export default GearIcon;