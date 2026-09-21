import { translationEngine } from './src/engine/translation.ts';
import { b2Lesson46 } from './src/data/b2-lesson-46.ts';

const word = b2Lesson46.words.find(w => w.word === 'journalism');

const langs = ['ru', 'es', 'zh', 'fr', 'de', 'tr', 'ja'];
for (const lang of langs) {
  translationEngine.setLanguage(lang as any);
  console.log(`${lang}: ${translationEngine.getAuthoredTranslation(word.translations)}`);
}
