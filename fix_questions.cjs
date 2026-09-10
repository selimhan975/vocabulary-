const fs = require('fs');

const files = [
  'src/data/b2-lesson-41.ts',
  'src/data/b2-lesson-42.ts',
  'src/data/b2-lesson-43.ts',
  'src/data/b2-lesson-44.ts'
];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  let content = fs.readFileSync(file, 'utf-8');
  let qNum = 1;
  content = content.replace(/{[\s\n]*question: "/g, (match) => {
    const replacement = `{\n        id: "q${41+i}_${qNum}",\n        question: "`;
    qNum++;
    return replacement;
  });
  fs.writeFileSync(file, content);
}
console.log('Fixed questions.');
