import './ElectionStatusControlCard.css';

export const ElectionStatusControlCard = ({
  status = 'DRAFT', // 'DRAFT' | 'BERJALAN' | 'SELESAI'
  tahunPeriode = '2026/2027',
  tanggalMulai = '12 Okt 2026, 08:00 WIB',
  tanggalSelesai = '14 Okt 2026, 17:00 WIB',
  mpikStatus = 'PENDING', // 'PENDING' | 'APPROVED'
  winningCandidate = null,
  onActivate,
  onCloseElection,
  onResetDraft,
  onExportToHimpunan,
  isLoading = false,
  className = '',
  ...props
}) => {
  const isDraft = status === 'DRAFT';
  const isLive = status === 'BERJALAN';
  const isFinished = status === 'SELESAI';

  const badgeClass = isLive
    ? 'hmik-election-status-badge--live'
    : isFinished
    ? 'hmik-election-status-badge--finished'
    : 'hmik-election-status-badge--draft';

  const statusLabel = isLive
    ? 'Sedang Berjalan (Live)'
    : isFinished
    ? 'Pemilihan Ditutup'
    : 'Persiapan (Draft)';

  const statusDesc = isLive
    ? 'Bilik suara virtual aktif. Mahasiswa dapat meminta OTP dan mencoblos.'
    : isFinished
    ? 'Periode pemungutan suara telah berakhir. Hasil siap direkapitulasi untuk pleno MPIK.'
    : 'Bilik suara terkunci. Mahasiswa belum dapat mengakses bilik suara virtual.';

  return (
    <div
      className={`hmik-election-status-card ${className}`.trim()}
      {...props}
    >
      {/* Top Header & Status Badge */}
      <div className="hmik-election-status-top">
        <div className="hmik-election-status-info">
          <h2 className="hmik-election-status-title">Status Utama Pemilihan Raya</h2>
          <p className="hmik-election-status-desc">{statusDesc}</p>
        </div>

        <div className={`hmik-election-status-badge ${badgeClass}`}>
          <span className="hmik-election-status-dot" />
          <span>{statusLabel}</span>
        </div>
      </div>

      {/* Middle Grid Details */}
      <div className="hmik-election-status-details">
        <div className="hmik-election-status-item">
          <span className="hmik-election-status-item-label">Tahun Periode</span>
          <span className="hmik-election-status-item-val">{tahunPeriode || '-'}</span>
        </div>

        <div className="hmik-election-status-item">
          <span className="hmik-election-status-item-label">Waktu Mulai</span>
          <span className="hmik-election-status-item-val">{tanggalMulai || '-'}</span>
        </div>

        <div className="hmik-election-status-item">
          <span className="hmik-election-status-item-label">Waktu Selesai</span>
          <span className="hmik-election-status-item-val">{tanggalSelesai || '-'}</span>
        </div>
      </div>

      {/* MPIK Ratification Box */}
      <div className="hmik-election-mpik-box">
        <div className="hmik-election-mpik-content">
          <span className="hmik-election-mpik-title">
            🏛️ Integrasi Transisi Kabinet & Pengesahan MPIK
          </span>
          <span className="hmik-election-mpik-desc">
            {winningCandidate
              ? `Pasangan calon terpilih (${winningCandidate}) akan dipromosikan menjadi Kabinet Baru di Manajemen Himpunan setelah disahkan oleh Majelis Perwakilan/Permusyawaratan Mahasiswa Ilmu Komputer (MPIK).`
              : 'Hasil pemungutan suara final akan dipromosikan menjadi data Kabinet Baru di Manajemen Himpunan setelah disahkan resmi oleh sidang pleno MPIK.'}
          </span>
        </div>

        <span
          className={`hmik-election-mpik-badge ${
            mpikStatus === 'APPROVED'
              ? 'hmik-election-mpik-badge--approved'
              : 'hmik-election-mpik-badge--pending'
          }`}
        >
          {mpikStatus === 'APPROVED' ? '✓ Telah Disahkan MPIK' : '⏳ Menunggu Sidang MPIK'}
        </span>
      </div>

      {/* Action Controls */}
      <div className="hmik-election-status-actions">
        {isDraft && (
          <button
            type="button"
            className="hmik-election-btn-control hmik-election-btn-control--activate"
            onClick={onActivate}
            disabled={isLoading}
          >
            <span>🟢</span>
            <span>Buka & Aktifkan Pemilihan Sekarang</span>
          </button>
        )}

        {isLive && (
          <button
            type="button"
            className="hmik-election-btn-control hmik-election-btn-control--close"
            onClick={onCloseElection}
            disabled={isLoading}
          >
            <span>🔴</span>
            <span>Tutup / Akhiri Pemilihan</span>
          </button>
        )}

        {isFinished && (
          <>
            <button
              type="button"
              className="hmik-election-btn-control hmik-election-btn-control--reset"
              onClick={onResetDraft}
              disabled={isLoading}
            >
              <span>↩️</span>
              <span>Buka Kembali ke Draft</span>
            </button>

            <button
              type="button"
              className="hmik-election-btn-control hmik-election-btn-control--export"
              onClick={onExportToHimpunan}
              disabled={isLoading || mpikStatus === 'APPROVED'}
              title={
                mpikStatus === 'APPROVED'
                  ? 'Kabinet baru telah berhasil dilantik dan aktif di Manajemen Himpunan'
                  : 'Sahkan hasil pemenang pemira dan lantik Kabinet baru ke Manajemen Himpunan'
              }
            >
              <span>🏛️</span>
              <span>
                {mpikStatus === 'APPROVED'
                  ? '✓ Kabinet Baru Telah Dilantik'
                  : 'Sahkan & Lantik Kabinet Baru (MPIK)'}
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ElectionStatusControlCard;
