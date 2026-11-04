import AdminSidebar from './AdminSidebar';

export default {
  title: 'Components/Sidebar/AdminSidebar',
  component: AdminSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    activeRoute: {
      control: 'select',
      options: [
        '/admin/dashboard',
        '/cari-anggota',
        '/admin/organisasi',
        '/admin/pemira',
        '/admin/modul',
      ],
    },
  },
};

const Template = (args) => (
  <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F0F2F1' }}>
    <AdminSidebar {...args} />
    <div style={{ padding: '32px', flex: 1 }}>
      <h2>Pratinjau Halaman ({args.activeRoute})</h2>
      <p>Konten halaman admin dimuat di sebelah kanan sidebar.</p>
    </div>
  </div>
);

export const DashboardActive = Template.bind({});
DashboardActive.args = {
  activeRoute: '/admin/dashboard',
  userName: 'Admin HMIK',
  userRole: 'Administrator',
  userInitials: 'AH',
};

export const CMSVotingActive = Template.bind({});
CMSVotingActive.args = {
  activeRoute: '/admin/pemira',
  userName: 'Panitia Pemira',
  userRole: 'Admin Pemilu',
  userInitials: 'KP',
};
