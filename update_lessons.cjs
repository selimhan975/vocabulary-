const fs = require('fs');

const content = `import { Lesson } from '../types';
import { b2Lesson1 } from './b2-lesson-1';
import { b2Lesson2 } from './b2-lesson-2';
import { b2Lesson3 } from './b2-lesson-3';
import { b2Lesson4 } from './b2-lesson-4';
import { b2Lesson5 } from './b2-lesson-5';
import { b2Lesson6 } from './b2-lesson-6';
import { b2Lesson7 } from './b2-lesson-7';

// We will add more lessons here
export const availableLessons: Lesson[] = [
  b2Lesson1,
  b2Lesson2,
  b2Lesson3,
  b2Lesson4,
  b2Lesson5,
  b2Lesson6,
  b2Lesson7
];

export function getLessonsByLevel(level: string): Lesson[] {
  return availableLessons.filter(l => l.level === level);
}
`;
fs.writeFileSync('src/data/lessons.ts', content);
