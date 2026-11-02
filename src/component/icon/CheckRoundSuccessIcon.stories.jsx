import CheckRoundSuccessIcon from "./CheckRoundSuccessIcon";

export default {
  title: "Atomic/Icon/CheckRoundSuccess",
  component: CheckRoundSuccessIcon,
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
    width: 142,
    height: 142,
    alt: "Icon Sukses Centang",
  },
};

export const Medium = {
  args: {
    width: 80,
    height: 80,
  },
};

export const Small = {
  args: {
    width: 48,
    height: 48,
  },
};
