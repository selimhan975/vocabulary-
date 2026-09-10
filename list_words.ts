import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

let allWords: string[] = [];
let allTitles: string[] = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const wordMatches = content.match(/word:\s*"([^"]+)"/g);
  if (wordMatches) {
    wordMatches.forEach(w => allWords.push(w.replace('word: "', '').replace('"', '').toLowerCase()));
  }
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  if (titleMatch) {
    allTitles.push(titleMatch[1]);
  }
}

console.log("TITLES:");
console.log(allTitles.join('\n'));
console.log("\nWORDS:");
console.log(allWords.sort().join(', '));
