import './VoterDataTable.css';

export const VoterDataTable = ({
  voters = [],
  onDelete,
  isLoading = false,
  emptyMessage = 'Tidak ada data pemilih yang sesuai kriteria.',
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  pageSize = 10,
  onPageChange,
  className = '',
  ...props
}) => {
  return (
    <div className={`hmik-voter-table-card ${className}`.trim()} {...props}>
      <table className="hmik-voter-table">
        <thead className="hmik-voter-table-header">
          <tr>
            <th style={{ width: '110px' }}>NIM</th>
            <th style={{ width: '280px' }}>EMAIL</th>
            <th style={{ width: '180px' }}>PROGRAM STUDI</th>
            <th style={{ width: '140px', textAlign: 'center' }}>STATUS VOTE</th>
            <th style={{ width: '160px' }}>LOGIN TERAKHIR</th>
            <th style={{ width: '160px' }}>TGL REGISTRASI</th>
            <th style={{ width: '100px', textAlign: 'center' }}>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={7} className="hmik-voter-empty">
                Memuat data pemilih...
              </td>
            </tr>
          ) : voters.length === 0 ? (
            <tr>
              <td colSpan={7} className="hmik-voter-empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            voters.map((voter, index) => {
              const hasVoted = !!voter.status_memilih;
              return (
                <tr key={voter.id_pemilih || voter.nim || index}>
                  <td className="hmik-voter-table-nim">{voter.nim}</td>
                  <td>{voter.email_kampus || voter.email}</td>
                  <td>{voter.prodi || 'S1 Teknik Informatika'}</td>
                  <td style={{ textAlign: 'center' }}>
                    <span
                      className={`hmik-voter-badge ${
                        hasVoted
                          ? 'hmik-voter-badge--voted'
                          : 'hmik-voter-badge--not-voted'
                      }`}
                    >
                      {hasVoted ? 'Sudah Memilih' : 'Belum Memilih'}
                    </span>
                  </td>
                  <td>{voter.login_terakhir || (hasVoted ? voter.waktu_memilih : '-')}</td>
                  <td>{voter.tgl_registrasi || voter.dibuat_pada || '-'}</td>
                  <td style={{ textAlign: 'center' }}>
                    {hasVoted && onDelete ? (
                      <button
                        type="button"
                        className="hmik-voter-delete-btn"
                        onClick={() => onDelete(voter)}
                      >
                        Hapus
                      </button>
                    ) : (
                      <span>-</span>
                    )}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {/* Pagination Footer */}
      {totalItems > 0 && totalPages > 1 && (
        <div className="hmik-voter-pagination">
          <div className="hmik-voter-pagination-info">
            Menampilkan {((currentPage - 1) * pageSize) + 1} - {Math.min(currentPage * pageSize, totalItems)} dari {totalItems} pemilih
          </div>
          <div className="hmik-voter-pagination-controls">
            <button
              type="button"
              className="hmik-voter-page-btn"
              disabled={currentPage <= 1}
              onClick={() => onPageChange && onPageChange(currentPage - 1)}
            >
              &larr; Sebelumnya
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
              if (
                p === 1 ||
                p === totalPages ||
                (p >= currentPage - 2 && p <= currentPage + 2)
              ) {
                return (
                  <button
                    key={p}
                    type="button"
                    className={`hmik-voter-page-btn ${
                      p === currentPage ? 'hmik-voter-page-btn--active' : ''
                    }`}
                    onClick={() => onPageChange && onPageChange(p)}
                  >
                    {p}
                  </button>
                );
              }
              if (p === currentPage - 3 || p === currentPage + 3) {
                return <span key={p} className="hmik-voter-page-ellipsis">...</span>;
              }
              return null;
            })}

            <button
              type="button"
              className="hmik-voter-page-btn"
              disabled={currentPage >= totalPages}
              onClick={() => onPageChange && onPageChange(currentPage + 1)}
            >
              Selanjutnya &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoterDataTable;
