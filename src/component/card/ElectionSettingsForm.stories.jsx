import { ElectionSettingsForm } from './ElectionSettingsForm';

export default {
  title: 'Component/Card/ElectionSettingsForm',
  component: ElectionSettingsForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    initialData: {
      tahun_periode: '2026/2027',
      judul_pemilihan: 'Pemilihan Ketua & Wakil Ketua HMIK',
      metode_login:
        'Validasi Format Email Kampus (@student.universitaspertamina.ac.id)',
      tanggal_mulai: '2026-10-12T08:00',
      tanggal_selesai: '2026-10-14T17:00',
      logo_tengah: '',
      logo_kiri_1: '',
      logo_kiri_2: '',
    },
    onSubmit: (data) => alert(`Simpan: ${JSON.stringify(data, null, 2)}`),
  },
};
