const fs = require('fs');

let content = fs.readFileSync('src/data/b2-lesson-1.ts', 'utf8');

// Add all translations to words
const fullTrans = `translations: { 
        ru: 'выполнять', 
        zh: '履行 / 实现', 
        es: 'cumplir',
        fr: 'accomplir / réaliser',
        de: 'erfüllen',
        tr: 'yerine getirmek',
        ja: '果たす / 満たす'
      }`;
// We would replace all word translations in b2-lesson-1.
// Let's actually just rewrite b2-lesson-1 entirely to make sure it's perfect.
