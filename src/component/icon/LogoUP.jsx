import Logo from "../../assets/logo-UP.svg";

const LogoUP = ({
  width = 71,
  height = 52,
  alt = "Logo Universitas Pertamina",
}) => {
  return (
    <img
      src={Logo}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default LogoUP;