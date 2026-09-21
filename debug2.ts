import { translationEngine } from './src/engine/translation.ts';
translationEngine.setLanguage('ru');
translationEngine['initializeIndices']();
console.log('Size of exactMap:', translationEngine['exactMap'].size);
console.log('Size of candidateMap:', translationEngine['candidateMap'].size);
console.log('journalism translation:', translationEngine['exactMap'].get('journalism'));
