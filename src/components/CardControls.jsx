import "./CardControls.css";

export default function CardControls({
  canPrev, canNext, flipped, onPrev, onNext, onFlip, onShuffle, onReset,
}) {
  return (
    <>
      <div className="ctl">
        <button className="btn" disabled={!canPrev} onClick={onPrev}>Previous</button>
        <button className="btn main" onClick={onFlip}>{flipped ? "Show question" : "Show answer"}</button>
        <button className="btn" disabled={!canNext} onClick={onNext}>Next</button>
      </div>
      <div className="tools">
        <button className="link" onClick={onShuffle}>Shuffle</button>
        <button className="link" onClick={onReset}>Reset order</button>
      </div>
    </>
  );
}
