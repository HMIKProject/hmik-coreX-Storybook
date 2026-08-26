import Icon from "../../assets/money.svg";

const MoneyIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Money",
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

export default MoneyIcon;