const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(lessonsDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

// Sort files logically
files.sort((a, b) => {
  const numA = parseInt(a.replace('b2-lesson-', '').replace('.ts', ''), 10);
  const numB = parseInt(b.replace('b2-lesson-', '').replace('.ts', ''), 10);
  return numA - numB;
});

const supportedLangs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];
const langNames = {
  es: 'Spanish',
  ru: 'Russian',
  zh: 'Chinese',
  fr: 'French',
  de: 'German',
  tr: 'Turkish',
  ja: 'Japanese'
};

let totalWords = 0;
let completeWords = 0;
let incompleteWords = 0;
let missingWords = 0;

let totalExamples = 0;
let completeExamples = 0;
let incompleteExamples = 0;
let missingExamples = 0;

const lessonSummaries = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  
  let lessonNum = file.replace('b2-lesson-', '').replace('.ts', '');
  
  // Quick parsing using regex because evaluating the JS module might be tricky due to imports (although we could compile it).
  // Actually, we can use a small regex to find translations block for words and examples.
  // Wait, let's just require the compiled js? We can't directly require TS without ts-node or similar.
  // Let's use regex.
  
  // Extract words block
  const wordsMatches = content.matchAll(/id:\s*"w\d+-\d+"[\s\S]*?word:\s*"([^"]+)"[\s\S]*?translations:\s*{([^}]*)}[\s\S]*?meanings:\s*\[([\s\S]*?(?=\}\s*\]\s*\}|\}\s*\]\s*,\s*\{))/g);
  
  let lessonTotalWords = 0;
  let lessonCompleteWords = 0;
  let lessonTotalExamples = 0;
  let lessonCompleteExamples = 0;
  
  let wordMatches = [...content.matchAll(/word:\s*["']([^"']+)["'][\s\S]*?translations:\s*{([^}]*)}/g)];
  
  // Let's refine the regex or better yet, transpile and run
});
