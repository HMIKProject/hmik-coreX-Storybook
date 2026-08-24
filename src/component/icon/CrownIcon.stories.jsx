import Icon from "./CrownIcon";

export default {
  title: "Atomic/Icon/Crown",
  component: Icon,
  tags: ['autodocs'],

  argTypes: {
    width: {
      control: {
        type: "number",
      },
    },

    height: {
      control: {
        type: "number",
      },
    },

    alt: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    width: 70,
    height: 70,
    alt: "Crown",
  },
};

export const Small = {
  args: {
    width: 50,
    height: 50,
  },
};

export const Medium = {
  args: {
    width: 100,
    height: 100,
  },
};

export const Large = {
  args: {
    width: 200,
    height: 200,
  },
};