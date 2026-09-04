const fs = require('fs');

let content = fs.readFileSync('src/components/lesson/VocabularyStage.tsx', 'utf-8');
content = content.replace(
  "window.scrollTo({ top: 0, behavior: 'instant' });",
  "window.scrollTo(0, 0);"
);

fs.writeFileSync('src/components/lesson/VocabularyStage.tsx', content);
