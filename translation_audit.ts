import { translationEngine } from './src/engine/translation.ts';

async function testOffline(word, lang) {
  translationEngine.setLanguage(lang);
  const result = await translationEngine.translateWordOffline(word);
  console.log(`[${lang}] ${word} -> ${result.translation} (canonical: ${result.canonical})`);
}

async function runTests() {
  await testOffline('journalism', 'ru');
  await testOffline('journalism', 'es');
  await testOffline('seminar', 'zh');
  await testOffline('seminar', 'fr');
  await testOffline('anxiety', 'de');
  await testOffline('anxiety', 'tr');
  await testOffline('campus', 'ja');
  await testOffline('campus', 'ru');
  await testOffline('harvest', 'es');
  await testOffline('harvest', 'zh');
  
  // inflections
  await testOffline('harvests', 'es');
  await testOffline('investigated', 'ru');
  await testOffline('went off', 'es');
  await testOffline('bigger', 'es');
  await testOffline('unknownword', 'es');
}

runTests();
