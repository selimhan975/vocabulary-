import * as fs from 'fs';
import * as path from 'path';

const lessonsDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(lessonsDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

const supportedLangs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];
const missingData: any[] = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  let lessonNum = parseInt(file.replace('b2-lesson-', '').replace('.ts', ''), 10);
  
  if (![1, 29, 30, 31, 32].includes(lessonNum)) return;
  
  // We can't easily parse TS, so we'll use regex.
  // Actually we can require it since we have ts-node.
});
