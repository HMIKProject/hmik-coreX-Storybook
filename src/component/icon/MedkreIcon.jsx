import Icon from "../../assets/medkre.svg";

const Medkre = ({
  width = 70,
  height = 70,
  alt = "Icon Medkre",
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

export default Medkre;