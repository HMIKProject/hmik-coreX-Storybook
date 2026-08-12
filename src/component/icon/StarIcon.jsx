import Icon from "../../assets/star.svg";

const StarIcon = ({
  width = 82,
  height = 77,
  alt = "Icon Star",
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

export default StarIcon;