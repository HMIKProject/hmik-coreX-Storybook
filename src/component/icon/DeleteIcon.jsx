import Icon from "../../assets/delete.svg";

const DeleteIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Delete",
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

export default DeleteIcon;