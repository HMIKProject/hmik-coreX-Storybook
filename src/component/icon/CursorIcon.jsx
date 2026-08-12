import Icon from "../../assets/cursor.svg";

const CursorIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Cursor",
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

export default CursorIcon;