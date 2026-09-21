const fs = require('fs');
const files = ['src/data/b2-lesson-23.ts', 'src/data/b2-lesson-25.ts', 'src/data/b2-lesson-26.ts', 'src/data/b2-lesson-44.ts'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n--- ${file} ---`);
  const matches = [...content.matchAll(/\{\s*id:\s*"w\d+-\d+",\s*word:\s*"([^"]+)"[\s\S]*?(?=\{\s*id:\s*"w\d+-\d+"|\];)/g)];
  for (const m of matches) {
     const word = m[1];
     if (['investigate', 'witness', 'innocent', 'trial', 'rational', 'empathy', 'bias', 'cognitive', 'instinct', 'evacuate', 'shelter', 'devastate', 'severe', 'legislation', 'campaign'].includes(word)) {
        console.log(`Found block for: ${word}`);
     }
  }
}
