import { availableLessons } from './src/data/lessons.ts';
const hasJournalism = availableLessons.some(l => l.words.some(w => w.word === 'journalism'));
console.log('hasJournalism:', hasJournalism);
