import { AdminTable, AdminTableBadge } from './AdminTable';

export default {
  title: 'Components/Table/AdminTable',
  component: AdminTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

const sampleColumns = [
  { key: 'nim', label: 'NIM', width: '140px' },
  { key: 'nama', label: 'Nama Lengkap' },
  { key: 'email', label: 'Email Kampus' },
  {
    key: 'status',
    label: 'Status',
    width: '150px',
    align: 'center',
    render: (val) =>
      val === 'Active' ? (
        <AdminTableBadge variant="success">Aktif</AdminTableBadge>
      ) : (
        <AdminTableBadge variant="warning">Nonaktif</AdminTableBadge>
      ),
  },
];

const sampleData = [
  {
    nim: '10522001',
    nama: 'Ahmad Faiz',
    email: '10522001@student.universitaspertamina.ac.id',
    status: 'Active',
  },
  {
    nim: '10522002',
    nama: 'Budi Santoso',
    email: '10522002@student.universitaspertamina.ac.id',
    status: 'Active',
  },
  {
    nim: '10522003',
    nama: 'Citra Kirana',
    email: '10522003@student.universitaspertamina.ac.id',
    status: 'Inactive',
  },
];

export const Default = {
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Loading = {
  args: {
    columns: sampleColumns,
    data: [],
    isLoading: true,
  },
};

export const Empty = {
  args: {
    columns: sampleColumns,
    data: [],
    emptyMessage: 'Tidak ada data pemilih yang cocok dengan pencarian.',
  },
};
