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

        {/* Notice Info: Khusus HMIK */}
        <div className="hmik-election-settings-hmik-notice" style={{
          padding: '16px',
          borderRadius: '12px',
          backgroundColor: '#eff6ff',
          border: '1px solid #bfdbfe',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <span style={{ fontWeight: 700, color: '#1e40af', fontSize: '14px' }}>
            ℹ️ Konfigurasi Khusus HMIK
          </span>
          <p style={{ margin: 0, fontSize: '13px', color: '#3b82f6', lineHeight: 1.5 }}>
            Sistem pemilihan raya ini dikhususkan secara eksklusif untuk Himpunan Mahasiswa Ilmu Komputer (HMIK).
            Identitas logo dan aset branding portal pemilih terikat secara otomatis dengan aset resmi himpunan.
          </p>
        </div>

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
