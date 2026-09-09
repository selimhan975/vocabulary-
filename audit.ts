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

const missingWordDetails: string[] = [];
const missingExampleDetails: string[] = [];

const lessonSummaries: string[] = [];

availableLessons.forEach(lesson => {
  let lessonWordsComplete = 0;
  let lessonWordsTotal = lesson.words.length;
  let lessonExamplesComplete = 0;
  let lessonExamplesTotal = 0;
  
  lesson.words.forEach(word => {
    totalWords++;
    let hasAll = true;
    let hasNone = true;
    let missingLangs: string[] = [];
    
    supportedLangs.forEach(lang => {
      if (word.translations && word.translations[lang] && word.translations[lang].trim() !== '') {
        hasNone = false;
      } else {
        hasAll = false;
        missingLangs.push(lang);
      }
    });
    
    if (hasAll) {
      completeWords++;
      lessonWordsComplete++;
    } else if (hasNone) {
      missingWords++;
      missingWordDetails.push(`Lesson ${lesson.number} - Word: ${word.word} - Missing: ALL`);
    } else {
      incompleteWords++;
      missingWordDetails.push(`Lesson ${lesson.number} - Word: ${word.word} - Missing: ${missingLangs.join(', ')}`);
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
            // check if it's identical to english by mistake (sometimes English is stored as translation, but maybe that's valid? We can check if translation == example.sentence)
            if (example.translation[lang].trim() === example.sentence.trim()) {
               exHasAll = false;
               exMissingLangs.push(`${lang} (English copied)`);
            }
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
          missingExampleDetails.push(`Lesson ${lesson.number} - Word: ${word.word} - Example ${exIndex + 1} - Missing: ALL`);
        } else {
          incompleteExamples++;
          missingExampleDetails.push(`Lesson ${lesson.number} - Word: ${word.word} - Example ${exIndex + 1} - Missing: ${exMissingLangs.join(', ')}`);
        }
      });
    });
  });
  
  lessonSummaries.push(`Lesson ${lesson.number}:
words complete: ${lessonWordsComplete}/${lessonWordsTotal}
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
(Note: 'en' is present in UI but acts as a source language)

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

MISSING DETAILS (WORDS)
${missingWordDetails.length > 0 ? missingWordDetails.join('\n') : 'None'}

MISSING DETAILS (EXAMPLES)
${missingExampleDetails.length > 0 ? missingExampleDetails.join('\n') : 'None'}
`);
