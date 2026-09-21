import { translationEngine } from './src/engine/translation.ts';
translationEngine['initializeIndices']();
const joBucket = translationEngine['candidateMap'].get('jo');
console.log(joBucket?.map(e => e.canonical));
