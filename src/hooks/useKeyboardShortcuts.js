import { useEffect } from "react";

// Arrow keys move between cards; Space/Enter flips (unless a button has focus,
// since buttons already handle Space/Enter natively).
export function useKeyboardShortcuts({ onPrev, onNext, onFlip }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
      else if (
        (e.key === " " || e.key === "Enter") &&
        e.target.tagName !== "BUTTON"
      ) {
        e.preventDefault();
        onFlip();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext, onFlip]);
}
