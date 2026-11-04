import './VoterDataTable.css';

export const VoterDataTable = ({
  voters = [],
  onDelete,
  isLoading = false,
  emptyMessage = 'Tidak ada data pemilih yang sesuai kriteria.',
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
    </div>
  );
};

export default VoterDataTable;
