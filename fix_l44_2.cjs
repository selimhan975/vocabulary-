const fs = require('fs');
let content = fs.readFileSync('src/data/b2-lesson-44.ts', 'utf8');

// Replace the leftover legislation part
content = content.replace(/    \],\n      collocations: \["pass legislation"[\s\S]*?    \},\n    \{\n      id: "w434"/, '    },\n    {\n      id: "w434"');

fs.writeFileSync('src/data/b2-lesson-44.ts', content, 'utf8');
