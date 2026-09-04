const fs = require('fs');

const l1Examples = {
  'resilient': 'She proved to be highly resilient, quickly bouncing back after the injury.',
  'implement': 'The manager plans to implement a new dress code by next month.',
  'maintain': 'You must maintain a steady speed while driving on the highway.',
  'crucial': 'It is crucial to wear a seatbelt when driving.',
  'evolve': 'The software has continued to evolve since its first release.',
  'constant': 'He suffered from constant headaches due to stress.',
  'significant': 'There was a significant improvement in her test scores.',
  'obtain': 'She was finally able to obtain her drivers license.',
  'adapt': 'It took him a while to adapt to the colder climate.',
  'fulfill': 'He worked hard to fulfill his promise to his parents.'
};

const l2Examples = {
  'innovative': 'The company released an innovative product that changed the market.',
  'obsolete': 'Many old cell phones have become completely obsolete.',
  'virtual': 'They organized a virtual meeting because the team was working remotely.',
  'access': 'Only authorized personnel can access the secure building.',
  'automated': 'The factory uses an automated system to package the goods.',
  'data': 'The scientists collected new data during their experiment.',
  'device': 'This electronic device helps track your daily steps.',
  'network': 'We experienced a temporary failure in our computer network.',
  'process': 'Applying for a visa can be a very long process.',
  'secure': 'Make sure to secure the doors before leaving the house.'
};

let l1 = fs.readFileSync('src/data/b2-lesson-1.ts', 'utf-8');
for (const [word, sentence] of Object.entries(l1Examples)) {
  const regex2 = new RegExp(`(word:\\s*'${word}'[\\s\\S]*?id:\\s*'w\\d+-m1-e2',[\\s\\S]*?sentence:\\s*')[^']+('[\\s\\S]*?translation:\\s*\\{[^\\}]*\\})`);
  l1 = l1.replace(regex2, (match, p1, p2) => p1 + sentence + p2);
}
fs.writeFileSync('src/data/b2-lesson-1.ts', l1);

let l2 = fs.readFileSync('src/data/b2-lesson-2.ts', 'utf-8');
for (const [word, sentence] of Object.entries(l2Examples)) {
  const regex2 = new RegExp(`(word:\\s*'${word}'[\\s\\S]*?id:\\s*'w\\d+-m1-e2',[\\s\\S]*?sentence:\\s*')[^']+('[\\s\\S]*?translation:\\s*\\{[^\\}]*\\})`);
  l2 = l2.replace(regex2, (match, p1, p2) => p1 + sentence + p2);
}
fs.writeFileSync('src/data/b2-lesson-2.ts', l2);
