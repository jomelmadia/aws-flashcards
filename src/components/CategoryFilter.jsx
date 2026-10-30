import "./CategoryFilter.css";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="chips" role="group" aria-label="Topics">
      {categories.map((c) => (
        <button
          key={c}
          className="chip"
          aria-pressed={c === selected}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
