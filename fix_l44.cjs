const fs = require('fs');
let content = fs.readFileSync('src/data/b2-lesson-44.ts', 'utf8');

// The veto object ends at line 204.
// Let's replace the broken part from `],` to `    },` before `w437`
content = content.replace(/    \],\n      collocations: \["political campaign"[\s\S]*?    \},\n    \{\n      id: "w437"/, '    },\n    {\n      id: "w437"');

fs.writeFileSync('src/data/b2-lesson-44.ts', content, 'utf8');
