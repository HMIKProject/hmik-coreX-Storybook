import Icon from "../../assets/structure.svg";

const StructureIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Structure",
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

export default StructureIcon;