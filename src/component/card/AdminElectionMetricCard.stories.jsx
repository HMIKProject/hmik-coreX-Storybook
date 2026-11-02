import React from "react";
import AdminElectionMetricCard from "./AdminElectionMetricCard";

export default {
  title: "Component/Card/AdminElectionMetricCard",
  component: AdminElectionMetricCard,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["suara-masuk", "pemilih-terdaftar", "partisipasi", "kandidat"],
      description: "Varian kartu statistik",
    },
    value: {
      control: "text",
      description: "Nilai data angka statistik",
    },
    label: {
      control: "text",
      description: "Label judul kartu",
    },
    subtitle: {
      control: "text",
      description: "Keterangan tambahan di bagian bawah kartu",
    },
  },
};

export const SuaraMasuk = {
  args: {
    variant: "suara-masuk",
    value: "327",
    label: "SUARA MASUK",
    subtitle: "Total suara yang telah diverifikasi",
  },
};

export const PemilihTerdaftar = {
  args: {
    variant: "pemilih-terdaftar",
    value: "450",
    label: "PEMILIH TERDAFTAR",
    subtitle: "Total mahasiswa dalam DPT",
  },
};

export const Partisipasi = {
  args: {
    variant: "partisipasi",
    value: "72.7%",
    label: "PARTISIPASI",
    subtitle: "Persentase kehadiran pemilih",
  },
};

export const Kandidat = {
  args: {
    variant: "kandidat",
    value: "2",
    label: "KANDIDAT",
    subtitle: "Pasangan calon terverifikasi",
  },
};

export const GridPreview = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
      padding: "16px",
      backgroundColor: "#F8FAFC",
    }}
  >
    <AdminElectionMetricCard
      variant="suara-masuk"
      value="327"
    />
    <AdminElectionMetricCard
      variant="pemilih-terdaftar"
      value="450"
    />
    <AdminElectionMetricCard
      variant="partisipasi"
      value="72.7%"
    />
    <AdminElectionMetricCard
      variant="kandidat"
      value="2"
    />
  </div>
);
