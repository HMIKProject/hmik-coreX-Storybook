import React from "react";
import CheckSquareIcon from "../icon/CheckSquareIcon";
import "./CandidateCard.css";

export const CandidateCard = ({
  cabinetName = "KABINET ANJIR",
  cabinetLogo,
  leaderName = "Loid Forger",
  leaderRole = "Calon Ketua",
  leaderPhoto,
  viceLeaderName = "Nanami Kento",
  viceLeaderRole = "Calon Wakil Ketua",
  viceLeaderPhoto,
  imageSrc,
  imageFit = "contain",
  vision = "Menyejahterakan seluruh makhluk di negeri dan mendorong perkembangan teknologi",
  missions = [
    "Menebang semua pohon sawit yg ga berguna untuk diganti dengan reboisasi",
    "Menggratiskan pendidikan sampai kuliah",
    "Menghilangkan seluruh pajak",
    "Semua pendapatan usaha negara akan digunakan sebaik-baiknya untuk menyejahterakan semua makhluk di negeri (ga cuma manusia)",
    "Hukum siksa koruptor sampai mati",
  ],
  isSelected = false,
  onSelect,
  buttonText = "Pilih Kandidat Ini",
  selectedButtonText = "Konfirmasi Pilihan Anda",
  className = "",
  ...props
}) => {
  const handleSelect = (e) => {
    e.preventDefault();
    if (onSelect) onSelect();
  };

  return (
    <div
      className={`candidate-card ${isSelected ? "candidate-card-selected" : ""} ${className}`.trim()}
      {...props}
    >
      {/* Frame Foto Paslon */}
      <div className="candidate-card-image-wrapper">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`Pasangan Calon ${leaderName} & ${viceLeaderName}`}
            className="candidate-card-image"
            style={{ objectFit: imageFit }}
          />
        ) : (leaderPhoto || viceLeaderPhoto) ? (
          <div className="candidate-card-duo-frame">
            <div className="candidate-card-duo-half">
              {leaderPhoto ? (
                <img src={leaderPhoto} alt={leaderName} />
              ) : (
                <span className="candidate-card-duo-placeholder">👤</span>
              )}
              <span className="candidate-card-duo-label">Ketua</span>
            </div>
            <div className="candidate-card-duo-half">
              {viceLeaderPhoto ? (
                <img src={viceLeaderPhoto} alt={viceLeaderName} />
              ) : (
                <span className="candidate-card-duo-placeholder">👤</span>
              )}
              <span className="candidate-card-duo-label">Wakil</span>
            </div>
          </div>
        ) : (
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4059AD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )}
      </div>

      {/* Baris Nama Kabinet dengan Logo */}
      <div className="candidate-card-cabinet-row">
        {cabinetLogo && (
          <img src={cabinetLogo} alt={cabinetName} className="candidate-card-cabinet-logo" />
        )}
        <h4 className="candidate-card-cabinet">{cabinetName}</h4>
      </div>

      {/* Nama Paslon dengan Avatar Perorangan */}
      <div className="candidate-card-names">
        <div className="candidate-card-person">
          {leaderPhoto && (
            <img src={leaderPhoto} alt={leaderName} className="candidate-card-mini-avatar" />
          )}
          <div className="candidate-card-person-details">
            <h3 className="candidate-card-name">{leaderName}</h3>
            <span className="candidate-card-role">{leaderRole}</span>
          </div>
        </div>

        <span className="candidate-card-ampersand">&</span>

        <div className="candidate-card-person">
          {viceLeaderPhoto && (
            <img src={viceLeaderPhoto} alt={viceLeaderName} className="candidate-card-mini-avatar" />
          )}
          <div className="candidate-card-person-details">
            <h3 className="candidate-card-name">{viceLeaderName}</h3>
            <span className="candidate-card-role">{viceLeaderRole}</span>
          </div>
        </div>
      </div>

      {/* Visi */}
      <div className="candidate-card-section">
        <h5 className="candidate-card-section-label">Visi:</h5>
        <p className="candidate-card-vision-text">{vision}</p>
      </div>

      {/* Misi */}
      <div className="candidate-card-section">
        <h5 className="candidate-card-section-label">Misi:</h5>
        <ol className="candidate-card-missions-list">
          {missions.map((mission, index) => (
            <li key={index}>{mission}</li>
          ))}
        </ol>
      </div>

      {/* Tombol Aksi */}
      <div className="candidate-card-action">
        <button
          type="button"
          onClick={handleSelect}
          className={`candidate-card-btn ${isSelected ? "candidate-card-btn-selected" : ""}`.trim()}
          aria-pressed={isSelected}
        >
          {isSelected && (
            <span className="candidate-card-btn-icon">
              <CheckSquareIcon width={18} height={18} />
            </span>
          )}
          <span>{isSelected ? selectedButtonText : buttonText}</span>
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
