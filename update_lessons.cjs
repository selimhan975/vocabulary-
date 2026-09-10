const fs = require('fs');
let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

const imports = `import { b2Lesson56 } from './b2-lesson-56';
import { b2Lesson55 } from './b2-lesson-55';
import { b2Lesson54 } from './b2-lesson-54';
import { b2Lesson53 } from './b2-lesson-53';
`;

content = imports + content;

const arrayStart = content.indexOf('export const availableLessons: Lesson[] = [');
if (arrayStart !== -1) {
  const arrayItemsStart = content.indexOf('[', arrayStart) + 1;
  const insertString = `\n  b2Lesson56,\n  b2Lesson55,\n  b2Lesson54,\n  b2Lesson53,`;
  content = content.substring(0, arrayItemsStart) + insertString + content.substring(arrayItemsStart);
}

fs.writeFileSync('src/data/lessons.ts', content);
