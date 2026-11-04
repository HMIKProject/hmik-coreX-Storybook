import './VoteCandidateResultCard.css';

export const VoteCandidateResultCard = ({
  title = 'Hasil Perolehan Suara per Kandidat',
  totalVotes = 327,
  subtitle,
  candidates = [],
  className = '',
  ...props
}) => {
  const displaySubtitle =
    subtitle || `Total suara yang terlah diverifikasi: ${totalVotes}`;

  return (
    <div className={`hmik-vote-result-card ${className}`.trim()} {...props}>
      <div className="hmik-vote-result-card-header">
        <h3 className="hmik-vote-result-card-title">{title}</h3>
        <p className="hmik-vote-result-card-subtitle">{displaySubtitle}</p>
      </div>

      <div className="hmik-vote-result-candidates-list">
        {candidates.map((candidate, idx) => {
          const numberPrefix = candidate.nomorUrut || idx + 1;
          const pct = candidate.percentage ?? 0;
          const displayPct = typeof pct === 'number' ? `${pct.toFixed(1)}%` : String(pct);

          return (
            <div key={candidate.id || idx} className="hmik-vote-result-candidate-item">
              <h4 className="hmik-vote-result-candidate-name">
                {numberPrefix}. {candidate.name}
              </h4>
              <div className="hmik-vote-result-bar-track">
                <div
                  className="hmik-vote-result-bar-fill"
                  style={{
                    width: `${Math.min(Math.max(parseFloat(pct) || 0, 8), 100)}%`,
                    backgroundColor: candidate.color || '#4059AD',
                  }}
                >
                  <span className="hmik-vote-result-bar-percentage">
                    {displayPct}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoteCandidateResultCard;
