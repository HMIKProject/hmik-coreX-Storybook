import React from "react";
import VoteConfirmationModal from "./VoteConfirmationModal";

export default {
  title: "Component/Modal/VoteConfirmationModal",
  component: VoteConfirmationModal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Menampilkan atau menyembunyikan modal",
    },
    candidateNumber: {
      control: "text",
      description: "Nomor urut paslon",
    },
    candidateName: {
      control: "text",
      description: "Nama calon ketua dan wakil",
    },
    cabinetName: {
      control: "text",
      description: "Nama kabinet",
    },
    title: {
      control: "text",
      description: "Judul modal",
    },
    message: {
      control: "text",
      description: "Pesan peringatan modal",
    },
    onClose: { action: "closed" },
    onConfirm: { action: "confirmed" },
  },
};

export const Paslon01 = {
  args: {
    isOpen: true,
    candidateNumber: "01",
    candidateName: "Loid Forger & Nanami Kento",
    cabinetName: "KABINET ANJIR",
    title: "Konfirmasi Pilihan Suara",
    message: "Apakah Anda yakin ingin memilih pasangan calon ini? Suara yang telah dikirim tidak dapat diubah kembali.",
    confirmText: "Ya, Konfirmasi Suara",
    cancelText: "Kembali ke Bilik Suara",
  },
};

export const Paslon02 = {
  args: {
    isOpen: true,
    candidateNumber: "02",
    candidateName: "Kambe Daisuke & Hiromi Higuruma",
    cabinetName: "KABINET SULTAN HMIK",
    title: "Konfirmasi Pilihan Suara",
    message: "Apakah Anda yakin ingin memilih pasangan calon ini? Suara yang telah dikirim tidak dapat diubah kembali.",
    confirmText: "Ya, Konfirmasi Suara",
    cancelText: "Kembali ke Bilik Suara",
  },
};
