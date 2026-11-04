import AdminHeader from './AdminHeader';

export default {
  title: 'Components/Header/AdminHeader',
  component: AdminHeader,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    badgeText: { control: 'text' },
  },
};

const Template = (args) => <AdminHeader {...args} />;

export const DashboardHeader = Template.bind({});
DashboardHeader.args = {
  title: 'Dashboard Admin',
  subtitle: 'Himpunan Mahasiswa Ilmu Komputer',
  badgeText: 'Online Mode',
  badgeIndicator: '🟢',
};

export const CMSVotingHeader = Template.bind({});
CMSVotingHeader.args = {
  title: 'CMS Voting (Pemilihan Raya)',
  subtitle: 'Panel Monitoring Pleno & Rekapitulasi Suara',
  badgeText: 'Live Pleno',
  badgeIndicator: '🔴',
};
