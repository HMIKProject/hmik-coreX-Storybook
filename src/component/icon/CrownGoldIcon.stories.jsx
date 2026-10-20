import CrownGoldIcon from "./CrownGoldIcon";

export default {
  title: "Atomic/Icon/CrownGold",
  component: CrownGoldIcon,
  tags: ["autodocs"],
  argTypes: {
    width: { control: { type: "number" } },
    height: { control: { type: "number" } },
    alt: { control: "text" },
  },
};

export const Default = {
  args: {
    width: 167,
    height: 167,
    alt: "Mahkota Emas HMIK",
  },
};

export const ScaledDown = {
  args: {
    width: 100,
    height: 100,
  },
};
