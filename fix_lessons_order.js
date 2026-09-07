import fs from 'fs';
let content = fs.readFileSync('src/data/lessons.ts', 'utf8');
content = content.replace('  b2Lesson16,\n  b2Lesson20,\n  b2Lesson19,\n  b2Lesson18,\n  b2Lesson17,', '  b2Lesson16,\n  b2Lesson17,\n  b2Lesson18,\n  b2Lesson19,\n  b2Lesson20,');
fs.writeFileSync('src/data/lessons.ts', content);
