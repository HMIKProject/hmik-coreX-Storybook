import WarningAlertIcon from "../icon/WarningAlertIcon";
import CancelIcon from "../icon/CancelIcon";
import DeleteIcon from "../icon/DeleteIcon";
import "./DeleteConfirmationModal.css";

export const DeleteConfirmationModal = ({
  isOpen = true,
  onClose,
  onConfirm,
  title = "Hapus Data Pemilih",
  itemName = "10123001 - Budi Santoso",
  message = "Apakah Anda yakin ingin menghapus data ini? Tindakan ini bersifat permanen dan data yang telah dihapus tidak dapat dikembalikan.",
  cancelText = "Batal",
  confirmText = "Hapus Permanen",
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
      className="delete-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-modal-title"
    >
      <div className={`delete-confirmation-modal ${className}`.trim()} {...props}>
        {/* Ikon Peringatan Merah */}
        <div className="delete-modal-icon-container">
          <WarningAlertIcon width={72} height={72} alt="Peringatan Hapus" />
        </div>

        {/* Konten & Judul */}
        <div className="delete-modal-content">
          <h2 id="delete-modal-title" className="delete-modal-title">
            {title}
          </h2>
          {itemName && (
            <div className="delete-modal-item-badge">
              <span>{itemName}</span>
            </div>
          )}
          <p className="delete-modal-message">{message}</p>
        </div>

        {/* Action Buttons */}
        <div className="delete-modal-actions">
          <button
            type="button"
            className="delete-modal-btn delete-modal-btn-cancel"
            onClick={onClose}
          >
            <CancelIcon width={18} height={18} alt="Batal" />
            <span>{cancelText}</span>
          </button>

          <button
            type="button"
            className="delete-modal-btn delete-modal-btn-confirm"
            onClick={onConfirm}
          >
            <DeleteIcon width={18} height={18} alt="Hapus" />
            <span>{confirmText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
