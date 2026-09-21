import { translationEngine } from './src/engine/translation.ts';
translationEngine.setLanguage('ru');
async function run() {
  console.log(await translationEngine.translateWordOffline('investigative'));
}
run();
