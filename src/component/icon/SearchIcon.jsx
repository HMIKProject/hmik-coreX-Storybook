import Icon from "../../assets/search.svg";

const SearchIcon = ({
  width = 70,
  height = 70,
  alt = "Icon Search",
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

export default SearchIcon;