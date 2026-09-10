const fs = require('fs');

const b2Lesson41 = require('./src/data/b2-lesson-41').b2Lesson41;
const b2Lesson42 = require('./src/data/b2-lesson-42').b2Lesson42;
const b2Lesson43 = require('./src/data/b2-lesson-43').b2Lesson43;
const b2Lesson44 = require('./src/data/b2-lesson-44').b2Lesson44;

const lessons = [b2Lesson41, b2Lesson42, b2Lesson43, b2Lesson44];

let dictAdditions = '';

for (const lesson of lessons) {
  for (const word of lesson.words) {
    dictAdditions += `  "${word.word}": {\n`;
    for (const [lang, trans] of Object.entries(word.translations)) {
      dictAdditions += `    "${lang}": "${trans}",\n`;
    }
    dictAdditions += `  },\n`;
  }
}

let dictContent = fs.readFileSync('src/data/dictionary.ts', 'utf-8');
dictContent = dictContent.replace(/};\n?$/, dictAdditions + '};\n');
fs.writeFileSync('src/data/dictionary.ts', dictContent);
console.log('Dictionary updated.');
