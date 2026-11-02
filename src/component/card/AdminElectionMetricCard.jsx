import VoteBoxIcon from "../icon/VoteBoxIcon";
import PeopleIcon from "../icon/PeopleIcon";
import TrophyIcon from "../icon/TrophyIcon";
import CheckSquareIcon from "../icon/CheckSquareIcon";
import "./AdminElectionMetricCard.css";

const VARIANT_CONFIGS = {
  "suara-masuk": {
    badgeColor: "#F7D070",
    icon: (props) => <VoteBoxIcon {...props} />,
    defaultLabel: "SUARA MASUK",
    defaultSub: "Total suara yang telah diverifikasi",
  },
  "pemilih-terdaftar": {
    badgeColor: "#9CB3FF",
    icon: (props) => <PeopleIcon {...props} />,
    defaultLabel: "PEMILIH TERDAFTAR",
    defaultSub: "Total mahasiswa dalam DPT",
  },
  "partisipasi": {
    badgeColor: "#27AE60",
    icon: (props) => <CheckSquareIcon {...props} />,
    defaultLabel: "PARTISIPASI",
    defaultSub: "Persentase kehadiran pemilih",
  },
  "kandidat": {
    badgeColor: "#E67E22",
    icon: (props) => <TrophyIcon {...props} />,
    defaultLabel: "KANDIDAT",
    defaultSub: "Pasangan calon terverifikasi",
  },
};

export const AdminElectionMetricCard = ({
  variant = "suara-masuk",
  value = "327",
  label,
  subtitle,
  customIcon,
  className = "",
  ...props
}) => {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS["suara-masuk"];
  const displayLabel = label || config.defaultLabel;
  const displaySub = subtitle || config.defaultSub;

  return (
    <div
      className={`admin-metric-card admin-metric-card--${variant} ${className}`.trim()}
      {...props}
    >
      <div className="admin-metric-card-top">
        <span className="admin-metric-card-label">{displayLabel}</span>
        <div
          className="admin-metric-card-icon-badge"
          style={{ backgroundColor: config.badgeColor }}
        >
          {customIcon || config.icon({ width: 20, height: 20, alt: displayLabel })}
        </div>
      </div>

      <div className="admin-metric-card-body">
        <span className="admin-metric-card-value">{value}</span>
      </div>

      <div className="admin-metric-card-footer">
        <p className="admin-metric-card-subtitle">{displaySub}</p>
      </div>
    </div>
  );
};

export default AdminElectionMetricCard;
