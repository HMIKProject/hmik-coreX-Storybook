import Icon from "../../assets/medinfo.svg";

const MedinfoIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Medinfo",
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

export default MedinfoIcon;