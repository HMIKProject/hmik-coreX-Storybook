import './AdminHeader.css';

export const AdminHeader = ({
  title = 'Dashboard Admin',
  subtitle = 'Himpunan Mahasiswa Ilmu Komputer',
  badgeText = 'Online Mode',
  badgeIndicator = '🟢',
  className = '',
  rightContent,
  ...props
}) => {
  return (
    <header className={`hmik-admin-header ${className}`.trim()} {...props}>
      <div>
        <h1 className="hmik-admin-header-title">{title}</h1>
        <p className="hmik-admin-header-subtitle">{subtitle}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {rightContent || (
          <span className="hmik-admin-header-badge">
            {badgeIndicator} {badgeText}
          </span>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;
