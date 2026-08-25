import Icon from "../../assets/academyup.svg";

const AcademyupIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Academy UP",
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

export default AcademyupIcon;