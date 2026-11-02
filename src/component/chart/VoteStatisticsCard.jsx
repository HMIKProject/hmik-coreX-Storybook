import "./VoteStatisticsCard.css";

export const VoteStatisticsCard = ({
  title = "Grafik Hasil Voting",
  isLive = true,
  liveBadgeText = "LIVE",
  totalVotes = 327,
  onBack,
  backButtonText = "← Kembali ke Dashboard",
  candidates = [
    {
      id: "1",
      name: "Nanami Kento & Loid Forger",
      votes: 222,
      percentage: 67.8,
      color: "#4059AD",
      badgeBg: "#4059AD",
      badgeTextColor: "#FFFFFF",
    },
    {
      id: "2",
      name: "Kambe Daisuke & Hiromi Higuruma",
      votes: 105,
      percentage: 32.2,
      color: "#F7D070",
      badgeBg: "#F7D070",
      badgeTextColor: "#2B2B2B",
    },
  ],
  maxScale = 250,
  step = 50,
  className = "",
  ...props
}) => {
  // Generate y-axis steps (e.g. 250, 200, 150, 100, 50, 0)
  const steps = [];
  for (let val = maxScale; val >= 0; val -= step) {
    steps.push(val);
  }

  return (
    <div className={`vote-stat-card ${className}`.trim()} {...props}>
      {/* Header Card */}
      <div className="vote-stat-header">
        <div className="vote-stat-header-left">
          <div className="vote-stat-title-row">
            <h2 className="vote-stat-title">{title}</h2>
            {isLive && (
              <div className="vote-stat-live-badge">
                <span className="vote-stat-live-dot" />
                <span>{liveBadgeText}</span>
              </div>
            )}
          </div>
          <p className="vote-stat-total-meta">
            Total Suara Masuk: <strong>{totalVotes}</strong>
          </p>
        </div>

        {onBack && (
          <button
            type="button"
            className="vote-stat-back-btn"
            onClick={onBack}
          >
            {backButtonText}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="vote-stat-divider" />

      {/* Chart Section */}
      <div className="vote-stat-chart-container">
        {/* Y-Axis and Horizontal Grid Lines */}
        <div className="vote-stat-grid">
          {steps.map((val) => (
            <div key={val} className="vote-stat-grid-row">
              <span className="vote-stat-y-label">{val}</span>
              <div
                className={`vote-stat-grid-line ${
                  val === 0 ? "vote-stat-grid-line-baseline" : ""
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bars Container */}
        <div className="vote-stat-bars-wrapper">
          {candidates.map((c) => {
            const heightPercent = Math.min(
              Math.max((c.votes / maxScale) * 100, 0),
              100
            );

            return (
              <div key={c.id || c.name} className="vote-stat-candidate-column">
                {/* Bar Plot */}
                <div className="vote-stat-bar-plot-area">
                  <span className="vote-stat-votes-label">
                    {c.votes} Suara
                  </span>
                  <div
                    className="vote-stat-column-bar"
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: c.color,
                    }}
                    role="progressbar"
                    aria-valuenow={c.votes}
                    aria-valuemin={0}
                    aria-valuemax={maxScale}
                  />
                </div>

                {/* Bottom Metadata: Name & Percentage Badge */}
                <div className="vote-stat-candidate-footer">
                  <h4 className="vote-stat-candidate-name">{c.name}</h4>
                  <div
                    className="vote-stat-percent-badge"
                    style={{
                      backgroundColor: c.badgeBg || c.color,
                      color: c.badgeTextColor || "#FFFFFF",
                    }}
                  >
                    <span>{c.percentage}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VoteStatisticsCard;
