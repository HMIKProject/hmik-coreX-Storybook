import AdminDashboardMetricCard from './AdminDashboardMetricCard';

export default {
  title: 'Components/Card/AdminDashboardMetricCard',
  component: AdminDashboardMetricCard,
  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'yellow', 'green', 'orange'],
    },
    value: { control: 'text' },
    label: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '280px', padding: '20px', backgroundColor: '#F0F2F1' }}>
    <AdminDashboardMetricCard {...args} />
  </div>
);

export const TotalAnggota = Template.bind({});
TotalAnggota.args = {
  variant: 'blue',
  value: '50',
  label: 'Total Anggota Aktif',
  subtitle: '+ 7 Mahasiswa Bulan ini',
};

export const TotalModul = Template.bind({});
TotalModul.args = {
  variant: 'yellow',
  value: '18',
  label: 'Total Modul',
  subtitle: '+ 2 Modul Bulan ini',
};

export const TotalProgramKerja = Template.bind({});
TotalProgramKerja.args = {
  variant: 'green',
  value: '15',
  label: 'Total Program Kerja',
  subtitle: '+ 5 Program Kerja Bulan ini',
};

export const VotingAktif = Template.bind({});
VotingAktif.args = {
  variant: 'orange',
  value: '40',
  label: 'Voting Aktif',
  subtitle: 'Sedang Berlangsung',
};
