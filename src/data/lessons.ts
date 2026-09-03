import { Lesson } from '../types';
import { b2Lesson1 } from './b2-lesson-1';
import { b2Lesson2 } from './b2-lesson-2';
// We will add more lessons here
export const availableLessons: Lesson[] = [b2Lesson1, b2Lesson2];

export function getLessonsByLevel(level: string): Lesson[] {
  return availableLessons.filter(l => l.level === level);
}
