import AdminActivityItem from './AdminActivityItem';
import { ModulIcon, UploadIcon, CheckRoundSuccessIcon } from '../icon';

export default {
  title: 'Components/Card/AdminActivityItem',
  component: AdminActivityItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    title: 'Modul Diperbarui',
    subtitle: 'Modul "Pengantar Algoritma" berhasil diupdate.',
    time: '2 Jam lalu',
    iconBg: '#4059AD',
    icon: <ModulIcon width={16} height={16} color="#FFFFFF" />,
  },
};

export const UploadAktivitas = {
  args: {
    title: 'Proposal Masuk',
    subtitle: 'Departemen Luar Kampus mengunggah proposal.',
    time: '4 Jam lalu',
    iconBg: '#F4B942',
    icon: <UploadIcon width={16} height={16} color="#111827" />,
  },
};

export const PemiraAktivitas = {
  args: {
    title: 'Suara Baru Masuk',
    subtitle: 'Mahasiswa NIM 102230xx berhasil menyalurkan suara.',
    time: 'Baru saja',
    iconBg: '#6B9080',
    icon: <CheckRoundSuccessIcon width={16} height={16} color="#FFFFFF" />,
  },
};
