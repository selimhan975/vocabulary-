import * as fs from 'fs';
import { availableLessons } from './src/data/lessons';

const supportedLangs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];
const missingData: any = {};

availableLessons.forEach(lesson => {
  if (![1, 29, 30, 31, 32].includes(lesson.number)) return;
  
  missingData[lesson.number] = [];
  
  lesson.words.forEach(word => {
    word.meanings.forEach(meaning => {
      meaning.examples.forEach((example, exIndex) => {
        let missingLangs: string[] = [];
        
        supportedLangs.forEach(lang => {
          if (!example.translation || !example.translation[lang] || example.translation[lang].trim() === '') {
            missingLangs.push(lang);
          }
        });
        
        if (missingLangs.length > 0) {
          missingData[lesson.number].push({
            word: word.word,
            exampleId: example.id,
            sentence: example.sentence,
            missing: missingLangs
          });
        }
      });
    });
  });
});

fs.writeFileSync('missing_examples.json', JSON.stringify(missingData, null, 2));
console.log('Saved to missing_examples.json');
