const fs = require('fs');

let globalWordCount = 521;
let globalMeaningCount = 521;
let globalExampleCount = 1041;
let globalQCount = 101;

function parseTS(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  content = content.replace("import { Lesson } from '../types';", "");
  content = content.replace(/export const b2Lesson\d+: Lesson = /g, "");
  content = content.replace(/;\s*$/g, "");
  return JSON.parse(content);
}

function convertWord(w) {
  const wId = `w${globalWordCount++}`;
  const mId = `m${globalMeaningCount++}`;
  const e1Id = `ex${globalExampleCount++}`;
  const e2Id = `ex${globalExampleCount++}`;
  
  return {
    id: wId,
    word: w.word,
    pronunciation: `/${w.word}/`, // simplified
    partOfSpeech: w.type || w.partOfSpeech, // fallback
    level: "B2",
    translations: {
      ru: w.ru || w.translations?.ru,
      zh: w.zh || w.translations?.zh,
      es: w.es || w.translations?.es,
      fr: w.fr || w.translations?.fr,
      de: w.de || w.translations?.de,
      tr: w.tr || w.translations?.tr,
      ja: w.ja || w.translations?.ja
    },
    synonyms: [],
    collocations: [],
    meanings: [
      {
        id: mId,
        definition: w.en || w.meanings?.[0]?.definition,
        translation: {
          ru: w.ru || w.meanings?.[0]?.translation?.ru,
          zh: w.zh || w.meanings?.[0]?.translation?.zh,
          es: w.es || w.meanings?.[0]?.translation?.es,
          fr: w.fr || w.meanings?.[0]?.translation?.fr,
          de: w.de || w.meanings?.[0]?.translation?.de,
          tr: w.tr || w.meanings?.[0]?.translation?.tr,
          ja: w.ja || w.meanings?.[0]?.translation?.ja
        },
        examples: [
          {
            id: e1Id,
            sentence: w.ex1?.en || w.meanings?.[0]?.examples?.[0]?.sentence,
            translation: {
              ru: w.ex1?.ru || w.meanings?.[0]?.examples?.[0]?.translation?.ru,
              zh: w.ex1?.zh || w.meanings?.[0]?.examples?.[0]?.translation?.zh,
              es: w.ex1?.es || w.meanings?.[0]?.examples?.[0]?.translation?.es,
              fr: w.ex1?.fr || w.meanings?.[0]?.examples?.[0]?.translation?.fr,
              de: w.ex1?.de || w.meanings?.[0]?.examples?.[0]?.translation?.de,
              tr: w.ex1?.tr || w.meanings?.[0]?.examples?.[0]?.translation?.tr,
              ja: w.ex1?.ja || w.meanings?.[0]?.examples?.[0]?.translation?.ja
            }
          },
          {
            id: e2Id,
            sentence: w.ex2?.en || w.meanings?.[0]?.examples?.[1]?.sentence,
            translation: {
              ru: w.ex2?.ru || w.meanings?.[0]?.examples?.[1]?.translation?.ru,
              zh: w.ex2?.zh || w.meanings?.[0]?.examples?.[1]?.translation?.zh,
              es: w.ex2?.es || w.meanings?.[0]?.examples?.[1]?.translation?.es,
              fr: w.ex2?.fr || w.meanings?.[0]?.examples?.[1]?.translation?.fr,
              de: w.ex2?.de || w.meanings?.[0]?.examples?.[1]?.translation?.de,
              tr: w.ex2?.tr || w.meanings?.[0]?.examples?.[1]?.translation?.tr,
              ja: w.ex2?.ja || w.meanings?.[0]?.examples?.[1]?.translation?.ja
            }
          }
        ]
      }
    ]
  };
}

function processLesson(filename, num) {
  let raw = parseTS(filename);
  let rawWords = raw.words || [];
  const words = rawWords.map(convertWord);
  
  let readingContent = raw.reading?.en || raw.reading?.content;
  let readingTranslations = raw.reading?.translations || {
    ru: raw.reading?.ru,
    zh: raw.reading?.zh,
    es: raw.reading?.es,
    fr: raw.reading?.fr,
    de: raw.reading?.de,
    tr: raw.reading?.tr,
    ja: raw.reading?.ja
  };
  
  let qs = raw.questions || raw.reading?.comprehensionQuestions || [];
  let comprehensionQuestions = qs.map((q, i) => ({
    id: `q${globalQCount++}`,
    question: q.question,
    options: q.options,
    correctAnswerIndex: q.answer ?? q.correctAnswerIndex
  }));
  
  const finalObj = {
    id: `b2-lesson-${num}`,
    title: raw.title,
    number: num,
    level: "B2",
    words: words,
    reading: {
      id: `r5${num}`,
      title: `Reading Lesson ${num}`,
      content: readingContent,
      translations: readingTranslations,
      comprehensionQuestions: comprehensionQuestions
    }
  };
  
  const code = `import { Lesson } from '../types';\n\nexport const b2Lesson${num}: Lesson = ${JSON.stringify(finalObj, null, 2)};\n`;
  fs.writeFileSync(filename, code);
}

processLesson('src/data/b2-lesson-53.ts', 53);
processLesson('src/data/b2-lesson-54.ts', 54);
processLesson('src/data/b2-lesson-55.ts', 55);
processLesson('src/data/b2-lesson-56.ts', 56);

