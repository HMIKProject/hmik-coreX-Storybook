import Icon from "../../assets/aboutus_title.svg";

const AboutusTitleIcon = ({
  width = 600,
  height = "auto",
  alt = "About Us Title",
  className = "",
  style = {}
}) => {
  return (
    <img
      src={Icon}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={{ maxWidth: "100%", height: "auto", ...style }}
    />
  );
};

export default AboutusTitleIcon;
