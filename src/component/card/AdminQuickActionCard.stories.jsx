import AdminQuickActionCard from './AdminQuickActionCard';
import UploadIcon from '../icon/UploadIcon';
import VoteBoxIcon from '../icon/VoteBoxIcon';
import BoxTaskIcon from '../icon/BoxTaskIcon';

export default {
  title: 'Components/Card/AdminQuickActionCard',
  component: AdminQuickActionCard,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    iconBg: { control: 'color' },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '360px', padding: '20px', backgroundColor: '#F0F2F1' }}>
    <AdminQuickActionCard {...args} />
  </div>
);

export const TambahAnggota = Template.bind({});
TambahAnggota.args = {
  title: 'Tambah Anggota',
  subtitle: 'Daftarkan Pengurus Baru',
  iconBg: '#E67E22',
  icon: <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>,
};

export const UnggahModul = Template.bind({});
UnggahModul.args = {
  title: 'Unggah Modul',
  subtitle: 'Unggah Materi Belajar',
  iconBg: '#4059AD',
  icon: <UploadIcon width={20} height={20} color="#FFFFFF" />,
};

export const MulaiVoting = Template.bind({});
MulaiVoting.args = {
  title: 'Mulai Voting',
  subtitle: 'Atur Voting Baru',
  iconBg: '#9CB3FF',
  icon: <VoteBoxIcon width={20} height={20} color="#2B2B2B" />,
};

export const ProgramKerja = Template.bind({});
ProgramKerja.args = {
  title: 'Program Kerja',
  subtitle: 'Atur Agenda Organisasi',
  iconBg: '#F4B943',
  icon: <BoxTaskIcon width={20} height={20} color="#2B2B2B" />,
};
