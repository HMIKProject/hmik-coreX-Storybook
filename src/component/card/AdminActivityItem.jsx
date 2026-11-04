import './AdminActivityItem.css';

export const AdminActivityItem = ({
  title = 'Aktivitas Baru',
  subtitle = 'Keterangan aktivitas',
  time = '2 Jam lalu',
  icon,
  iconBg = '#4059AD',
  className = '',
  ...props
}) => {
  return (
    <div className={`hmik-activity-item ${className}`.trim()} {...props}>
      <div
        className="hmik-activity-item-badge"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div className="hmik-activity-item-content">
        <h5 className="hmik-activity-item-title">{title}</h5>
        <p className="hmik-activity-item-sub">{subtitle}</p>
        <span className="hmik-activity-item-time">{time}</span>
      </div>
    </div>
  );
};

export default AdminActivityItem;
