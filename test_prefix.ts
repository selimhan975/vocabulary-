import { translationEngine } from './src/engine/translation.ts';
translationEngine.setLanguage('ru');
translationEngine['initializeIndices']();
const candidates = translationEngine['candidateMap'].get('jo');
console.log(candidates.map(c => c.canonical));
