import * as fs from 'fs';
import * as path from 'path';

const lessonsDir = path.join(process.cwd(), 'src', 'data');
const files = ['b2-lesson-37.ts', 'b2-lesson-38.ts', 'b2-lesson-39.ts', 'b2-lesson-40.ts'];

async function run() {
  const dictionaryPath = path.join(lessonsDir, 'dictionary.ts');
  const dictModule = await import(`file://${dictionaryPath}?t=${Date.now()}`);
  const globalDictionary = JSON.parse(JSON.stringify(dictModule.globalDictionary));

  let dictModified = false;
  const supportedLangs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];

  for (const file of files) {
    const filePath = path.join(lessonsDir, file);
    const lessonModule = await import(`file://${filePath}?t=${Date.now()}`);
    const lessonKey = Object.keys(lessonModule).find(k => k.startsWith('b2Lesson'));
    if (!lessonKey) continue;
    const lesson = lessonModule[lessonKey];
    
    if (lesson && lesson.words) {
      lesson.words.forEach((word: any) => {
        let target = word.word.toLowerCase();
        if (!globalDictionary[target]) {
          globalDictionary[target] = {};
          if (word.translations) {
            supportedLangs.forEach(lang => {
               if (word.translations[lang]) {
                  globalDictionary[target][lang] = word.translations[lang];
               }
            });
          }
          dictModified = true;
          console.log(`Added to dict: ${target}`);
        } else {
          supportedLangs.forEach(lang => {
             if (!globalDictionary[target][lang] && word.translations && word.translations[lang]) {
                globalDictionary[target][lang] = word.translations[lang];
                dictModified = true;
                console.log(`Patched lang ${lang} for ${target} in dict`);
             }
          });
        }
      });
    }
  }

  if (dictModified) {
    const dictOutStr = `import { TranslationMap } from '../types';\n\nexport const globalDictionary: Record<string, TranslationMap> = ${JSON.stringify(globalDictionary, null, 2)};\n`;
    fs.writeFileSync(dictionaryPath, dictOutStr);
    console.log(`Saved dictionary.ts`);
  }
}

run().catch(console.error);
