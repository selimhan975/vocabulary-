import { isInflectionOf } from './src/utils/wordRecognition.ts';
import { b2Lesson46 } from './src/data/b2-lesson-46.ts';

const token = "journalism";
const matches = b2Lesson46.words.filter(w => isInflectionOf(token, w.word));
console.log(matches.map(w => w.word));
