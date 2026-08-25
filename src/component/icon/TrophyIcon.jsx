import Icon from "../../assets/trophy.svg";

const TrophyIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Trophy",
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

export default TrophyIcon;