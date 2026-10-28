import Icon from "../../assets/emailWhite.svg";

const EmailWhiteIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Email Putih",
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

export default EmailWhiteIcon;