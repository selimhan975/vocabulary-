const fs = require('fs');
let l1 = fs.readFileSync('src/data/b2-lesson-1.ts', 'utf-8');
l1 = l1.replace(/Elle s'est avérée très résiliente, se remettant rapidement après la blessure./g, "Elle s\\'est avérée très résiliente, se remettant rapidement après la blessure.");
l1 = l1.replace(/Le directeur prévoit de mettre en œuvre un nouveau code vestimentaire d'ici le mois prochain./g, "Le directeur prévoit de mettre en œuvre un nouveau code vestimentaire d\\'ici le mois prochain.");
l1 = l1.replace(/Vous devez maintenir une vitesse constante lorsque vous conduisez sur l'autoroute./g, "Vous devez maintenir une vitesse constante lorsque vous conduisez sur l\\'autoroute.");
l1 = l1.replace(/Le logiciel a continué d'évoluer depuis sa première version./g, "Le logiciel a continué d\\'évoluer depuis sa première version.");
l1 = l1.replace(/Il lui a fallu un certain temps pour s'adapter au climat plus froid./g, "Il lui a fallu un certain temps pour s\\'adapter au climat plus froid.");
fs.writeFileSync('src/data/b2-lesson-1.ts', l1);

let l2 = fs.readFileSync('src/data/b2-lesson-2.ts', 'utf-8');
l2 = l2.replace(/L'entreprise a lancé un produit innovant qui a changé le marché./g, "L\\'entreprise a lancé un produit innovant qui a changé le marché.");
l2 = l2.replace(/L'usine utilise un système automatisé pour emballer les marchandises./g, "L\\'usine utilise un système automatisé pour emballer les marchandises.");
fs.writeFileSync('src/data/b2-lesson-2.ts', l2);
