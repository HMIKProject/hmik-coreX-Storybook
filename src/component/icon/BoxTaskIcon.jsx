import Icon from "../../assets/boxTask.svg";

const BoxTaskIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Box Task",
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

export default BoxTaskIcon;