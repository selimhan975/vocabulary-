const fs = require('fs');
const files = fs.readdirSync('src/data').filter(f => f.match(/^b2-lesson-\d+\.ts$/));
const words = new Set();

for (const f of files) {
  const content = fs.readFileSync(`src/data/${f}`, 'utf-8');
  const wordMatches = content.matchAll(/(?:["']?word["']?)\s*:\s*(["'])([^"']+)\1/g);
  for (const m of wordMatches) {
    words.add(m[2].toLowerCase());
  }
}
console.log(Array.from(words).join(', '));
