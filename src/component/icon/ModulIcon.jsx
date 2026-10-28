import Icon from "../../assets/modul.svg";

const ModulIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Modul",
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

export default ModulIcon;