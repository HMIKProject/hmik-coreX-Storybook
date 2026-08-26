import Icon from "../../assets/tape1.svg";

const Tape1Icon = ({
  width = 70,
  height = 70,
  alt = "Icon Tape 1",
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

export default Tape1Icon;