import Icon from "./MAdminUnclick";

export default {
  title: "Atomic/Icon/MAdminUnclick",
  component: Icon,
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
    width: 44,
    height: 44,
    alt: "Icon Modul Admin Unclick",
  },
};

export const Small = {
  args: {
    width: 24,
    height: 24,
  },
};

export const Large = {
  args: {
    width: 69,
    height: 69,
  },
};
