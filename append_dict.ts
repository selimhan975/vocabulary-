import fs from 'fs';
import { b2Lesson41 } from './src/data/b2-lesson-41';
import { b2Lesson42 } from './src/data/b2-lesson-42';
import { b2Lesson43 } from './src/data/b2-lesson-43';
import { b2Lesson44 } from './src/data/b2-lesson-44';

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
