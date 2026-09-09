const fs = require('fs');

const lessons = [29, 30, 31, 32];

function fixReading(num) {
  const filePath = `src/data/b2-lesson-${num}.ts`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Quick string replacement since we just formatted it with JSON.stringify
  content = content.replace(/"questions": \[/, '"translations": {},\n    "comprehensionQuestions": [');
  
  fs.writeFileSync(filePath, content);
}

lessons.forEach(fixReading);
