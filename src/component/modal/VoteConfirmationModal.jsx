import React from "react";
import CheckSquareIcon from "../icon/CheckSquareIcon";
import CancelIcon from "../icon/CancelIcon";
import "./VoteConfirmationModal.css";

export const VoteConfirmationModal = ({
  isOpen = true,
  onClose,
  onConfirm,
  isLoading = false,
  candidateNumber = "01",
  candidateName = "Loid Forger & Nanami Kento",
  cabinetName = "KABINET ANJIR",
  cabinetLogo,
  leaderName,
  leaderRole = "Calon Ketua",
  leaderPhoto,
  viceLeaderName,
  viceLeaderRole = "Calon Wakil Ketua",
  viceLeaderPhoto,
  title = "Konfirmasi Pilihan Suara",
  message = "Apakah Anda yakin ingin memberikan suara kepada pasangan calon ini? Demi menjaga integritas pemilu, pilihan yang telah dikirim bersifat final dan tidak dapat diubah.",
  confirmText = "Ya, Berikan Suara Sah",
  cancelText = "Kembali ke Bilik Suara",
  className = "",
  ...props
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const parsedLeaderName = leaderName || candidateName.split('&')[0]?.trim();
  const parsedViceName = viceLeaderName || candidateName.split('&')[1]?.trim();

  return (
    <div
      className="vote-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="vote-modal-title"
    >
      <div className={`vote-confirmation-modal ${className}`.trim()} {...props}>
        {/* Header Modal */}
        <div className="vote-modal-header">
          <div className="vote-modal-badge">KONFIRMASI AKHIR</div>
          <h2 id="vote-modal-title" className="vote-modal-title">
            {title}
          </h2>
        </div>

        {/* Info Box Paslon Terpilih */}
        <div className="vote-modal-candidate-box">
          {/* Baris Atas: Nomor Urut, Logo & Nama Kabinet */}
          <div className="vote-modal-candidate-top-bar">
            <div className="vote-modal-candidate-number">{candidateNumber}</div>
            <div className="vote-modal-cabinet-badge">
              {cabinetLogo && (
                <img
                  src={cabinetLogo}
                  alt={cabinetName}
                  className="vote-modal-cabinet-logo"
                />
              )}
              <span className="vote-modal-cabinet-name">{cabinetName}</span>
            </div>
          </div>

          {/* Calon Ketua & Calon Wakil Ketua dengan Foto Resmi */}
          <div className="vote-modal-duo-container">
            {/* Calon Ketua */}
            <div className="vote-modal-person-card">
              <div className="vote-modal-person-avatar">
                {leaderPhoto ? (
                  <img src={leaderPhoto} alt={parsedLeaderName} />
                ) : (
                  <span className="vote-modal-avatar-fallback">👤</span>
                )}
              </div>
              <div className="vote-modal-person-details">
                <span className="vote-modal-person-role">{leaderRole}</span>
                <h4 className="vote-modal-person-name">{parsedLeaderName}</h4>
              </div>
            </div>

            <div className="vote-modal-duo-ampersand">&</div>

            {/* Calon Wakil Ketua */}
            <div className="vote-modal-person-card">
              <div className="vote-modal-person-avatar">
                {viceLeaderPhoto ? (
                  <img src={viceLeaderPhoto} alt={parsedViceName} />
                ) : (
                  <span className="vote-modal-avatar-fallback">👤</span>
                )}
              </div>
              <div className="vote-modal-person-details">
                <span className="vote-modal-person-role">{viceLeaderRole}</span>
                <h4 className="vote-modal-person-name">{parsedViceName}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi Peringatan */}
        <p className="vote-modal-message">{message}</p>

        {/* Action Buttons */}
        <div className="vote-modal-actions">
          <button
            type="button"
            className="vote-modal-btn vote-modal-btn-cancel"
            onClick={onClose}
          >
            <CancelIcon width={20} height={20} alt="Batal" />
            <span>{cancelText}</span>
          </button>

          <button
            type="button"
            className="vote-modal-btn vote-modal-btn-confirm"
            onClick={onConfirm}
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.65 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            <CheckSquareIcon width={20} height={20} alt="Konfirmasi" />
            <span>{isLoading ? 'Menyimpan...' : confirmText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteConfirmationModal;
