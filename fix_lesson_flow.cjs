const fs = require('fs');

let content = fs.readFileSync('src/components/lesson/LessonFlow.tsx', 'utf-8');

// add state for sessionMistakes
content = content.replace(
  "const [score, setScore] = useState<LessonScore>({",
  "const [sessionMistakes, setSessionMistakes] = useState<Record<string, number>>({});\n  const [score, setScore] = useState<LessonScore>({"
);

// update handleQuizComplete
content = content.replace(
  "const handleQuizComplete = (quizScore: number, max: number) => {",
  "const handleQuizComplete = (quizScore: number, max: number, mistakes?: Record<string, number>) => {\n    if (mistakes) setSessionMistakes(mistakes);"
);

// update CompletionStage
content = content.replace(
  "<CompletionStage lesson={lesson} score={score} onFinish={onFinish} />",
  "<CompletionStage lesson={lesson} score={score} onFinish={onFinish} sessionMistakes={sessionMistakes} />"
);

fs.writeFileSync('src/components/lesson/LessonFlow.tsx', content);
