interface ProgressBarProps {
  obtained: number;
  total: number;
  size?: 'small' | 'large';
}

export function ProgressBar({ obtained, total, size = 'small' }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((obtained / total) * 100) : 0;

  return (
    <div className={`progress ${size}`}>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-text">
        {obtained}/{total} &middot; {pct}%
      </span>
    </div>
  );
}
