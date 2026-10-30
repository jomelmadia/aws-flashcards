import data from "./data/aws_flashcards.json";
import { useFlashcards } from "./hooks/useFlashcards";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import CategoryFilter from "./components/CategoryFilter";
import ProgressBar from "./components/ProgressBar";
import FlashCard from "./components/FlashCard";
import CardControls from "./components/CardControls";

export default function App() {
  const fc = useFlashcards(data.cards);

  useKeyboardShortcuts({
    onPrev: () => fc.move(-1),
    onNext: () => fc.move(1),
    onFlip: fc.flip,
  });

  return (
    <main>
      <h1>{data.title}</h1>
      <p className="sub">Select a topic, tap the card to see the answer.</p>

      <CategoryFilter
        categories={fc.categories}
        selected={fc.category}
        onSelect={fc.selectCategory}
      />

      {fc.card && (
        <>
          <ProgressBar current={fc.index + 1} total={fc.deck.length} flipped={fc.flipped} />
          <FlashCard card={fc.card} flipped={fc.flipped} onFlip={fc.flip} />
          <CardControls
            canPrev={fc.index > 0}
            canNext={fc.index < fc.deck.length - 1}
            flipped={fc.flipped}
            onPrev={() => fc.move(-1)}
            onNext={() => fc.move(1)}
            onFlip={fc.flip}
            onShuffle={fc.shuffleDeck}
            onReset={fc.resetOrder}
          />
        </>
      )}
    </main>
  );
}
