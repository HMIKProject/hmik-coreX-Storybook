import VoteStatisticsCard from "./VoteStatisticsCard";

export default {
  title: "Component/Chart/VoteStatisticsCard",
  component: VoteStatisticsCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Judul grafik statistik",
    },
    isLive: {
      control: "boolean",
      description: "Status badge live",
    },
    liveBadgeText: {
      control: "text",
    },
    totalVotes: {
      control: { type: "number" },
      description: "Total suara masuk yang telah diverifikasi",
    },
    maxScale: {
      control: { type: "number" },
      description: "Nilai puncak skala Y-axis",
    },
    step: {
      control: { type: "number" },
      description: "Jarak kelipatan garis grid Y-axis",
    },
    onBack: { action: "back-to-dashboard-clicked" },
  },
};

export const Default = {
  args: {
    title: "Grafik Hasil Voting",
    isLive: true,
    liveBadgeText: "LIVE",
    totalVotes: 327,
    maxScale: 250,
    step: 50,
    candidates: [
      {
        id: "1",
        name: "Nanami Kento & Loid Forger",
        votes: 222,
        percentage: 67.8,
        color: "#4059AD",
        badgeBg: "#4059AD",
        badgeTextColor: "#FFFFFF",
      },
      {
        id: "2",
        name: "Kambe Daisuke & Hiromi Higuruma",
        votes: 105,
        percentage: 32.2,
        color: "#F7D070",
        badgeBg: "#F7D070",
        badgeTextColor: "#2B2B2B",
      },
    ],
  },
};

export const ThreeCandidates = {
  args: {
    title: "Grafik Perolehan Suara Calon Ketua HMIK",
    isLive: true,
    totalVotes: 410,
    maxScale: 250,
    step: 50,
    candidates: [
      {
        id: "1",
        name: "Paslon 01 - Nanami & Loid",
        votes: 195,
        percentage: 47.6,
        color: "#4059AD",
        badgeBg: "#4059AD",
        badgeTextColor: "#FFFFFF",
      },
      {
        id: "2",
        name: "Paslon 02 - Daisuke & Hiromi",
        votes: 140,
        percentage: 34.1,
        color: "#F7D070",
        badgeBg: "#F7D070",
        badgeTextColor: "#2B2B2B",
      },
      {
        id: "3",
        name: "Paslon 03 - Gojo & Geto",
        votes: 75,
        percentage: 18.3,
        color: "#27AE60",
        badgeBg: "#27AE60",
        badgeTextColor: "#FFFFFF",
      },
    ],
  },
};
