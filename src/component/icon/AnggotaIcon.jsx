import Icon from "../../assets/anggota.svg";

const AnggotaIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Anggota",
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

export default AnggotaIcon;