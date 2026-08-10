import Logo from "../../assets/logo-hmik.svg";

const LogoHmik = ({
  width = 120,
  height = 120,
  alt = "Logo HMIK",
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

export default LogoHmik;