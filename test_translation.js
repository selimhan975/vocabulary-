import { translationEngine } from './src/engine/translation.ts';

async function testTranslation(word, lang) {
  translationEngine.setLanguage(lang);
  const result = await translationEngine.translateWordOffline(word);
  console.log(`${lang} - ${word}:`, result);
}

async function runTests() {
  await testTranslation('journalism', 'ru');
  await testTranslation('journalism', 'es');
  
  await testTranslation('seminar', 'zh');
  await testTranslation('seminar', 'fr');
  
  await testTranslation('anxiety', 'de');
  await testTranslation('anxiety', 'tr');
  
  await testTranslation('campus', 'ja');
  await testTranslation('campus', 'ru');
  
  await testTranslation('harvest', 'es');
  await testTranslation('harvest', 'zh');
}

runTests();
