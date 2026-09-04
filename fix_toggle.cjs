const fs = require('fs');

let content = fs.readFileSync('src/components/shared/TranslationToggle.tsx', 'utf-8');

// Update props to include custom labels
content = content.replace(
  "buttonClassName?: string;\n}",
  "buttonClassName?: string;\n  labelShow?: string;\n  labelHide?: string;\n}"
);

// Destructure new props
content = content.replace(
  "buttonClassName = '' }) => {",
  "buttonClassName = '', labelShow = 'Show translation', labelHide = 'Hide translation' }) => {"
);

// Use new props
content = content.replace(
  "<span>{isOpen ? 'Hide translation' : 'Show translation'}</span>",
  "<span>{isOpen ? labelHide : labelShow}</span>"
);

fs.writeFileSync('src/components/shared/TranslationToggle.tsx', content);

// Now update VocabularyStage.tsx to pass the custom label for examples
let vocab = fs.readFileSync('src/components/lesson/VocabularyStage.tsx', 'utf-8');
vocab = vocab.replace(
  /<TranslationToggle translations=\{example.translation\} buttonClassName="text-indigo-500 text-xs font-bold mt-2 flex items-center gap-1 transition-opacity" \/>/g,
  '<TranslationToggle translations={example.translation} buttonClassName="text-indigo-500 text-xs font-bold mt-2 flex items-center gap-1 transition-opacity hover:text-indigo-700" labelShow="Translate sentence" />'
);
fs.writeFileSync('src/components/lesson/VocabularyStage.tsx', vocab);
