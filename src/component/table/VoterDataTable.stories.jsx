import VoterDataTable from './VoterDataTable';

export default {
  title: 'Components/Table/VoterDataTable',
  component: VoterDataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const sampleVoters = [
  {
    id_pemilih: 1,
    nim: '10123001',
    email: 'budi.mhs@student.universitaspertamina.ac.id',
    prodi: 'S1 Teknik Informatika',
    status_memilih: true,
    login_terakhir: '12 Okt 2024, 16.30',
    tgl_registrasi: '1 Okt 2024, 15.00',
  },
  {
    id_pemilih: 2,
    nim: '10123002',
    email: 'siti.mhs@student.universitaspertamina.ac.id',
    prodi: 'S1 Sistem Informasi',
    status_memilih: false,
    login_terakhir: '-',
    tgl_registrasi: '1 Okt 2024, 15.00',
  },
  {
    id_pemilih: 3,
    nim: '10123003',
    email: 'andi.mhs@student.universitaspertamina.ac.id',
    prodi: 'S1 Teknik Komputer',
    status_memilih: true,
    login_terakhir: '12 Okt 2024, 16.45',
    tgl_registrasi: '2 Okt 2024, 17.00',
  },
  {
    id_pemilih: 4,
    nim: '10123004',
    email: 'dewi.mhs@student.universitaspertamina.ac.id',
    prodi: 'S1 Teknik Informatika',
    status_memilih: false,
    login_terakhir: '-',
    tgl_registrasi: '2 Okt 2024, 18.00',
  },
];

export const Default = {
  args: {
    voters: sampleVoters,
    onDelete: (voter) => alert(`Hapus data pemilih: ${voter.nim}`),
  },
};
