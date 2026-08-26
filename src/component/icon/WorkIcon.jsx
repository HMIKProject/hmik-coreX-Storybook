import Icon from "../../assets/work.svg";

const WorkIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Work",
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

export default WorkIcon;