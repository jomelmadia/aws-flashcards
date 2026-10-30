import "./ProgressBar.css";

export default function ProgressBar({ current, total, flipped }) {
  return (
    <>
      <div className="meta">
        <span>Card {current} of {total}</span>
        <span>{flipped ? "Answer" : "Question"}</span>
      </div>
      <div className="bar">
        <i style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </>
  );
}
