import { translationEngine } from './src/engine/translation.ts';

async function run() {
  translationEngine.setLanguage('ru');
  const r = await translationEngine.translateWordOffline('journalism');
  console.log('Result:', r);
}
run();
