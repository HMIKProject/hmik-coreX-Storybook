import Icon from "../../assets/VotingAdminClick.svg";

const VAdminClick = ({
  width = 20,
  height = 20,
  alt = "Voting Admin Click",
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

export default VAdminClick;