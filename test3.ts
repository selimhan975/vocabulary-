import { translationEngine } from './src/engine/translation.ts';
async function test() {
  translationEngine.setLanguage('ru');
  translationEngine['initializeIndices']();
  console.log("exactMap entry:", translationEngine['exactMap'].get('journalism'));
  console.log("candidateMap entry:", translationEngine['candidateMap'].get('jo'));
}
test();
