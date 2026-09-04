const fs = require('fs');

let content = fs.readFileSync('src/components/lesson/LessonFlow.tsx', 'utf-8');
content = content.replace(
  "  const [stage, setStage] = useState<LessonStage>('vocab');",
  "  const [stage, setStage] = useState<LessonStage>('vocab');\n\n  React.useEffect(() => {\n    window.scrollTo(0, 0);\n  }, [stage]);\n"
);

fs.writeFileSync('src/components/lesson/LessonFlow.tsx', content);
