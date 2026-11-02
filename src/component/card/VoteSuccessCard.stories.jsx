import React from "react";
import VoteSuccessCard from "./VoteSuccessCard";

export default {
  title: "Component/Card/VoteSuccessCard",
  component: VoteSuccessCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Judul konfirmasi sukses",
    },
    subtitle: {
      control: "text",
      description: "Deskripsi ucapan terima kasih",
    },
    countdownSeconds: {
      control: { type: "number", min: 0, max: 60 },
      description: "Durasi hitung mundur redirect (0 untuk menonaktifkan)",
    },
    showResetButton: {
      control: "boolean",
      description: "Menampilkan tombol reset",
    },
    buttonText: {
      control: "text",
      description: "Label tombol aksi",
    },
    onCountdownFinish: { action: "countdown-finished" },
    onReset: { action: "reset-clicked" },
  },
};

export const Default = {
  args: {
    title: "Suara Anda Berhasil Dicatat!",
    subtitle: "Terima kasih telah berpartisipasi aktif dalam Pemilihan Umum Ketua & Wakil Ketua HMIK Periode 2026/2027.",
    countdownSeconds: 5,
    showResetButton: true,
    buttonText: "Pilih Paslon Lagi (Reset)",
  },
};

export const WithoutCountdown = {
  args: {
    title: "Suara Anda Berhasil Dicatat!",
    subtitle: "Pilihan Anda telah tersimpan dengan enkripsi aman di server Pemilu HMIK.",
    countdownSeconds: 0,
    showResetButton: true,
    buttonText: "Kembali ke Beranda",
  },
};
