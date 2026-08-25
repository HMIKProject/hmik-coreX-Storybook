import Icon from "../../assets/email.svg";

const EmailIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Email",
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

export default EmailIcon;