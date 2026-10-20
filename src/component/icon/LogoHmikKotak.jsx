import Logo from "../../assets/logo-hmik-kotak.svg";

const LogoHmikKotak = ({
  width = 120,
  height = 120,
  alt = "Logo HMIK Kotak",
  className = "",
}) => {
  return (
    <img
      src={Logo}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default LogoHmikKotak;
