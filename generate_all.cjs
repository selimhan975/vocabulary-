const fs = require('fs');
let globalWordCount = 521;
let globalMeaningCount = 521;
let globalExampleCount = 1041;
let globalQCount = 1;

function convertWord(w) {
  const wId = `w${globalWordCount++}`;
  const mId = `m${globalMeaningCount++}`;
  const e1Id = `ex${globalExampleCount++}`;
  const e2Id = `ex${globalExampleCount++}`;
  
  return {
    id: wId,
    word: w.word,
    pronunciation: `/${w.word}/`, // simplified
    partOfSpeech: w.type,
    level: "B2",
    translations: {
      ru: w.ru, zh: w.zh, es: w.es, fr: w.fr, de: w.de, tr: w.tr, ja: w.ja
    },
    synonyms: [],
    collocations: [],
    meanings: [
      {
        id: mId,
        definition: w.en,
        translation: {
          ru: w.ru, zh: w.zh, es: w.es, fr: w.fr, de: w.de, tr: w.tr, ja: w.ja
        },
        examples: [
          {
            id: e1Id,
            sentence: w.ex1.en,
            translation: {
              ru: w.ex1.ru, zh: w.ex1.zh, es: w.ex1.es, fr: w.ex1.fr, de: w.ex1.de, tr: w.ex1.tr, ja: w.ex1.ja
            }
          },
          {
            id: e2Id,
            sentence: w.ex2.en,
            translation: {
              ru: w.ex2.ru, zh: w.ex2.zh, es: w.ex2.es, fr: w.ex2.fr, de: w.ex2.de, tr: w.ex2.tr, ja: w.ex2.ja
            }
          }
        ]
      }
    ]
  };
}

function convertReading(r, num) {
  return {
    id: `r5${num}`,
    title: `Reading Lesson ${num}`,
    content: r.en,
    translations: {
      ru: r.ru, zh: r.zh, es: r.es, fr: r.fr, de: r.de, tr: r.tr, ja: r.ja
    },
    comprehensionQuestions: []
  };
}

function convertQuestions(qs, num) {
  return qs.map((q, i) => ({
    id: `q${globalQCount++}`,
    question: q.question,
    options: q.options,
    correctAnswerIndex: q.answer
  }));
}

function processLesson(raw, num) {
  const words = raw.words.map(convertWord);
  const reading = convertReading(raw.reading, num);
  reading.comprehensionQuestions = convertQuestions(raw.questions, num);
  
  const finalObj = {
    id: `b2-lesson-${num}`,
    title: raw.title,
    number: num,
    level: "B2",
    words: words,
    reading: reading
  };
  
  const code = `import { Lesson } from '../types';\n\nexport const b2Lesson${num}: Lesson = ${JSON.stringify(finalObj, null, 2)};\n`;
  fs.writeFileSync(`src/data/b2-lesson-${num}.ts`, code);
}

const l53 = require('./l53.json');
const l54 = require('./l54.json');
const l55 = require('./l55.json');
const l56 = require('./l56.json');

processLesson(l53, 53);
processLesson(l54, 54);
processLesson(l55, 55);
processLesson(l56, 56);
