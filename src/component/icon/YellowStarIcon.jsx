import Icon from "../../assets/yellowStar.svg";

const YellowStarIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Yellow Star",
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

export default YellowStarIcon;