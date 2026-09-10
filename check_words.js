const fs = require('fs');

const existing = fs.readFileSync('b2_words.txt', 'utf8').split('\n').filter(Boolean).map(s => s.trim().toLowerCase());
const candidates = [
  'internship', 'mentor', 'collaborate', 'specialize', 'reliable', 'efficiency', 'applicant', 'rewarding', 'flexible', 'freelance',
  'lucrative', 'allowance', 'calculate', 'compensate', 'deposit', 'estimate', 'inherit', 'insurance', 'mortgage', 'withdraw',
  'certificate', 'expire', 'identity', 'license', 'mandatory', 'official', 'permit', 'register', 'authorize', 'signature',
  'accent', 'bilingual', 'dialect', 'fluency', 'literal', 'metaphor', 'slang', 'rumor', 'whisper', 'sarcasm'
];

for (const w of candidates) {
  if (existing.includes(w.toLowerCase())) {
    console.log('DUPLICATE:', w);
  }
}
console.log('Done.');
