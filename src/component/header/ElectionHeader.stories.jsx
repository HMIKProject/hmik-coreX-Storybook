import ElectionHeader from "./ElectionHeader";

export default {
  title: "Atomic/Header/ElectionHeader",
  component: ElectionHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "blue-canvas",
      values: [
        { name: "blue-canvas", value: "#4059AD" },
        { name: "light", value: "#F8F9FA" },
        { name: "dark", value: "#1A1A1A" },
      ],
    },
  },
  argTypes: {
    title: { control: "text" },
    badgeText: { control: "text" },
    showCrown: { control: "boolean" },
    showVoteBox: { control: "boolean" },
    showBadge: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "PEMILIHAN KETUA & WAKIL KETUA HMIK",
    badgeText: "ILMU KOMPUTER",
    showCrown: true,
    showVoteBox: true,
    showBadge: true,
  },
};

export const WithoutBadge = {
  args: {
    title: "PEMILIHAN KETUA & WAKIL KETUA HMIK",
    badgeText: "",
    showCrown: true,
    showVoteBox: true,
    showBadge: false,
  },
};

export const CustomTitle = {
  args: {
    title: "PEMILIHAN KETUA HIMPUNAN 2026/2027",
    badgeText: "FAKULTAS ILMU KOMPUTER",
    showCrown: true,
    showVoteBox: true,
    showBadge: true,
  },
};
