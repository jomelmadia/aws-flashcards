import { useCallback, useMemo, useState } from "react";
import { shuffle } from "../utils/shuffle";

export function useFlashcards(allCards) {
  const [category, setCategory] = useState("All");
  const [order, setOrder] = useState(allCards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const categories = useMemo(
    () => ["All", ...new Set(allCards.map((c) => c.category))],
    [allCards],
  );

  const deck = useMemo(
    () =>
      category === "All" ? order : order.filter((c) => c.category === category),
    [category, order],
  );

  const flip = useCallback(() => setFlipped((f) => !f), []);

  const move = useCallback(
    (delta) => {
      setFlipped(false);
      setIndex((i) => Math.min(deck.length - 1, Math.max(0, i + delta)));
    },
    [deck.length],
  );

  const selectCategory = (c) => {
    setCategory(c);
    setIndex(0);
    setFlipped(false);
  };

  const shuffleDeck = () => {
    setOrder(shuffle(allCards));
    setIndex(0);
    setFlipped(false);
  };

  const resetOrder = () => {
    setOrder(allCards);
    setIndex(0);
    setFlipped(false);
  };

  return {
    categories,
    category,
    deck,
    index,
    flipped,
    card: deck[index],
    flip,
    move,
    selectCategory,
    shuffleDeck,
    resetOrder,
  };
}
