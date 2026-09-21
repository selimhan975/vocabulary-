import { translationEngine } from './src/engine/translation.ts';
translationEngine.initializeIndices();
const entry = translationEngine.exactMap.get('journalism');
console.log(entry.translations);
