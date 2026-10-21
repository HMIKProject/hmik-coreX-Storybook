import CheckSquareIcon from "./CheckSquareIcon";

export default {
  title: "Atomic/Icon/CheckSquare",
  component: CheckSquareIcon,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
    alt: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    width: 20,
    height: 20,
    alt: "Icon Check Square",
  },
};

export const Large = {
  args: {
    width: 32,
    height: 32,
  },
};
