import './AdminTable.css';

export const AdminTableBadge = ({
  variant = 'info',
  children,
  className = '',
  ...props
}) => {
  return (
    <span
      className={`hmik-table-badge hmik-table-badge--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};

export const AdminTable = ({
  columns = [],
  data = [],
  isLoading = false,
  emptyMessage = 'Tidak ada data ditemukan.',
  className = '',
  ...props
}) => {
  return (
    <div className={`hmik-admin-table-container ${className}`.trim()} {...props}>
      <table className="hmik-admin-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key || col.label}
                style={{
                  width: col.width || 'auto',
                  textAlign: col.align || 'left',
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="hmik-admin-table-loading">
                Memuat data...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="hmik-admin-table-empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id || row.nim || rowIndex}>
                {columns.map((col) => {
                  const cellValue = row[col.key];
                  return (
                    <td
                      key={col.key || col.label}
                      style={{ textAlign: col.align || 'left' }}
                    >
                      {col.render ? col.render(cellValue, row, rowIndex) : cellValue}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
