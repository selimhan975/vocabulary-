import { translationEngine } from './src/engine/translation.ts';
import { cleanToken } from './src/utils/wordRecognition.ts';

async function test() {
  translationEngine.setLanguage('ru');
  console.log("cleanToken('journalism') =", cleanToken('journalism'));
  console.log("cleanToken('журналистика') =", cleanToken('журналистика'));
  
  const res1 = await translationEngine.translateWordOffline('journalism');
  console.log("translateWordOffline('journalism') =", res1);
  
  const res2 = await translationEngine.translateWordOffline('журналистика');
  console.log("translateWordOffline('журналистика') =", res2);
}
test();
