import { CandidateAdminTable } from './CandidateAdminTable';

export default {
  title: 'Component/Table/CandidateAdminTable',
  component: CandidateAdminTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

const mockCandidates = [
  {
    id_paslon: 1,
    nomor_urut: 1,
    nama_ketua: 'Nanami Kento',
    nim_ketua: '10121001',
    nama_wakil: 'Loid Forger',
    nim_wakil: '10121002',
    nama_kabinet: 'Kabinet Maju Bersama',
    foto_paslon: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    visi: 'Mewujudkan HMIK yang solid, inovatif, dan berdampak bagi seluruh mahasiswa Ilmu Komputer.',
    misi: '1. Memperkuat kolaborasi antar angkatan.\n2. Menghadirkan program kerja unggulan.',
  },
  {
    id_paslon: 2,
    nomor_urut: 2,
    nama_ketua: 'Kambe Daisuke',
    nim_ketua: '10121005',
    nama_wakil: 'Hiromi Higuruma',
    nim_wakil: '10121006',
    nama_kabinet: 'Kabinet Karsa Cipta',
    foto_paslon: '',
    visi: 'Menciptakan ruang belajar dan riset teknologi modern.',
    misi: '1. Pendanaan riset mahasiswa.\n2. Penguatan kompetensi kepemimpinan.',
  },
];

export const Default = {
  args: {
    candidates: mockCandidates,
    onEdit: (candidate) => alert(`Edit paslon: ${candidate.nama_ketua}`),
    onDelete: (candidate) => alert(`Hapus paslon: ${candidate.nama_ketua}`),
  },
};

export const Loading = {
  args: {
    candidates: [],
    isLoading: true,
  },
};

export const Empty = {
  args: {
    candidates: [],
    isLoading: false,
    emptyMessage: 'Belum ada pasangan calon yang terdaftar.',
  },
};
