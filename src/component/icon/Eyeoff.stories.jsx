import Eyeoff from "./Eyeoff";

export default {
  title: "Atomic/Icon/Eyeoff",
  component: Eyeoff,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    width: 20,
    height: 20,
    alt: "Icon Eye Off",
  },
};