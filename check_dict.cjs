const fs = require('fs');
const dict = fs.readFileSync('src/data/dictionary.ts', 'utf8');

const words = ['interrogate', 'alibi', 'motive', 'confess', 'subconscious', 'comprehend', 'obsess', 'psychology', 'delusion', 'landslide', 'blizzard', 'tornado', 'avalanche', 'referendum', 'veto'];

for (const w of words) {
   if (dict.includes(`"${w}":`)) {
       console.log(`${w} exists in dictionary`);
   } else {
       console.log(`${w} MISSING in dictionary`);
   }
}
