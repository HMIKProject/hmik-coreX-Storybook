import Icon from "../../assets/AnggotaAdminClick.svg";

const AnggotaAdminClick = ({
  width = 20,
  height = 20,
  alt = "Anggota Admin Click",
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

export default AnggotaAdminClick;