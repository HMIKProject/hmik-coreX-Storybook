import React from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default {
  title: "Component/Modal/DeleteConfirmationModal",
  component: DeleteConfirmationModal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Menampilkan atau menyembunyikan modal",
    },
    title: {
      control: "text",
      description: "Judul modal konfirmasi hapus",
    },
    itemName: {
      control: "text",
      description: "Label nama item / objek yang akan dihapus",
    },
    message: {
      control: "text",
      description: "Teks peringatan",
    },
    cancelText: {
      control: "text",
    },
    confirmText: {
      control: "text",
    },
    onClose: { action: "closed" },
    onConfirm: { action: "confirmed-delete" },
  },
};

export const HapusDataPemilih = {
  args: {
    isOpen: true,
    title: "Hapus Data Pemilih",
    itemName: "10123001 - Budi Santoso (budi@pertamina.ac.id)",
    message: "Apakah Anda yakin ingin menghapus data pemilih ini? Pemilih yang dihapus tidak akan dapat menggunakan hak suaranya pada sistem.",
    cancelText: "Batal",
    confirmText: "Hapus Pemilih",
  },
};

export const HapusKandidat = {
  args: {
    isOpen: true,
    title: "Hapus Data Paslon",
    itemName: "Paslon 02 - Kambe Daisuke & Hiromi Higuruma",
    message: "Apakah Anda yakin ingin menghapus pasangan calon ini beserta seluruh data rekap perolehan suaranya?",
    cancelText: "Batal",
    confirmText: "Hapus Paslon",
  },
};
