import Icon from "../../assets/departemen.svg";

const DepartemenIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Departemen",
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

export default DepartemenIcon;