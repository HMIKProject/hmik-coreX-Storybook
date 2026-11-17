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
    foto_ketua: '',
    foto_wakil: '',
    logo_kabinet: '',
  });

  const [files, setFiles] = useState({ paslon: null, ketua: null, wakil: null, logo: null });
  const [previews, setPreviews] = useState({ paslon: '', ketua: '', wakil: '', logo: '' });

  const fileRefPaslon = useRef(null);
  const fileRefKetua = useRef(null);
  const fileRefWakil = useRef(null);
  const fileRefLogo = useRef(null);

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
          foto_ketua: initialData.foto_ketua || '',
          foto_wakil: initialData.foto_wakil || '',
          logo_kabinet: initialData.logo_kabinet || '',
        });
        setPreviews({
          paslon: initialData.foto_paslon || '',
          ketua: initialData.foto_ketua || '',
          wakil: initialData.foto_wakil || '',
          logo: initialData.logo_kabinet || '',
        });
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
          foto_ketua: '',
          foto_wakil: '',
          logo_kabinet: '',
        });
        setPreviews({ paslon: '', ketua: '', wakil: '', logo: '' });
      }
      setFiles({ paslon: null, ketua: null, wakil: null, logo: null });
    }
  }, [isOpen, mode, initialData]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose && !isLoading) {
      onClose();
    }
  };

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [field]: file }));
      setPreviews((prev) => ({ ...prev, [field]: URL.createObjectURL(file) }));
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
        file_paslon: files.paslon,
        file_ketua: files.ketua,
        file_wakil: files.wakil,
        file_logo: files.logo,
        foto_paslon: previews.paslon || formData.foto_paslon,
        foto_ketua: previews.ketua || formData.foto_ketua,
        foto_wakil: previews.wakil || formData.foto_wakil,
        logo_kabinet: previews.logo || formData.logo_kabinet,
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
          {/* Top Section: Foto Paslon Utama + Nama Ketua/Wakil */}
          <div className="hmik-candidate-top-section">
            <div className="hmik-candidate-photo-field">
              <label className="hmik-candidate-label">Foto Paslon (Bilik Suara)</label>
              <input
                ref={fileRefPaslon}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange('paslon', e)}
              />

              {previews.paslon ? (
                <div className="hmik-candidate-photo-preview-wrap">
                  <img
                    src={previews.paslon}
                    alt="Preview Paslon"
                    className="hmik-candidate-photo-preview-img"
                  />
                  <button
                    type="button"
                    className="hmik-candidate-photo-change-btn"
                    onClick={() => fileRefPaslon.current?.click()}
                  >
                    Ganti Foto
                  </button>
                </div>
              ) : (
                <div
                  className="hmik-candidate-photo-dropzone"
                  onClick={() => fileRefPaslon.current?.click()}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      fileRefPaslon.current?.click();
                    }
                  }}
                >
                  <UploadIcon width={32} height={32} alt="Unggah Foto" />
                  <span className="hmik-candidate-upload-label">Foto Berdua</span>
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
                  Nama Calon Ketua
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
                  Nama Calon Wakil Ketua
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
                placeholder="Masukkan nama kabinet yang diusung"
                className="hmik-candidate-input"
              />
            </div>
          </div>

          {/* NIM Ketua & Wakil */}
          <div className="hmik-candidate-field-row">
            <div className="hmik-candidate-field">
              <label htmlFor="input-nim-ketua" className="hmik-candidate-label">
                NIM Ketua <span className="hmik-candidate-label-optional">(Wajib untuk BPH)</span>
              </label>
              <input
                id="input-nim-ketua"
                name="nim_ketua"
                type="text"
                required
                value={formData.nim_ketua}
                onChange={handleChange}
                placeholder="Contoh: 105223001"
                className="hmik-candidate-input"
              />
            </div>

            <div className="hmik-candidate-field">
              <label htmlFor="input-nim-wakil" className="hmik-candidate-label">
                NIM Wakil <span className="hmik-candidate-label-optional">(Wajib untuk BPH)</span>
              </label>
              <input
                id="input-nim-wakil"
                name="nim_wakil"
                type="text"
                required
                value={formData.nim_wakil}
                onChange={handleChange}
                placeholder="Contoh: 105223002"
                className="hmik-candidate-input"
              />
            </div>
          </div>

          {/* Aset Visual Pelantikan MPIK (Opsi A) */}
          <div className="hmik-candidate-pelantikan-assets">
            <div className="hmik-candidate-pelantikan-title">
              <span>🏛️ Aset Pelantikan BPH & Kabinet (MPIK)</span>
              <span className="hmik-candidate-pelantikan-hint">Otomatis dipromosikan ke Struktur Organisasi</span>
            </div>

            <div className="hmik-candidate-pelantikan-grid">
              {/* Foto Formal Ketua */}
              <div className="hmik-candidate-compact-field">
                <span className="hmik-candidate-compact-label">Foto Ketua (Jas)</span>
                <input
                  ref={fileRefKetua}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange('ketua', e)}
                />
                {previews.ketua ? (
                  <div className="hmik-candidate-compact-preview">
                    <img src={previews.ketua} alt="Foto Ketua" className="hmik-candidate-compact-preview-img" />
                    <button type="button" className="hmik-candidate-compact-change-btn" onClick={() => fileRefKetua.current?.click()}>
                      Ganti
                    </button>
                  </div>
                ) : (
                  <div className="hmik-candidate-compact-dropzone" onClick={() => fileRefKetua.current?.click()}>
                    <UploadIcon width={20} height={20} />
                    <span style={{ fontSize: '10px', fontWeight: 600 }}>Foto Ketua</span>
                  </div>
                )}
              </div>

              {/* Foto Formal Wakil */}
              <div className="hmik-candidate-compact-field">
                <span className="hmik-candidate-compact-label">Foto Wakil (Jas)</span>
                <input
                  ref={fileRefWakil}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange('wakil', e)}
                />
                {previews.wakil ? (
                  <div className="hmik-candidate-compact-preview">
                    <img src={previews.wakil} alt="Foto Wakil" className="hmik-candidate-compact-preview-img" />
                    <button type="button" className="hmik-candidate-compact-change-btn" onClick={() => fileRefWakil.current?.click()}>
                      Ganti
                    </button>
                  </div>
                ) : (
                  <div className="hmik-candidate-compact-dropzone" onClick={() => fileRefWakil.current?.click()}>
                    <UploadIcon width={20} height={20} />
                    <span style={{ fontSize: '10px', fontWeight: 600 }}>Foto Wakil</span>
                  </div>
                )}
              </div>

              {/* Logo Resmi Kabinet */}
              <div className="hmik-candidate-compact-field">
                <span className="hmik-candidate-compact-label">Logo Kabinet</span>
                <input
                  ref={fileRefLogo}
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/svg+xml"
                  style={{ display: 'none' }}
                  onChange={(e) => handleFileChange('logo', e)}
                />
                {previews.logo ? (
                  <div className="hmik-candidate-compact-preview">
                    <img src={previews.logo} alt="Logo Kabinet" className="hmik-candidate-compact-preview-img" style={{ objectFit: 'contain' }} />
                    <button type="button" className="hmik-candidate-compact-change-btn" onClick={() => fileRefLogo.current?.click()}>
                      Ganti
                    </button>
                  </div>
                ) : (
                  <div className="hmik-candidate-compact-dropzone" onClick={() => fileRefLogo.current?.click()}>
                    <UploadIcon width={20} height={20} />
                    <span style={{ fontSize: '10px', fontWeight: 600 }}>Logo Kabinet</span>
                  </div>
                )}
              </div>
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
