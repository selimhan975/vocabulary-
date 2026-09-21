import { availableLessons } from './src/data/lessons.ts';
import { globalDictionary } from './src/data/dictionary.ts';

const lessonWord = availableLessons.flatMap(l => l.words).find(w => w.word === 'journalism');
console.log("LESSON TRANSLATIONS:");
console.log(lessonWord.translations);

console.log("\nGLOBAL DICT TRANSLATIONS:");
console.log(globalDictionary['journalism']);

console.log("\nARE THEY EXACTLY EQUAL?", JSON.stringify(lessonWord.translations) === JSON.stringify(globalDictionary['journalism']));
