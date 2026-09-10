import * as fs from 'fs';
import * as path from 'path';

const lessonsDir = path.join(process.cwd(), 'src', 'data');
const files = fs.readdirSync(lessonsDir).filter(f => f.startsWith('b2-lesson-') && f.endsWith('.ts'));

async function run() {
  const words = new Set<string>();
  let total = 0;
  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const module = await import(`file://${filePath}`);
    const key = Object.keys(module).find(k => k.startsWith('b2Lesson'));
    if (key) {
      const lesson = module[key];
      if (lesson.words) {
        lesson.words.forEach((w: any) => {
          words.add(w.word.toLowerCase());
          total++;
        });
      }
    }
  }
  console.log(`Total words: ${total}`);
  console.log(`Unique words: ${words.size}`);
  fs.writeFileSync('b2_words.txt', Array.from(words).sort().join('\n'));
}

run().catch(console.error);
