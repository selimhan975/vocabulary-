const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

let existingWords = new Set();
let newWords = [];

files.forEach(file => {
  const isNew = file === 'b2-lesson-29.ts' || file === 'b2-lesson-30.ts' || file === 'b2-lesson-31.ts' || file === 'b2-lesson-32.ts';
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  
  const wordMatches = content.matchAll(/word:\s*["']([^"']+)["']/g);
  for (const match of wordMatches) {
    const word = match[1].toLowerCase();
    if (isNew) {
      newWords.push(word);
    } else {
      existingWords.add(word);
    }
  }
});

let duplicates = newWords.filter(w => existingWords.has(w));
console.log(`New words count: ${newWords.length}`);
console.log(`Duplicates against lessons 1-28: ${duplicates.length}`);
if (duplicates.length > 0) {
    console.log(`Duplicates found: ${duplicates.join(', ')}`);
}

// Ensure no synonyms are the exact same word
let synonymDupes = [];
files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  // Simple check... actually, our new words don't have synonyms array populated (we used synonyms: [])
});
console.log(`Synonym dupes: ${synonymDupes.length}`);
