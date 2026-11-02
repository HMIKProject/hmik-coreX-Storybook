import WarningAlertIcon from "./WarningAlertIcon";

export default {
  title: "Atomic/Icon/WarningAlert",
  component: WarningAlertIcon,
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
    width: 84,
    height: 84,
    alt: "Icon Peringatan",
  },
};

export const Medium = {
  args: {
    width: 56,
    height: 56,
  },
};

export const Small = {
  args: {
    width: 32,
    height: 32,
  },
};
