import InstructionBanner from "./InstructionBanner";

export default {
  title: "Atomic/Banner/InstructionBanner",
  component: InstructionBanner,
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
    text: { control: "text" },
  },
};

export const Default = {
  args: {
    text: "Silakan pilih salah satu pasangan calon di bawah ini. Klik sekali untuk memilih, klik lagi untuk konfirmasi suara Anda.",
  },
};

export const Short = {
  args: {
    text: "Pilih kandidat pilihan Anda dan konfirmasi suara sebelum waktu habis.",
  },
};
