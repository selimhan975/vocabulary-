const fs = require('fs');

let content = fs.readFileSync('src/data/dictionary.ts', 'utf-8');
const keys = new Set();
const newLines = [];
let insideKey = null;

const lines = content.split('\n');
let i = 0;
while (i < lines.length) {
  const line = lines[i];
  const match = line.match(/^  "([^"]+)": \{/);
  if (match) {
    const key = match[1];
    if (keys.has(key)) {
      // skip this block
      i++;
      while (i < lines.length && !lines[i].match(/^  \},?/)) {
        i++;
      }
      i++; // skip the closing brace line
      continue;
    } else {
      keys.add(key);
    }
  }
  newLines.push(line);
  i++;
}

fs.writeFileSync('src/data/dictionary.ts', newLines.join('\n'));
console.log('Duplicates removed.');
