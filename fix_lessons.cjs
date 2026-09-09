const fs = require('fs');

const lessons = [29, 30, 31, 32];

function extractLangs(str) {
  // e.g. "покупка / покупать (ru), 购买 (zh), compra / comprar (es)..."
  const parts = str.split(', ');
  const map = {};
  parts.forEach(p => {
    const match = p.match(/(.+?)\s*\((\w{2})\)/);
    if(match) {
      map[match[2]] = match[1].trim();
    }
  });
  return map;
}

function fixLessonFile(num) {
  const filePath = `src/data/b2-lesson-${num}.ts`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the object part
  let objStr = content.replace(/^import.*?export const.*?=\s*/s, '').replace(/;\s*$/, '');
  
  let lessonObj;
  try {
    lessonObj = eval('(' + objStr + ')');
  } catch(e) {
    console.error("Error evaluating lesson " + num, e);
    return;
  }
  
  lessonObj.number = num;
  lessonObj.id = `b2-l${num}`;
  
  lessonObj.words = lessonObj.words.map((w, wIndex) => {
    const wId = `w${num}-${wIndex+1}`;
    
    let meanings = [];
    if (w.definition) {
      const examples = w.examples.map((ex, exIndex) => {
        return {
          id: `${wId}-m1-e${exIndex+1}`,
          sentence: ex.sentence,
          translation: extractLangs(ex.translation)
        };
      });
      meanings.push({
        id: `${wId}-m1`,
        definition: w.definition,
        translation: {},
        examples: examples
      });
    }

    return {
      id: wId,
      word: w.word,
      pronunciation: w.pronunciation,
      partOfSpeech: w.partOfSpeech,
      level: "B2",
      synonyms: [],
      collocations: [],
      translations: extractLangs(w.translation),
      meanings: meanings
    };
  });
  
  lessonObj.reading.id = `r${num}`;
  lessonObj.reading.content = lessonObj.reading.text;
  delete lessonObj.reading.text;
  
  lessonObj.reading.questions = lessonObj.reading.questions.map((q, qIndex) => {
    return {
      id: `r${num}-q${qIndex+1}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer
    };
  });
  
  const newContent = `import { Lesson } from "../types";\n\nexport const b2Lesson${num}: Lesson = ` + JSON.stringify(lessonObj, null, 2) + `;\n`;
  
  fs.writeFileSync(filePath, newContent);
}

lessons.forEach(fixLessonFile);
