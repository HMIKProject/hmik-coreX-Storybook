import Icon from "../../assets/note.svg";

const NoteIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Note",
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

export default NoteIcon;