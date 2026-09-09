const fs = require('fs');

const lessons = [29, 30, 31, 32];

function fixAnswer(num) {
  const filePath = `src/data/b2-lesson-${num}.ts`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/"correctAnswer": /g, '"correctAnswerIndex": ');
  
  fs.writeFileSync(filePath, content);
}

lessons.forEach(fixAnswer);
