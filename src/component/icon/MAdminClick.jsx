import Icon from "../../assets/ModulAdminClick.svg";

const MAdminClick = ({
  width = 20,
  height = 20,
  alt = "Modul Admin Click",
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

export default MAdminClick;