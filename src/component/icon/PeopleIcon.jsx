import Icon from "../../assets/people.svg";

const PeopleIcon = ({
  width = 70,
  height = 70,
  alt = "Icon People",
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

export default PeopleIcon;