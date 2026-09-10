const fs = require('fs');

const files = [
  'src/data/b2-lesson-49.ts',
  'src/data/b2-lesson-50.ts',
  'src/data/b2-lesson-51.ts',
  'src/data/b2-lesson-52.ts'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  // find the "text": "..." part and replace literal newlines with \n if they are inside the string
  // actually, let's just re-generate the reading text properly.
  // The simplest way is to replace \n\n in the original string with "\\n\\n"
}
