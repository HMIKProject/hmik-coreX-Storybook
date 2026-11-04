import AnggotaIcon from '../icon/AnggotaIcon';
import ModulIcon from '../icon/ModulIcon';
import BoxTaskIcon from '../icon/BoxTaskIcon';
import VoteBoxIcon from '../icon/VoteBoxIcon';
import './AdminDashboardMetricCard.css';

const VARIANT_CONFIGS = {
  blue: {
    className: 'hmik-dashboard-metric-card--blue',
    badgeBg: '#F4B943',
    icon: <AnggotaIcon width={22} height={22} color="#2B2B2B" />,
    defaultLabel: 'Total Anggota Aktif',
    defaultSub: '+ 7 Mahasiswa Bulan ini',
  },
  yellow: {
    className: 'hmik-dashboard-metric-card--yellow',
    badgeBg: '#4059AD',
    icon: <ModulIcon width={22} height={22} color="#FFFFFF" />,
    defaultLabel: 'Total Modul',
    defaultSub: '+ 2 Modul Bulan ini',
  },
  green: {
    className: 'hmik-dashboard-metric-card--green',
    badgeBg: '#F4B943',
    icon: <BoxTaskIcon width={22} height={22} color="#2B2B2B" />,
    defaultLabel: 'Total Program Kerja',
    defaultSub: '+ 5 Program Kerja Bulan ini',
  },
  orange: {
    className: 'hmik-dashboard-metric-card--orange',
    badgeBg: '#4059AD',
    icon: <VoteBoxIcon width={22} height={22} color="#FFFFFF" />,
    defaultLabel: 'Voting Aktif',
    defaultSub: 'Sedang Berlangsung',
  },
};

export const AdminDashboardMetricCard = ({
  variant = 'blue',
  value = '0',
  label,
  subtitle,
  customIcon,
  className = '',
  ...props
}) => {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.blue;
  const displayLabel = label || config.defaultLabel;
  const displaySub = subtitle || config.defaultSub;

  return (
    <div
      className={`hmik-dashboard-metric-card ${config.className} ${className}`.trim()}
      {...props}
    >
      <div
        className="hmik-dashboard-metric-badge"
        style={{ backgroundColor: config.badgeBg }}
      >
        {customIcon || config.icon}
      </div>

      <div className="hmik-dashboard-metric-content">
        <span className="hmik-dashboard-metric-value">{value}</span>
        <p className="hmik-dashboard-metric-label">{displayLabel}</p>
        <p className="hmik-dashboard-metric-subtitle">{displaySub}</p>
      </div>
    </div>
  );
};

export default AdminDashboardMetricCard;
