import { availableLessons } from './src/data/lessons.ts';
import { globalDictionary } from './src/data/dictionary.ts';
const w1 = availableLessons.flatMap(l => l.words).find(w => w.word === 'journalism').translations;
const w2 = globalDictionary['journalism'];
console.log("Lesson:", w1);
console.log("Dict:", w2);
