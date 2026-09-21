import { translationEngine } from './src/engine/translation.ts';
async function test() {
  const langs = ['ru', 'es', 'zh', 'fr', 'de', 'tr', 'ja'];
  for (const lang of langs) {
    translationEngine.setLanguage(lang as any);
    const result = await translationEngine.translateWordOffline('journalism');
    console.log(`[${lang}]`, result);
  }
}
test();
