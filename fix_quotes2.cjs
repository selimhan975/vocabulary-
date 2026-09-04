const fs = require('fs');

let l2 = fs.readFileSync('src/data/b2-lesson-2.ts', 'utf-8');
l2 = l2.replace(/Ils ont organisé une réunion virtuelle car l'équipe travaillait à distance./g, "Ils ont organisé une réunion virtuelle car l\\'équipe travaillait à distance.");
fs.writeFileSync('src/data/b2-lesson-2.ts', l2);
