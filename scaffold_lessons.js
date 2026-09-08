const fs = require('fs');

const lessons = [
  { num: 21, title: 'Architecture & Design' },
  { num: 22, title: 'Entertainment & Performance' },
  { num: 23, title: 'Crime & Investigation' },
  { num: 24, title: 'Space Exploration' }
];

lessons.forEach(l => {
  const content = `import { Lesson } from "../types";

export const b2Lesson${l.num}: Lesson = {
  id: "b2-l${l.num}",
  level: "B2",
  number: ${l.num},
  title: "${l.title}",
  words: [],
  reading: {
    id: "r${l.num}",
    title: "Reading Title",
    content: "Reading content...",
    translations: {
      ru: "",
      zh: "",
      es: "",
      fr: "",
      de: "",
      tr: "",
      ja: ""
    },
    comprehensionQuestions: []
  }
};
`;
  fs.writeFileSync(`src/data/b2-lesson-${l.num}.ts`, content);
});

console.log('Scaffold created');
