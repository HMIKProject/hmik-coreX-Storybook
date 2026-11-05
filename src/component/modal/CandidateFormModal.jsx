import { useState, useEffect, useRef } from 'react';
import UploadIcon from '../icon/UploadIcon';
import CancelIcon from '../icon/CancelIcon';
import './CandidateFormModal.css';

export const CandidateFormModal = ({
  isOpen = false,
  mode = 'add', // 'add' | 'edit'
  initialData = null,
  onClose,
  onSubmit,
  isLoading = false,
  className = '',
  ...props
}) => {
  const [formData, setFormData] = useState({
    nomor_urut: 1,
    nama_ketua: '',
    nim_ketua: '',
    nama_wakil: '',
    nim_wakil: '',
    nama_kabinet: '',
    visi: '',
    misi: '',
    foto_paslon: '',
  });

  const [previewUrl, setPreviewUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && initialData) {
        setFormData({
          nomor_urut: initialData.nomor_urut || 1,
          nama_ketua: initialData.nama_ketua || '',
          nim_ketua: initialData.nim_ketua || '',
          nama_wakil: initialData.nama_wakil || '',
          nim_wakil: initialData.nim_wakil || '',
          nama_kabinet: initialData.nama_kabinet || '',
          visi: initialData.visi || '',
          misi: initialData.misi || '',
          foto_paslon: initialData.foto_paslon || '',
        });
        setPreviewUrl(initialData.foto_paslon || '');
      } else {
        setFormData({
          nomor_urut: (initialData && initialData.nomor_urut) || 1,
          nama_ketua: '',
          nim_ketua: '',
          nama_wakil: '',
          nim_wakil: '',
          nama_kabinet: '',
          visi: '',
          misi: '',
          foto_paslon: '',
        });
        setPreviewUrl('');
      }
      setSelectedFile(null);
    }
  }, [isOpen, mode, initialData]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose && !isLoading) {
      onClose();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'nomor_urut' ? parseInt(value, 10) || 1 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        ...formData,
        file: selectedFile,
        foto_paslon: previewUrl || formData.foto_paslon,
      });
    }
  };

  const isEdit = mode === 'edit';
  const modalTitle = isEdit ? 'Edit Kandidat' : 'Tambah Kandidat Baru';
  const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan Kandidat';

  return (
    <div
      className="hmik-candidate-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="candidate-modal-title"
    >
      <div className={`hmik-candidate-modal ${className}`.trim()} {...props}>
        {/* Header */}
        <div className="hmik-candidate-modal-header">
          <h2 id="candidate-modal-title" className="hmik-candidate-modal-title">
            {modalTitle}
          </h2>
          <button
            type="button"
            className="hmik-candidate-modal-close"
            onClick={onClose}
            disabled={isLoading}
            aria-label="Tutup modal"
          >
            <CancelIcon width={16} height={16} alt="Tutup" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="hmik-candidate-form">
          {/* Top Section: Foto Upload / Preview + Nama Paslon */}
          <div className="hmik-candidate-top-section">
            {/* Foto Upload Field */}
            <div className="hmik-candidate-photo-field">
              <label className="hmik-candidate-label">Foto Paslon</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              {previewUrl ? (
                <div className="hmik-candidate-photo-preview-wrap">
                  <img
                    src={previewUrl}
                    alt="Preview Kandidat"
                    className="hmik-candidate-photo-preview-img"
                  />
                  <button
                    type="button"
                    className="hmik-candidate-photo-change-btn"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Ganti Foto
                  </button>
                </div>
              ) : (
                <div
                  className="hmik-candidate-photo-dropzone"
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  <UploadIcon width={32} height={32} alt="Unggah Foto" />
                  <span className="hmik-candidate-upload-label">Unggah Foto</span>
                  <span className="hmik-candidate-upload-hint">
                    Format: JPG, PNG<br />(Maks. 2MB)
                  </span>
                </div>
              )}
            </div>

            {/* Nama Ketua & Wakil */}
            <div className="hmik-candidate-field" style={{ gap: '12px' }}>
              <div className="hmik-candidate-field">
                <label htmlFor="input-nama-ketua" className="hmik-candidate-label">
                  Nama Ketua
                </label>
                <input
                  id="input-nama-ketua"
                  name="nama_ketua"
                  type="text"
                  required
                  value={formData.nama_ketua}
                  onChange={handleChange}
                  placeholder="Masukkan nama calon ketua"
                  className="hmik-candidate-input"
                />
              </div>

              <div className="hmik-candidate-field">
                <label htmlFor="input-nama-wakil" className="hmik-candidate-label">
                  Nama Wakil Ketua
                </label>
                <input
                  id="input-nama-wakil"
                  name="nama_wakil"
                  type="text"
                  required
                  value={formData.nama_wakil}
                  onChange={handleChange}
                  placeholder="Masukkan nama calon wakil ketua"
                  className="hmik-candidate-input"
                />
              </div>
            </div>
          </div>

          {/* Nomor Urut & Kabinet */}
          <div className="hmik-candidate-field-row">
            <div className="hmik-candidate-field" style={{ maxWidth: '140px' }}>
              <label htmlFor="input-nomor-urut" className="hmik-candidate-label">
                Nomor Urut
              </label>
              <input
                id="input-nomor-urut"
                name="nomor_urut"
                type="number"
                min={1}
                required
                value={formData.nomor_urut}
                onChange={handleChange}
                className="hmik-candidate-input"
              />
            </div>

            <div className="hmik-candidate-field">
              <label htmlFor="input-nama-kabinet" className="hmik-candidate-label">
                Nama Kabinet
              </label>
              <input
                id="input-nama-kabinet"
                name="nama_kabinet"
                type="text"
                required
                value={formData.nama_kabinet}
                onChange={handleChange}
                placeholder="Masukkan nama kabinet"
                className="hmik-candidate-input"
              />
            </div>
          </div>

          {/* NIM Ketua & Wakil (Optional) */}
          <div className="hmik-candidate-field-row">
            <div className="hmik-candidate-field">
              <label htmlFor="input-nim-ketua" className="hmik-candidate-label">
                NIM Ketua <span className="hmik-candidate-label-optional">(Opsional)</span>
              </label>
              <input
                id="input-nim-ketua"
                name="nim_ketua"
                type="text"
                value={formData.nim_ketua}
                onChange={handleChange}
                placeholder="Contoh: 10121001"
                className="hmik-candidate-input"
              />
            </div>

            <div className="hmik-candidate-field">
              <label htmlFor="input-nim-wakil" className="hmik-candidate-label">
                NIM Wakil <span className="hmik-candidate-label-optional">(Opsional)</span>
              </label>
              <input
                id="input-nim-wakil"
                name="nim_wakil"
                type="text"
                value={formData.nim_wakil}
                onChange={handleChange}
                placeholder="Contoh: 10121002"
                className="hmik-candidate-input"
              />
            </div>
          </div>

          {/* Visi */}
          <div className="hmik-candidate-field">
            <label htmlFor="input-visi" className="hmik-candidate-label">
              Visi
            </label>
            <textarea
              id="input-visi"
              name="visi"
              rows={3}
              value={formData.visi}
              onChange={handleChange}
              placeholder="Tuliskan visi paslon..."
              className="hmik-candidate-textarea"
            />
          </div>

          {/* Misi */}
          <div className="hmik-candidate-field">
            <label htmlFor="input-misi" className="hmik-candidate-label">
              Misi
            </label>
            <textarea
              id="input-misi"
              name="misi"
              rows={4}
              value={formData.misi}
              onChange={handleChange}
              placeholder="Tuliskan misi paslon (pisahkan per poin)..."
              className="hmik-candidate-textarea"
            />
          </div>

          {/* Action Buttons */}
          <div className="hmik-candidate-modal-actions">
            <button
              type="button"
              className="hmik-candidate-modal-btn hmik-candidate-modal-btn-cancel"
              onClick={onClose}
              disabled={isLoading}
            >
              Batal
            </button>
            <button
              type="submit"
              className="hmik-candidate-modal-btn hmik-candidate-modal-btn-submit"
              disabled={isLoading}
            >
              {isLoading ? 'Menyimpan...' : submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateFormModal;
