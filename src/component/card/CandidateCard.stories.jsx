import CandidateCard from "./CandidateCard";

export default {
  title: "Atomic/Card/CandidateCard",
  component: CandidateCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
    cabinetName: { control: "text" },
    leaderName: { control: "text" },
    leaderRole: { control: "text" },
    viceLeaderName: { control: "text" },
    viceLeaderRole: { control: "text" },
    vision: { control: "text" },
    missions: { control: "object" },
    isSelected: { control: "boolean" },
    buttonText: { control: "text" },
    selectedButtonText: { control: "text" },
    onSelect: { action: "selected" },
  },
};

export const Paslon1 = {
  args: {
    cabinetName: "KABINET ANJIR",
    leaderName: "Loid Forger",
    leaderRole: "Calon Ketua",
    viceLeaderName: "Nanami Kento",
    viceLeaderRole: "Calon Wakil Ketua",
    vision: "Menyejahterakan seluruh makhluk di negeri dan mendorong perkembangan teknologi",
    missions: [
      "Menebang semua pohon sawit yg ga berguna untuk diganti dengan reboisasi",
      "Menggratiskan pendidikan sampai kuliah",
      "Menghilangkan seluruh pajak",
      "Semua pendapatan usaha negara akan digunakan sebaik-baiknya untuk menyejahterakan semua makhluk di negeri (ga cuma manusia)",
      "Hukum siksa koruptor sampai mati",
    ],
    isSelected: false,
    buttonText: "Pilih Kandidat Ini",
    selectedButtonText: "Konfirmasi Pilihan Anda",
  },
};

export const Paslon2 = {
  args: {
    cabinetName: "KABINET ANJIR",
    leaderName: "Kambe Daisuke",
    leaderRole: "Calon Ketua",
    viceLeaderName: "Higuruma Hiromi",
    viceLeaderRole: "Calon Wakil Ketua",
    vision: "Menyejahterakan seluruh makhluk di negeri dan mendorong perkembangan teknologi",
    missions: [
      "Menebang semua pohon sawit yg ga berguna untuk diganti dengan reboisasi",
      "Menggratiskan pendidikan sampai kuliah",
      "Menghilangkan seluruh pajak",
      "Semua pendapatan usaha negara akan digunakan sebaik-baiknya untuk menyejahterakan semua makhluk di negeri (ga cuma manusia)",
      "Hukum siksa koruptor sampai mati",
    ],
    isSelected: false,
    buttonText: "Pilih Kandidat Ini",
    selectedButtonText: "Konfirmasi Pilihan Anda",
  },
};

export const SelectedState = {
  args: {
    ...Paslon1.args,
    isSelected: true,
  },
};
