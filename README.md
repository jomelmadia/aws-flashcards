# AWS Flashcards

React + Vite flashcard app. Cards are loaded from `src/data/aws_flashcards.json`.

```bash
npm install
npm run dev      # start dev server
npm run build    # production build in dist/
```

Edit the JSON to add or change cards. Each card needs `id`, `category`, `question`, `answer`, `tags`.

```
src/
  main.jsx                  entry point
  App.jsx                   page layout
  components/               CategoryFilter, ProgressBar, FlashCard, CardControls (+ .css)
  hooks/                    useFlashcards (deck state), useKeyboardShortcuts
  utils/shuffle.js          Fisher-Yates shuffle
  data/aws_flashcards.json  card data
  styles/index.css          theme tokens and base styles
```
