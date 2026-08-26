import Icon from "../../assets/4star.svg";

const AstarIcon = ({
  width = 70,
  height = 70,
  alt = "Icon 4star",
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

export default AstarIcon;