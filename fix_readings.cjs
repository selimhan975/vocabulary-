const fs = require('fs');

const lessons = [
  {
    file: 'src/data/b2-lesson-3.ts',
    id: 'b2-l3-reading'
  },
  {
    file: 'src/data/b2-lesson-4.ts',
    id: 'b2-l4-reading'
  },
  {
    file: 'src/data/b2-lesson-5.ts',
    id: 'b2-l5-reading'
  },
  {
    file: 'src/data/b2-lesson-6.ts',
    id: 'b2-l6-reading'
  },
  {
    file: 'src/data/b2-lesson-7.ts',
    id: 'b2-l7-reading'
  }
];

lessons.forEach(({file, id}) => {
  let content = fs.readFileSync(file, 'utf8');
  
  const defaultTranslations = `translations: {
      ru: '', zh: '', es: '', fr: '', de: '', tr: '', ja: ''
    },
    comprehensionQuestions: [
      {
        id: 'q1',
        question: 'What is the main idea of the text?',
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswerIndex: 0
      }
    ]`;

  content = content.replace(/reading:\s*{\s*title:\s*'([^']+)',\s*content:\s*`([\s\S]+?)`\s*}/, `reading: {
    id: '${id}',
    title: '$1',
    content: \`$2\`,
    ${defaultTranslations}
  }`);
  
  fs.writeFileSync(file, content);
});
