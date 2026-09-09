import * as fs from 'fs';
import * as path from 'path';
import { availableLessons } from './src/data/lessons';
import { globalDictionary } from './src/data/dictionary';

const supportedLangs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];

let totalWords = 0;
let completeWords = 0;
let incompleteWords = 0;
let missingWords = 0;

let totalExamples = 0;
let completeExamples = 0;
let incompleteExamples = 0;
let missingExamples = 0;

const missingExampleDetails: string[] = [];
const lessonSummaries: string[] = [];

availableLessons.forEach(lesson => {
  let lessonWordsComplete = 0;
  let lessonExamplesComplete = 0;
  let lessonExamplesTotal = 0;
  
  lesson.words.forEach(word => {
    totalWords++;
    let hasAll = true;
    let hasNone = true;
    
    supportedLangs.forEach(lang => {
      if (word.translations && word.translations[lang] && word.translations[lang].trim() !== '') {
        hasNone = false;
      } else {
        hasAll = false;
      }
    });
    
    if (hasAll) completeWords++;
    else if (hasNone) missingWords++;
    else incompleteWords++;
    
    if (hasAll) {
      lessonWordsComplete++;
    }
    
    word.meanings.forEach(meaning => {
      meaning.examples.forEach((example, exIndex) => {
        totalExamples++;
        lessonExamplesTotal++;
        let exHasAll = true;
        let exHasNone = true;
        let exMissingLangs: string[] = [];
        
        supportedLangs.forEach(lang => {
          if (example.translation && example.translation[lang] && example.translation[lang].trim() !== '') {
            exHasNone = false;
          } else {
            exHasAll = false;
            exMissingLangs.push(lang);
          }
        });
        
        if (exHasAll) {
          completeExamples++;
          lessonExamplesComplete++;
        } else if (exHasNone) {
          missingExamples++;
          missingExampleDetails.push(`Lesson ${lesson.number}
Word: ${word.word}
Example ${exIndex + 1}
Missing: ALL`);
        } else {
          incompleteExamples++;
          missingExampleDetails.push(`Lesson ${lesson.number}
Word: ${word.word}
Example ${exIndex + 1}
Missing: ${exMissingLangs.join(', ')}`);
        }
      });
    });
  });
  
  lessonSummaries.push(`Lesson ${lesson.number}:
words complete: ${lessonWordsComplete}/${lesson.words.length}
examples complete: ${lessonExamplesComplete}/${lessonExamplesTotal}`);
});

let dictTotal = Object.keys(globalDictionary).length;
let dictWordsCovered = 0;
let dictWordsMissing = 0;

availableLessons.forEach(lesson => {
  lesson.words.forEach(w => {
    let target = w.word.toLowerCase();
    if (globalDictionary[target]) {
      dictWordsCovered++;
    } else {
      dictWordsMissing++;
    }
  });
});

console.log(`SUPPORTED LANGUAGES
1. Spanish (es)
2. Russian (ru)
3. Chinese (zh)
4. French (fr)
5. German (de)
6. Turkish (tr)
7. Japanese (ja)

TARGET WORDS
Total: ${totalWords}
Complete in all languages: ${completeWords}
Incomplete: ${incompleteWords}
Missing: ${missingWords}

EXAMPLE SENTENCES
Total: ${totalExamples}
Complete in all languages: ${completeExamples}
Incomplete: ${incompleteExamples}
Missing: ${missingExamples}

OFFLINE DICTIONARY
Total entries: ${dictTotal}
Languages: es, ru, zh, fr, de, tr, ja
Target words covered: ${dictWordsCovered}
Target words missing: ${dictWordsMissing}

LESSON-BY-LESSON SUMMARY

${lessonSummaries.join('\n\n')}

MISSING EXAMPLE TRANSLATIONS:

${missingExampleDetails.join('\n\n')}
`);
