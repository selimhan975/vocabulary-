const fs = require('fs');

const files = [
  'src/data/b2-lesson-49.ts',
  'src/data/b2-lesson-50.ts',
  'src/data/b2-lesson-51.ts',
  'src/data/b2-lesson-52.ts'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/"text": "([^]*?)",\n    "questions":/g, '"text": `$1`,\n    "questions":');
  fs.writeFileSync(f, content);
}
