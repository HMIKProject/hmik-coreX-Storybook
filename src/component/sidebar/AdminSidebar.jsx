import { useState, useEffect } from 'react';
import LogoHmikPutih from '../icon/LogoHmikPutih';
import HomeIcon from '../icon/HomeIcon';
import AnggotaIcon from '../icon/AnggotaIcon';
import StructureIcon from '../icon/StructureIcon';
import VoteBoxIcon from '../icon/VoteBoxIcon';
import ModulIcon from '../icon/ModulIcon';
import './AdminSidebar.css';

const DEFAULT_MENU_ITEMS = [
  {
    path: '/admin/dashboard',
    label: 'Halaman Utama',
    icon: (isActive) => <HomeIcon width={22} height={22} color={isActive ? '#2B2B2B' : '#FFFFFF'} />,
  },
  {
    path: '/cari-anggota',
    label: 'Buku Induk Anggota',
    icon: (isActive) => <AnggotaIcon width={22} height={22} color={isActive ? '#2B2B2B' : '#FFFFFF'} />,
  },
  {
    path: '/admin/organisasi',
    label: 'Struktur Organisasi',
    icon: (isActive) => <StructureIcon width={22} height={22} color={isActive ? '#2B2B2B' : '#FFFFFF'} />,
  },
  {
    path: '/admin/pemira',
    label: 'CMS Voting',
    icon: (isActive) => <VoteBoxIcon width={22} height={22} color={isActive ? '#2B2B2B' : '#FFFFFF'} />,
    children: [
      { path: '/admin/pemira', label: 'Halaman Utama' },
      { path: '/admin/pemira/kandidat', label: 'Manajemen Kandidat' },
      { path: '/admin/pemira/prodi', label: 'Program Studi' },
      { path: '/admin/pemira/pemilih', label: 'Data Pemilih' },
      { path: '/admin/pemira/statistik', label: 'Statistik Voting' },
      { path: '/admin/pemira/pengaturan', label: 'Pengaturan Aplikasi' },
    ],
  },
  {
    path: '/admin/modul',
    label: 'Manajemen Modul',
    icon: (isActive) => <ModulIcon width={22} height={22} color={isActive ? '#2B2B2B' : '#FFFFFF'} />,
  },
];

export const AdminSidebar = ({
  activeRoute = '/admin/dashboard',
  menuItems = DEFAULT_MENU_ITEMS,
  userName = 'Admin HMIK',
  userRole = 'Administrator',
  userInitials = 'AH',
  onNavigate,
  onLogout,
  className = '',
  ...props
}) => {
  const isPemiraActive = activeRoute.startsWith('/admin/pemira');
  const [expandedMenus, setExpandedMenus] = useState({
    '/admin/pemira': isPemiraActive,
  });

  useEffect(() => {
    if (activeRoute.startsWith('/admin/pemira')) {
      setExpandedMenus((prev) => ({ ...prev, '/admin/pemira': true }));
    }
  }, [activeRoute]);

  const toggleSubMenu = (menuPath) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuPath]: !prev[menuPath],
    }));
  };

  return (
    <aside className={`hmik-admin-sidebar ${className}`.trim()} {...props}>
      {/* Top Branding Section */}
      <div>
        <div className="hmik-admin-sidebar-header">
          <LogoHmikPutih className="hmik-admin-sidebar-logo" width={48} height={48} />
          <div>
            <p className="hmik-admin-sidebar-brand-title">
              Himpunan Mahasiswa Ilmu Komputer
            </p>
            <p className="hmik-admin-sidebar-brand-subtitle">
              Universitas Pertamina
            </p>
          </div>
        </div>

        {/* Gold Divider Line */}
        <div className="hmik-admin-sidebar-divider" />

        {/* Navigation Menu */}
        <nav className="hmik-admin-sidebar-nav">
          {menuItems.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isItemActive = hasChildren
              ? activeRoute.startsWith(item.path)
              : activeRoute === item.path;
            const isExpanded = !!expandedMenus[item.path];

            return (
              <div key={item.path} className="hmik-admin-sidebar-nav-group">
                <div
                  className={`hmik-admin-sidebar-nav-item ${
                    isItemActive ? 'hmik-admin-sidebar-nav-item--active' : ''
                  }`.trim()}
                  onClick={() => {
                    if (hasChildren) {
                      toggleSubMenu(item.path);
                      if (onNavigate && !isItemActive) {
                        onNavigate(item.path);
                      }
                    } else if (onNavigate) {
                      onNavigate(item.path);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="hmik-admin-sidebar-icon-box">
                    {item.icon(isItemActive)}
                  </div>
                  <span>{item.label}</span>
                </div>

                {/* Sub Menu Accordion */}
                {hasChildren && isExpanded && (
                  <div className="hmik-admin-submenu-wrapper">
                    <div className="hmik-admin-submenu-line" />
                    <div className="hmik-admin-submenu-list">
                      {item.children.map((sub) => {
                        const isSubActive = activeRoute === sub.path;
                        return (
                          <div
                            key={sub.path}
                            className={`hmik-admin-submenu-item ${
                              isSubActive ? 'hmik-admin-submenu-item--active' : ''
                            }`.trim()}
                            onClick={() => onNavigate && onNavigate(sub.path)}
                            role="button"
                            tabIndex={0}
                          >
                            <span>{sub.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer Profile Bar (Mustard Gold #F4B943) */}
      <div className="hmik-admin-sidebar-footer">
        <div className="hmik-admin-sidebar-profile">
          <div className="hmik-admin-sidebar-avatar">{userInitials}</div>
          <div>
            <p className="hmik-admin-sidebar-user-name">{userName}</p>
            <p className="hmik-admin-sidebar-user-role">{userRole}</p>
          </div>
        </div>

        {onLogout && (
          <button
            type="button"
            className="hmik-admin-sidebar-logout-btn"
            onClick={onLogout}
            title="Keluar / Logout"
          >
            Keluar
          </button>
        )}
      </div>
    </aside>
  );
};

export default AdminSidebar;
