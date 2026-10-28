import Icon from "../../assets/cameraAdmin.svg";

const CameraIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Camera",
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

export default CameraIcon;