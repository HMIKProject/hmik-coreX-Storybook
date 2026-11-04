import VoteBoxIcon from '../icon/VoteBoxIcon';
import PeopleIcon from '../icon/PeopleIcon';
import TrophyIcon from '../icon/TrophyIcon';
import CheckSquareIcon from '../icon/CheckSquareIcon';
import './AdminElectionMetricCard.css';

const VARIANT_CONFIGS = {
  'suara-masuk': {
    className: 'admin-metric-card--suara-masuk',
    bgColor: '#4059AD',
    badgeBg: '#F4B943',
    iconColor: '#2B2B2B',
    icon: (props) => <PeopleIcon {...props} />,
    defaultLabel: 'SUARA MASUK',
  },
  'pemilih-terdaftar': {
    className: 'admin-metric-card--pemilih-terdaftar',
    bgColor: '#F4B943',
    badgeBg: '#4059AD',
    iconColor: '#FFFFFF',
    icon: (props) => <CheckSquareIcon {...props} />,
    defaultLabel: 'PEMILIH TERDAFTAR',
  },
  'partisipasi': {
    className: 'admin-metric-card--partisipasi',
    bgColor: '#27AE60',
    badgeBg: '#F4B943',
    iconColor: '#2B2B2B',
    icon: (props) => <TrophyIcon {...props} />,
    defaultLabel: 'PARTISIPASI',
  },
  'kandidat': {
    className: 'admin-metric-card--kandidat',
    bgColor: '#E67E22',
    badgeBg: '#4059AD',
    iconColor: '#FFFFFF',
    icon: (props) => <VoteBoxIcon {...props} />,
    defaultLabel: 'KANDIDAT',
  },
};

export const AdminElectionMetricCard = ({
  variant = 'suara-masuk',
  value = '327',
  label,
  customIcon,
  className = '',
  ...props
}) => {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS['suara-masuk'];
  const displayLabel = label || config.defaultLabel;

  return (
    <div
      className={`admin-metric-card ${config.className} ${className}`.trim()}
      {...props}
    >
      <div
        className="admin-metric-card-icon-badge"
        style={{ backgroundColor: config.badgeBg }}
      >
        {customIcon || config.icon({ width: 22, height: 22, color: config.iconColor })}
      </div>

      <div className="admin-metric-card-content">
        <span className="admin-metric-card-value">{value}</span>
        <p className="admin-metric-card-label">{displayLabel}</p>
      </div>
    </div>
  );
};

export default AdminElectionMetricCard;
