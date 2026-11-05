import { ElectionStatusControlCard } from './ElectionStatusControlCard';

export default {
  title: 'Component/Card/ElectionStatusControlCard',
  component: ElectionStatusControlCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const DraftMode = {
  args: {
    status: 'DRAFT',
    tahunPeriode: '2026/2027',
    tanggalMulai: '12 Okt 2026, 08:00 WIB',
    tanggalSelesai: '14 Okt 2026, 17:00 WIB',
    mpikStatus: 'PENDING',
    onActivate: () => alert('Pemilihan diaktifkan!'),
  },
};

export const LiveMode = {
  args: {
    status: 'BERJALAN',
    tahunPeriode: '2026/2027',
    tanggalMulai: '12 Okt 2026, 08:00 WIB',
    tanggalSelesai: '14 Okt 2026, 17:00 WIB',
    mpikStatus: 'PENDING',
    onCloseElection: () => alert('Pemilihan ditutup!'),
  },
};

export const FinishedApproved = {
  args: {
    status: 'SELESAI',
    tahunPeriode: '2026/2027',
    tanggalMulai: '12 Okt 2026, 08:00 WIB',
    tanggalSelesai: '14 Okt 2026, 17:00 WIB',
    mpikStatus: 'APPROVED',
    winningCandidate: 'Paslon 01 - Nanami Kento & Loid Forger (Kabinet Maju Bersama)',
    onResetDraft: () => alert('Reset ke draft'),
    onExportToHimpunan: () => alert('Ekspor ke Manajemen Himpunan berhasil!'),
  },
};
