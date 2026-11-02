import { useState, useEffect } from "react";
import CheckRoundSuccessIcon from "../icon/CheckRoundSuccessIcon";
import ResetIcon from "../icon/ResetIcon";
import "./VoteSuccessCard.css";

export const VoteSuccessCard = ({
  title = "Suara Anda Berhasil Dicatat!",
  subtitle = "Terima kasih telah berpartisipasi aktif dalam Pemilihan Umum Ketua & Wakil Ketua HMIK Periode 2026/2027.",
  countdownSeconds = 5,
  onCountdownFinish,
  onReset,
  buttonText = "Pilih Paslon Lagi (Reset)",
  showResetButton = true,
  className = "",
  ...props
}) => {
  const [secondsLeft, setSecondsLeft] = useState(countdownSeconds);
  const [prevCountdown, setPrevCountdown] = useState(countdownSeconds);

  // Sync state during render if prop changes (React 19 recommended pattern)
  if (prevCountdown !== countdownSeconds) {
    setPrevCountdown(countdownSeconds);
    setSecondsLeft(countdownSeconds);
  }

  useEffect(() => {
    if (countdownSeconds <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (onCountdownFinish) onCountdownFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownSeconds, onCountdownFinish]);

  return (
    <div className={`vote-success-card-wrapper ${className}`.trim()} {...props}>
      <div className="vote-success-card">
        {/* Ikon Sukses Centang Hijau */}
        <div className="vote-success-icon-container">
          <CheckRoundSuccessIcon
            width={120}
            height={120}
            alt="Sukses"
            className="vote-success-icon"
          />
        </div>

        {/* Header & Pesan */}
        <div className="vote-success-content">
          <h2 className="vote-success-title">{title}</h2>
          <p className="vote-success-subtitle">{subtitle}</p>
        </div>

        {/* Countdown Badge */}
        {secondsLeft > 0 && (
          <div className="vote-success-countdown-pill">
            <span className="vote-success-timer-dot" />
            <span>
              Dialihkan otomatis dalam <strong>{secondsLeft}</strong> detik...
            </span>
          </div>
        )}

        {/* Action Button */}
        {showResetButton && (
          <div className="vote-success-action">
            <button
              type="button"
              className="vote-success-btn"
              onClick={onReset}
            >
              <ResetIcon width={20} height={20} alt="Reset" />
              <span>{buttonText}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoteSuccessCard;
