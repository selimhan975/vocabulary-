const fs = require('fs');

const files = [
  'src/data/b2-lesson-41.ts',
  'src/data/b2-lesson-42.ts',
  'src/data/b2-lesson-43.ts',
  'src/data/b2-lesson-44.ts'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/word: "(.*?)",/g, (match, p1) => {
    return `${match}\n      pronunciation: "/.../",\n      partOfSpeech: "noun",\n      level: "B2",`;
  });
  fs.writeFileSync(file, content);
}
console.log('Lessons patched.');
