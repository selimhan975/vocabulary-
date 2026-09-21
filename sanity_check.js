import { translationEngine } from './src/engine/translation.ts';
translationEngine.setLanguage('ru');
translationEngine.initializeIndices();
const exact = translationEngine.exactMap.get('journalism');
console.log('exact:', exact);
const candidates = translationEngine.candidateMap.get('jo');
console.log('candidates:', candidates);
