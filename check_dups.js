import fs from 'fs';

const files = fs.readdirSync('src/data').filter(f => f.startsWith('b2-lesson-'));
const allWords = new Set();
let duplicates = [];

for (const f of files) {
    const text = fs.readFileSync('src/data/' + f, 'utf8');
    const matches = text.match(/word:\s*'([^']+)'/g);
    if (matches) {
        for (const match of matches) {
            const word = match.split("'")[1].toLowerCase();
            if (allWords.has(word)) {
                duplicates.push(word);
            }
            allWords.add(word);
        }
    }
}
console.log('Duplicates:', duplicates);
