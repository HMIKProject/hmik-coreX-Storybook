import UploadIcon from "./UploadIcon";

export default {
  title: "Atomic/Icon/Upload",
  component: UploadIcon,
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
    width: 24,
    height: 24,
    alt: "Icon Upload",
  },
};

export const Large = {
  args: {
    width: 48,
    height: 48,
  },
};
