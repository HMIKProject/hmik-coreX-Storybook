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
  title = "Konfirmasi Pilihan Suara",
  message = "Apakah Anda yakin ingin memilih pasangan calon ini? Suara yang telah dikirim tidak dapat diubah kembali.",
  confirmText = "Ya, Konfirmasi Suara",
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
          <div className="vote-modal-candidate-number">{candidateNumber}</div>
          <div className="vote-modal-candidate-info">
            <span className="vote-modal-cabinet">{cabinetName}</span>
            <h3 className="vote-modal-candidate-name">{candidateName}</h3>
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
