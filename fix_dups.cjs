const fs = require('fs');

const files = [
  'src/data/b2-lesson-41.ts',
  'src/data/b2-lesson-42.ts',
  'src/data/b2-lesson-43.ts',
  'src/data/b2-lesson-44.ts'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  // the script added 
  // pronunciation: "/.../",
  // partOfSpeech: "noun",
  // level: "B2",
  // MULTIPLE TIMES right after 'word: "...",'
  
  // We can just find 'word: "(.*?)",' and keep only the FIRST set of 3 properties.
  content = content.replace(/word: "(.*?)",([\s\S]*?)translations:/g, (match, word, middle) => {
    return `word: "${word}",\n      pronunciation: "/.../",\n      partOfSpeech: "noun",\n      level: "B2",\n      translations:`;
  });
  
  fs.writeFileSync(file, content);
}
console.log('Fixed duplicates.');
