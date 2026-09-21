const fs = require('fs');

const wordsMap = new Map();
let duplicateCount = 0;
let totalWords = 0;

for (let i = 1; i <= 60; i++) {
  const file = `src/data/b2-lesson-${i}.ts`;
  if (fs.existsSync(file)) {
     const content = fs.readFileSync(file, 'utf8');
     // The main words have `pronunciation:` soon after.
     const matches = [...content.matchAll(/word:\s*['"]([^'"]+)['"],\s*pronunciation:/g)];
     for (const m of matches) {
        totalWords++;
        const word = m[1];
        if (wordsMap.has(word)) {
           console.log(`Duplicate found: ${word} in lesson ${i} and ${wordsMap.get(word)}`);
           duplicateCount++;
        } else {
           wordsMap.set(word, i);
        }
     }
  }
}

console.log(`Total duplicates: ${duplicateCount}`);
console.log(`Total unique words: ${wordsMap.size}`);
console.log(`Total word entries found: ${totalWords}`);
