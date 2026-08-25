import Icon from "../../assets/eksternal.svg";

const EksternalIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Eksternal",
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

export default EksternalIcon;