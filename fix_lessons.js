import fs from 'fs';

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

for (let i = 17; i <= 20; i++) {
    content = content.replace('// We will add more lessons here', `import { b2Lesson${i} } from "./b2-lesson-${i}";\n// We will add more lessons here`);
    content = content.replace('b2Lesson16,', `b2Lesson16,\n  b2Lesson${i},`);
}

fs.writeFileSync('src/data/lessons.ts', content);
