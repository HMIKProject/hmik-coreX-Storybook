import { useState } from 'react';
import './CandidateAdminTable.css';

export const CandidateAdminTable = ({
  candidates = [],
  onEdit,
  onDelete,
  isLoading = false,
  emptyMessage = 'Belum ada kandidat yang ditambahkan.',
  className = '',
  ...props
}) => {
  const [imgErrors, setImgErrors] = useState({});

  const handleImageError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={`hmik-candidate-table-card ${className}`.trim()} {...props}>
      <table className="hmik-candidate-table">
        <thead className="hmik-candidate-table-header">
          <tr>
            <th style={{ width: '100px' }}>FOTO</th>
            <th style={{ width: '320px' }}>PASANGAN CALON</th>
            <th style={{ width: '280px' }}>KABINET</th>
            <th style={{ width: '180px', textAlign: 'center' }}>AKSI</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={4} className="hmik-candidate-empty">
                Memuat data kandidat...
              </td>
            </tr>
          ) : candidates.length === 0 ? (
            <tr>
              <td colSpan={4} className="hmik-candidate-empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            candidates.map((candidate, index) => {
              const candidateId = candidate.id_paslon || candidate.nomor_urut || index + 1;
              const hasValidPhoto = candidate.foto_paslon && !imgErrors[candidateId];
              const nomorUrut = candidate.nomor_urut || index + 1;
              const placeholderVariant =
                nomorUrut === 1
                  ? 'variant-1'
                  : nomorUrut === 2
                  ? 'variant-2'
                  : 'variant-default';

              return (
                <tr key={candidateId}>
                  <td>
                    <div className="hmik-candidate-photo-container">
                      {hasValidPhoto ? (
                        <img
                          src={candidate.foto_paslon}
                          alt={`Paslon ${nomorUrut} - ${candidate.nama_ketua}`}
                          className="hmik-candidate-photo-img"
                          onError={() => handleImageError(candidateId)}
                        />
                      ) : (
                        <div
                          className={`hmik-candidate-photo-placeholder ${placeholderVariant}`}
                        >
                          Paslon 0{nomorUrut}
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="hmik-candidate-names">
                      <span className="hmik-candidate-nama-ketua">
                        {candidate.nama_ketua || 'Nama Ketua'}
                      </span>
                      <span className="hmik-candidate-nama-wakil">
                        & {candidate.nama_wakil || 'Nama Wakil'}
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className="hmik-candidate-kabinet">
                      {candidate.nama_kabinet || '-'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="hmik-candidate-actions">
                      <button
                        type="button"
                        className="hmik-candidate-btn hmik-candidate-btn-edit"
                        onClick={() => onEdit && onEdit(candidate)}
                        title="Edit data kandidat"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="hmik-candidate-btn hmik-candidate-btn-delete"
                        onClick={() => onDelete && onDelete(candidate)}
                        title="Hapus kandidat"
                      >
                        Hapus
                      </button>
                    </div>
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

export default CandidateAdminTable;
