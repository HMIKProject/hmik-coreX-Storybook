import LogoUP from "./LogoUP";

export default {
  title: "Atomic/Icon/Logo UP",
  component: LogoUP,
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
    width: 71,
    height: 52,
    alt: "Logo Universitas Pertamina",
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