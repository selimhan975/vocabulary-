const fs = require('fs');

const lessonFiles = [
  'src/data/b2-lesson-3.ts',
  'src/data/b2-lesson-4.ts',
  'src/data/b2-lesson-5.ts',
  'src/data/b2-lesson-6.ts',
  'src/data/b2-lesson-7.ts'
];

lessonFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the content: "..." block and replace double quotes with backticks
  content = content.replace(/content:\s*"([^"]+)"/, (match, p1) => {
    return 'content: `' + p1 + '`';
  });
  
  fs.writeFileSync(file, content);
});

