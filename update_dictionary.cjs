const fs = require('fs');

const lessonFiles = [
  'src/data/b2-lesson-3.ts',
  'src/data/b2-lesson-4.ts',
  'src/data/b2-lesson-5.ts',
  'src/data/b2-lesson-6.ts',
  'src/data/b2-lesson-7.ts'
];

let dictionaryAdds = '';

lessonFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Very basic regex to find words and their translations in our specific format
  const wordMatches = [...content.matchAll(/word:\s*'([^']+)'[\s\S]*?translations:\s*({[^}]+})/g)];
  
  wordMatches.forEach(match => {
    const word = match[1];
    const transStr = match[2];
    dictionaryAdds += `  '${word}': ${transStr},\n`;
  });
});

let dictContent = fs.readFileSync('src/data/dictionary.ts', 'utf8');

// Replace the closing bracket of the dictionary with the new additions + closing bracket
if (dictContent.endsWith(';')) {
    dictContent = dictContent.slice(0, -1);
}
if (dictContent.endsWith('}')) {
    dictContent = dictContent.slice(0, -1) + dictionaryAdds + '};\n';
} else if (dictContent.endsWith('};\n')) {
    dictContent = dictContent.slice(0, -3) + dictionaryAdds + '};\n';
} else {
    // just in case it's all on one line
    dictContent = dictContent.replace(/,};?$/, ',');
    dictContent += dictionaryAdds + '};\n';
}

// Since it's currently on one line, let's just properly format the injection
dictContent = fs.readFileSync('src/data/dictionary.ts', 'utf8');
dictContent = dictContent.replace(/};\s*$/, dictionaryAdds + '};\n');

fs.writeFileSync('src/data/dictionary.ts', dictContent);
