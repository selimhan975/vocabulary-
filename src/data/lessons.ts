import { Lesson } from "../types";
import { b2Lesson1 } from "./b2-lesson-1";
import { b2Lesson2 } from "./b2-lesson-2";
import { b2Lesson3 } from "./b2-lesson-3";
import { b2Lesson4 } from "./b2-lesson-4";
import { b2Lesson5 } from "./b2-lesson-5";
import { b2Lesson6 } from "./b2-lesson-6";
import { b2Lesson7 } from "./b2-lesson-7";
import { b2Lesson8 } from "./b2-lesson-8";
import { b2Lesson9 } from "./b2-lesson-9";
import { b2Lesson10 } from "./b2-lesson-10";
import { b2Lesson11 } from "./b2-lesson-11";
import { b2Lesson12 } from "./b2-lesson-12";
import { b2Lesson13 } from "./b2-lesson-13";
import { b2Lesson14 } from "./b2-lesson-14";
import { b2Lesson15 } from "./b2-lesson-15";
import { b2Lesson16 } from "./b2-lesson-16";
import { b2Lesson17 } from "./b2-lesson-17";
import { b2Lesson18 } from "./b2-lesson-18";
import { b2Lesson19 } from "./b2-lesson-19";
import { b2Lesson20 } from "./b2-lesson-20";
import { b2Lesson21 } from "./b2-lesson-21";
import { b2Lesson22 } from "./b2-lesson-22";
import { b2Lesson23 } from "./b2-lesson-23";
import { b2Lesson24 } from "./b2-lesson-24";
import { b2Lesson25 } from './b2-lesson-25';
import { b2Lesson26 } from './b2-lesson-26';
import { b2Lesson27 } from './b2-lesson-27';
import { b2Lesson28 } from './b2-lesson-28';
import { b2Lesson29 } from './b2-lesson-29';
import { b2Lesson30 } from './b2-lesson-30';
import { b2Lesson31 } from './b2-lesson-31';
import { b2Lesson32 } from './b2-lesson-32';
import { b2Lesson33 } from './b2-lesson-33';
import { b2Lesson34 } from './b2-lesson-34';
import { b2Lesson35 } from './b2-lesson-35';
import { b2Lesson36 } from './b2-lesson-36';




// We will add more lessons here
export const availableLessons: Lesson[] = [
  b2Lesson1,
  b2Lesson2,
  b2Lesson3,
  b2Lesson4,
  b2Lesson5,
  b2Lesson6,
  b2Lesson7,
  b2Lesson8,
  b2Lesson9,
  b2Lesson10,
  b2Lesson11,
  b2Lesson12,
  b2Lesson13,
  b2Lesson14,
  b2Lesson15,
  b2Lesson16,
  b2Lesson17,
  b2Lesson18,
  b2Lesson19,
  b2Lesson20,
  b2Lesson21,
  b2Lesson22,
  b2Lesson23,
  b2Lesson24,
  b2Lesson25,
  b2Lesson26,
  b2Lesson27,
  b2Lesson28,
  b2Lesson29,
  b2Lesson30,
  b2Lesson31,
  b2Lesson32,
  b2Lesson33,
  b2Lesson34,
  b2Lesson35,
  b2Lesson36,
];

export function getLessonsByLevel(level: string): Lesson[] {
  return availableLessons.filter((l) => l.level === level);
}
