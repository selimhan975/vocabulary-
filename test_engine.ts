import { translationEngine } from './src/engine/translation.ts';

async function test() {
  translationEngine.setLanguage('ru');
  const result = await translationEngine.translateWordOffline('journalism');
  console.log('Result:', result);
}
test();
