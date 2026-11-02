import "./VoteProgressBar.css";

export const VoteProgressBar = ({
  candidateName = "1. Nanami Kento & Loid Forger",
  votes = 221,
  percentage = 67.8,
  color = "#4059AD",
  showVoteCount = true,
  className = "",
  ...props
}) => {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className={`vote-progress-item ${className}`.trim()} {...props}>
      {/* Top Header: Candidate Name & Vote Summary */}
      <div className="vote-progress-top">
        <h4 className="vote-progress-name">{candidateName}</h4>
        {showVoteCount && (
          <span className="vote-progress-votes">
            <strong>{votes}</strong> Suara
          </span>
        )}
      </div>

      {/* Progress Track & Fill */}
      <div className="vote-progress-track">
        <div
          className="vote-progress-fill"
          style={{
            width: `${clampedPercentage}%`,
            backgroundColor: color,
          }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {clampedPercentage >= 15 && (
            <span className="vote-progress-fill-text">{clampedPercentage}%</span>
          )}
        </div>
      </div>

      {/* Outside percentage label for small percentages */}
      {clampedPercentage < 15 && (
        <span className="vote-progress-outside-text">{clampedPercentage}%</span>
      )}
    </div>
  );
};

export const VoteProgressBarGroup = ({
  title = "Hasil Perolehan Suara per Kandidat",
  totalVotes = 327,
  candidates = [
    {
      id: "1",
      candidateName: "1. Nanami Kento & Loid Forger",
      votes: 221,
      percentage: 67.8,
      color: "#4059AD",
    },
    {
      id: "2",
      candidateName: "2. Kambe Daisuke & Hiromi Higuruma",
      votes: 106,
      percentage: 33.2,
      color: "#F7D070",
    },
  ],
  className = "",
  ...props
}) => {
  return (
    <div className={`vote-progress-group-card ${className}`.trim()} {...props}>
      <div className="vote-progress-group-header">
        <h3 className="vote-progress-group-title">{title}</h3>
        <span className="vote-progress-group-meta">
          Total suara yang telah diverifikasi: <strong>{totalVotes}</strong>
        </span>
      </div>

      <div className="vote-progress-group-list">
        {candidates.map((c) => (
          <VoteProgressBar
            key={c.id || c.candidateName}
            candidateName={c.candidateName}
            votes={c.votes}
            percentage={c.percentage}
            color={c.color}
          />
        ))}
      </div>
    </div>
  );
};

export default VoteProgressBar;
