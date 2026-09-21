import { translationEngine } from './src/engine/translation.ts';

async function run() {
  translationEngine.setLanguage('ru');
  await translationEngine.translateWordOffline('test');
  
  const exactMap = translationEngine.exactMap;
  
  if (exactMap.has('journalism')) {
    console.log("exactMap has journalism:", exactMap.get('journalism'));
  } else {
    console.log("exactMap DOES NOT have journalism!");
  }
}
run();
