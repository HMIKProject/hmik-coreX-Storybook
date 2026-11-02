import React from "react";
import VoteProgressBar, { VoteProgressBarGroup } from "./VoteProgressBar";

export default {
  title: "Component/Chart/VoteProgressBar",
  component: VoteProgressBar,
  tags: ["autodocs"],
  argTypes: {
    candidateName: {
      control: "text",
      description: "Nama calon pasangan / kandidat",
    },
    votes: {
      control: { type: "number" },
      description: "Jumlah perolehan suara",
    },
    percentage: {
      control: { type: "number", min: 0, max: 100 },
      description: "Persentase perolehan suara",
    },
    color: {
      control: "color",
      description: "Warna latar batang persentase",
    },
    showVoteCount: {
      control: "boolean",
      description: "Menampilkan jumlah suara di samping nama",
    },
  },
};

export const SingleBar = {
  args: {
    candidateName: "1. Nanami Kento & Loid Forger",
    votes: 221,
    percentage: 67.8,
    color: "#4059AD",
    showVoteCount: true,
  },
};

export const SmallPercentage = {
  args: {
    candidateName: "Kotak Kosong / Tidak Sah",
    votes: 12,
    percentage: 3.7,
    color: "#E74C3C",
    showVoteCount: true,
  },
};

export const CompleteGroup = () => (
  <VoteProgressBarGroup
    title="Hasil Perolehan Suara per Kandidat"
    totalVotes={327}
    candidates={[
      {
        id: "1",
        candidateName: "1. Nanami Kento & Loid Forger",
        votes: 221,
        percentage: 67.8,
        color: "#4059AD",
      },
      {
        id: "2",
        candidateName: "2. Kambe Daisuke & Hiromi Higuruma",
        votes: 106,
        percentage: 33.2,
        color: "#F7D070",
      },
    ]}
  />
);
