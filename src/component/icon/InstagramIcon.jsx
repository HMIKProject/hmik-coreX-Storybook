import Icon from "../../assets/instagram.svg";

const InstagramIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Instagram",
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

export default InstagramIcon;