import { translationEngine } from './src/engine/translation.ts';

async function run() {
  const langs = ['es', 'ru', 'zh', 'fr', 'de', 'tr', 'ja'];
  for (const lang of langs) {
    translationEngine.setLanguage(lang);
    const r = await translationEngine.translateWordOffline('journalism');
    console.log(lang, r);
  }
}
run();
