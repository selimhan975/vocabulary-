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
  content = content.replace(/number: 4[1-4],/, (match) => {
    return `${match}\n  level: "B2",`;
  });
  fs.writeFileSync(file, content);
}
console.log('Fixed level.');
