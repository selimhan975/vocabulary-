const fs = require('fs');

let content = fs.readFileSync('src/components/quiz/QuizEngine.tsx', 'utf-8');

// Add sessionMistakes state
content = content.replace(
  "const [masteryData, setMasteryData] = useState<Record<string, import('../../types').WordMastery>>({});",
  "const [masteryData, setMasteryData] = useState<Record<string, import('../../types').WordMastery>>({});\n  const [sessionMistakes, setSessionMistakes] = useState<Record<string, number>>({});"
);

// Update updateMastery function
const updateMasteryOld = `  const updateMastery = (wordId: string, isCorrect: boolean) => {
    const current = progressEngine.getLessonMastery(lessonId).words[wordId];
    progressEngine.updateWordMastery(lessonId, wordId, {
      quizAttempts: (current?.quizAttempts || 0) + 1,
      correctAnswers: (current?.correctAnswers || 0) + (isCorrect ? 1 : 0),
      incorrectAnswers: (current?.incorrectAnswers || 0) + (isCorrect ? 0 : 1)
    });
    setMasteryData(progressEngine.getLessonMastery(lessonId).words);
  };`;

const updateMasteryNew = `  const updateMastery = (wordId: string, isCorrect: boolean) => {
    const current = progressEngine.getLessonMastery(lessonId).words[wordId];
    
    let currentMistakes = sessionMistakes[wordId] || 0;
    if (!isCorrect) {
      currentMistakes += 1;
      setSessionMistakes(prev => ({ ...prev, [wordId]: currentMistakes }));
    }

    const updates: Partial<import('../../types').WordMastery> = {
      quizAttempts: (current?.quizAttempts || 0) + 1,
      correctAnswers: (current?.correctAnswers || 0) + (isCorrect ? 1 : 0),
      incorrectAnswers: (current?.incorrectAnswers || 0) + (isCorrect ? 0 : 1)
    };

    if (currentMistakes >= 3) {
      updates.state = 'UNRESOLVED';
    } else if (isCorrect) {
      // If they get it correct, we want to allow it to become MASTERED if conditions met
      // The progressEngine will evaluate this naturally if we don't force it, 
      // but let's let progress engine do it by not overriding state unless it's UNRESOLVED.
    }

    progressEngine.updateWordMastery(lessonId, wordId, updates);
    setMasteryData(progressEngine.getLessonMastery(lessonId).words);
  };`;

content = content.replace(updateMasteryOld, updateMasteryNew);

fs.writeFileSync('src/components/quiz/QuizEngine.tsx', content);
