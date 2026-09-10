const fs = require('fs');

const files = ['b2-lesson-37.ts', 'b2-lesson-38.ts', 'b2-lesson-39.ts', 'b2-lesson-40.ts'];
const startNum = 37;

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const num = startNum + i;
  let content = fs.readFileSync('src/data/' + file, 'utf8');

  content = content.replace(`id: "b2-lesson-${num}",\n  title:`, `id: "b2-lesson-${num}",\n  number: ${num},\n  title:`);

  fs.writeFileSync('src/data/' + file, content);
}

console.log('Fixed number.');
