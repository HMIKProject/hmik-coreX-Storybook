import './AdminHeader.css';

export const AdminHeader = ({
  title = 'Dashboard Admin',
  subtitle = 'Himpunan Mahasiswa Ilmu Komputer',
  badgeText = null,
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
        {rightContent ? (
          rightContent
        ) : badgeText ? (
          <span className="hmik-admin-header-badge">
            {badgeIndicator} {badgeText}
          </span>
        ) : null}
      </div>
    </header>
  );
};

export default AdminHeader;
