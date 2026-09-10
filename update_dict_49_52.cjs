const fs = require('fs');

let dictCode = fs.readFileSync('src/data/dictionary.ts', 'utf8');

const files = [
  'src/data/b2-lesson-49.ts',
  'src/data/b2-lesson-50.ts',
  'src/data/b2-lesson-51.ts',
  'src/data/b2-lesson-52.ts'
];

function extractWords(code) {
  const matches = code.matchAll(/"word":\s*"([^"]+)",[\s\S]*?"translations":\s*({[^}]+})/g);
  const words = [];
  for (const m of matches) {
    words.push({ word: m[1], translations: m[2] });
  }
  return words;
}

const allWords = [];
for (const f of files) {
  allWords.push(...extractWords(fs.readFileSync(f, 'utf8')));
}

let additions = '';
for (const w of allWords) {
  additions += `  "${w.word}": ${w.translations},\n`;
}

let lastBrace = dictCode.lastIndexOf('};');
if (lastBrace === -1) lastBrace = dictCode.lastIndexOf('}');

const newDictCode = dictCode.slice(0, lastBrace) + additions + dictCode.slice(lastBrace);
fs.writeFileSync('src/data/dictionary.ts', newDictCode);
console.log('Added words to dictionary:', allWords.length);
