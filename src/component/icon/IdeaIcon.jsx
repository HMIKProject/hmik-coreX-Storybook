import Icon from "../../assets/idea.svg";

const IdeaIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Idea",
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

export default IdeaIcon;