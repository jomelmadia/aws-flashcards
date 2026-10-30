import "./FlashCard.css";

export default function FlashCard({ card, flipped, onFlip }) {
  return (
    <div className="scene">
      <button
        className={`card${flipped ? " flipped" : ""}`}
        onClick={onFlip}
        aria-label={
          flipped
            ? "Showing answer. Flip to question"
            : "Showing question. Flip to answer"
        }
      >
        <span className="inner">
          <span className="face front">
            <span className="cat">{card.category}</span>
            <span className="q">{card.question}</span>
            <span className="hint">Tap to flip</span>
          </span>
          <span className="face rear" aria-hidden={!flipped}>
            <span className="cat">{card.question}</span>
            <span className="a">{card.answer}</span>
            <span className="tags">
              {(card.tags || []).map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}
