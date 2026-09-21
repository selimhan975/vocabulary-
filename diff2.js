import { availableLessons } from './src/data/lessons.ts';
import { globalDictionary } from './src/data/dictionary.ts';
const w1 = availableLessons.flatMap(l => l.words).find(w => w.word === 'journalism').translations;
const w2 = globalDictionary['journalism'];
for (const lang of Object.keys(w1)) {
  if (w1[lang] !== w2[lang]) {
    console.log(`Difference in ${lang}: lesson=${w1[lang]} dict=${w2[lang]}`);
  }
}
for (const lang of Object.keys(w2)) {
  if (w1[lang] !== w2[lang]) {
    console.log(`Difference in ${lang}: lesson=${w1[lang]} dict=${w2[lang]}`);
  }
}
console.log("Done");
