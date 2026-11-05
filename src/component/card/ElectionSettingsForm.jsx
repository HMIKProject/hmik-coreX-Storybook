import { useState, useRef, useEffect } from 'react';
import UploadIcon from '../icon/UploadIcon';
import './ElectionSettingsForm.css';

export const ElectionSettingsForm = ({
  initialData = {},
  onSubmit,
  isLoading = false,
  className = '',
  ...props
}) => {
  const [formData, setFormData] = useState({
    tahun_periode: initialData.tahun_periode || '2026/2027',
    judul_pemilihan:
      initialData.judul_pemilihan || 'Pemilihan Ketua & Wakil Ketua HMIK',
    metode_login:
      initialData.metode_login ||
      'Validasi Format Email Kampus (@student.universitaspertamina.ac.id)',
    tanggal_mulai: initialData.tanggal_mulai || '2026-10-12T08:00',
    tanggal_selesai: initialData.tanggal_selesai || '2026-10-14T17:00',
    logo_tengah: initialData.logo_tengah || '',
    logo_kiri_1: initialData.logo_kiri_1 || '',
    logo_kiri_2: initialData.logo_kiri_2 || '',
  });

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (field, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, [field]: previewUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div
      className={`hmik-election-settings-card ${className}`.trim()}
      {...props}
    >
      <form onSubmit={handleSubmit} className="hmik-election-settings-form">
        {/* Row 1: Tahun Periode & Judul Pemilihan */}
        <div className="hmik-election-settings-grid-2">
          <div className="hmik-election-settings-section">
            <label
              htmlFor="settings-tahun-periode"
              className="hmik-election-settings-label"
            >
              Tahun Periode
            </label>
            <input
              id="settings-tahun-periode"
              type="text"
              name="tahun_periode"
              value={formData.tahun_periode}
              onChange={handleChange}
              placeholder="Contoh: 2026/2027"
              required
              className="hmik-election-settings-input"
            />
          </div>

          <div className="hmik-election-settings-section">
            <label
              htmlFor="settings-judul-pemilihan"
              className="hmik-election-settings-label"
            >
              Judul Pemilihan
            </label>
            <input
              id="settings-judul-pemilihan"
              type="text"
              name="judul_pemilihan"
              value={formData.judul_pemilihan}
              onChange={handleChange}
              placeholder="Masukkan judul resmi acara pemilu"
              required
              className="hmik-election-settings-input"
            />
          </div>
        </div>

        {/* Row 2: Jadwal Mulai & Selesai */}
        <div className="hmik-election-settings-grid-2">
          <div className="hmik-election-settings-section">
            <label
              htmlFor="settings-tanggal-mulai"
              className="hmik-election-settings-label"
            >
              Jadwal Waktu Mulai (Bilik Suara Dibuka)
            </label>
            <input
              id="settings-tanggal-mulai"
              type="datetime-local"
              name="tanggal_mulai"
              value={formData.tanggal_mulai}
              onChange={handleChange}
              required
              className="hmik-election-settings-input"
            />
          </div>

          <div className="hmik-election-settings-section">
            <label
              htmlFor="settings-tanggal-selesai"
              className="hmik-election-settings-label"
            >
              Jadwal Waktu Selesai (Bilik Suara Ditutup)
            </label>
            <input
              id="settings-tanggal-selesai"
              type="datetime-local"
              name="tanggal_selesai"
              value={formData.tanggal_selesai}
              onChange={handleChange}
              required
              className="hmik-election-settings-input"
            />
          </div>
        </div>

        {/* Row 3: Metode Login Pemilih */}
        <div className="hmik-election-settings-section">
          <label
            htmlFor="settings-metode-login"
            className="hmik-election-settings-label"
          >
            Metode Login Pemilih
          </label>
          <select
            id="settings-metode-login"
            name="metode_login"
            value={formData.metode_login}
            onChange={handleChange}
            className="hmik-election-settings-select"
          >
            <option value="Validasi Format Email Kampus (@student.universitaspertamina.ac.id)">
              Validasi Format Email Kampus (@student.universitaspertamina.ac.id)
            </option>
            <option value="Khusus Mahasiswa Ilmu Komputer Terverifikasi">
              Khusus Mahasiswa Ilmu Komputer Terverifikasi
            </option>
          </select>
        </div>

        {/* Row 4: Upload Logo Branding (Sesuai Figma #1830:576) */}
        <div className="hmik-election-settings-section">
          <span className="hmik-election-settings-label">
            Branding & Logo Halaman Masuk Pemilih
          </span>

          <div className="hmik-election-logos-grid">
            {/* Slot 1: Logo Tengah */}
            <div className="hmik-election-logo-slot">
              <span className="hmik-election-logo-label">
                Logo Halaman Login (Tengah)
              </span>
              <input
                ref={fileInputRef1}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange('logo_tengah', e)}
              />
              <div
                className="hmik-election-logo-dropzone"
                onClick={() => fileInputRef1.current?.click()}
              >
                {formData.logo_tengah ? (
                  <div className="hmik-election-logo-preview">
                    <img
                      src={formData.logo_tengah}
                      alt="Logo Tengah"
                      className="hmik-election-logo-img"
                    />
                    <span className="hmik-election-logo-change-tag">Ganti</span>
                  </div>
                ) : (
                  <>
                    <UploadIcon width={28} height={28} alt="Unggah Logo" />
                    <span className="hmik-election-logo-placeholder-text">
                      Unggah Logo
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Slot 2: Logo Header Kiri 1 */}
            <div className="hmik-election-logo-slot">
              <span className="hmik-election-logo-label">
                Logo Header Kiri 1
              </span>
              <input
                ref={fileInputRef2}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange('logo_kiri_1', e)}
              />
              <div
                className="hmik-election-logo-dropzone"
                onClick={() => fileInputRef2.current?.click()}
              >
                {formData.logo_kiri_1 ? (
                  <div className="hmik-election-logo-preview">
                    <img
                      src={formData.logo_kiri_1}
                      alt="Logo Header Kiri 1"
                      className="hmik-election-logo-img"
                    />
                    <span className="hmik-election-logo-change-tag">Ganti</span>
                  </div>
                ) : (
                  <>
                    <UploadIcon width={28} height={28} alt="Unggah Logo" />
                    <span className="hmik-election-logo-placeholder-text">
                      Unggah Logo
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Slot 3: Logo Header Kiri 2 */}
            <div className="hmik-election-logo-slot">
              <span className="hmik-election-logo-label">
                Logo Header Kiri 2
              </span>
              <input
                ref={fileInputRef3}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange('logo_kiri_2', e)}
              />
              <div
                className="hmik-election-logo-dropzone"
                onClick={() => fileInputRef3.current?.click()}
              >
                {formData.logo_kiri_2 ? (
                  <div className="hmik-election-logo-preview">
                    <img
                      src={formData.logo_kiri_2}
                      alt="Logo Header Kiri 2"
                      className="hmik-election-logo-img"
                    />
                    <span className="hmik-election-logo-change-tag">Ganti</span>
                  </div>
                ) : (
                  <>
                    <UploadIcon width={28} height={28} alt="Unggah Logo" />
                    <span className="hmik-election-logo-placeholder-text">
                      Unggah Logo
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hint text per Figma #1830:627 */}
        <p className="hmik-election-settings-hint">
          Unggah gambar baru akan otomatis memicu penyimpanan URL dan
          menggantikan gambar lama (jika ada) di storage. Kosongkan untuk
          menghapus logo.
        </p>

        {/* Footer Actions */}
        <div className="hmik-election-settings-actions">
          <button
            type="submit"
            className="hmik-election-btn-save"
            disabled={isLoading}
          >
            {isLoading ? 'Menyimpan...' : 'Simpan Pengaturan'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ElectionSettingsForm;
