import './AdminQuickActionCard.css';

export const AdminQuickActionCard = ({
  title = 'Aksi Cepat',
  subtitle = 'Kelola data organisasi',
  icon,
  iconBg = '#E67E22',
  iconColor = '#FFFFFF',
  onClick,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`hmik-quick-action-card ${className}`.trim()}
      onClick={onClick}
      role="button"
      tabIndex={0}
      {...props}
    >
      <div className="hmik-quick-action-left">
        <div
          className="hmik-quick-action-badge"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <div>
          <h4 className="hmik-quick-action-title">{title}</h4>
          <p className="hmik-quick-action-sub">{subtitle}</p>
        </div>
      </div>
      <span className="hmik-quick-action-arrow">→</span>
    </div>
  );
};

export default AdminQuickActionCard;
