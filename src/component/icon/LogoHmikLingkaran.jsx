import Logo from "../../assets/logo-hmik-lingkaran.svg";

const LogoHmikLingkaran = ({
  width = 120,
  height = 120,
  alt = "Logo HMIK Lingkaran",
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

export default LogoHmikLingkaran;
