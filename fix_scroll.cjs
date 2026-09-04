const fs = require('fs');

let content = fs.readFileSync('src/components/lesson/VocabularyStage.tsx', 'utf-8');

// Add useEffect
content = content.replace(
  "  const navigateTo = (index: number) => {",
  "  React.useEffect(() => {\n    window.scrollTo({ top: 0, behavior: 'instant' });\n  }, [currentIndex]);\n\n  const navigateTo = (index: number) => {"
);

fs.writeFileSync('src/components/lesson/VocabularyStage.tsx', content);
