const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

let allWords = [];
let allTitles = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) allTitles.push(titleMatch[1].toLowerCase());
  
  const wordMatches = content.matchAll(/["']?word["']?\s*:\s*["']([^"']+)["']/g);
  for (const match of wordMatches) {
    allWords.push(match[1].toLowerCase());
  }
});

console.log("TITLES:");
console.log(allTitles.join('\n'));
console.log("\nWORDS COUNT: " + allWords.length);
console.log("\nWORDS:");
console.log(allWords.join(', '));
