const fs = require('fs');

let content = fs.readFileSync('src/components/quiz/QuizContext.tsx', 'utf-8');
content = content.replace(
  "example = meaning.examples[0];",
  "example = meaning.examples[Math.floor(Math.random() * meaning.examples.length)];"
);

fs.writeFileSync('src/components/quiz/QuizContext.tsx', content);
