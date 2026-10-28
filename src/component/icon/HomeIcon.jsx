import Icon from "../../assets/home.svg";

const HomeIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Home",
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

export default HomeIcon;