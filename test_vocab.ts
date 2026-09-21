import { translationEngine } from './src/engine/translation.ts';
import { b2Lesson46 } from './src/data/b2-lesson-46.ts';

async function test() {
  translationEngine.setLanguage('ru');
  const wordObj = b2Lesson46.words.find(w => w.word === 'journalism');
  console.log("getAuthoredTranslation:", translationEngine.getAuthoredTranslation(wordObj.translations));
  
  const offlineResult = await translationEngine.translateWordOffline('journalism');
  console.log("translateWordOffline:", offlineResult);
}
test();
