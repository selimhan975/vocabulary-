import React, { useState } from 'react';
import { Lesson, LessonScore } from '../../types';
import { VocabularyStage } from './VocabularyStage';
import { QuizEngine } from '../quiz/QuizEngine';
import { ReadingStage } from '../reading/ReadingStage';
import { ComprehensionStage } from '../reading/ComprehensionStage';
import { CompletionStage } from './CompletionStage';
import { progressEngine } from '../../engine/progress';
import { useAppContext } from '../../store/AppContext';

type Stage = 'vocabulary' | 'quiz' | 'reading' | 'comprehension' | 'completion';

interface LessonFlowProps {
  lesson: Lesson;
  onExit: () => void;
}

export const LessonFlow: React.FC<LessonFlowProps> = ({ lesson, onExit }) => {
  const [stage, setStage] = useState<Stage>('vocabulary');
  const [score, setScore] = useState<LessonScore>({ vocabQuiz: 0, vocabQuizMax: 0, comprehension: 0, comprehensionMax: 0 });
  const { refreshProgress } = useAppContext();

  const handleVocabComplete = () => setStage('quiz');
  
  const handleQuizComplete = (vocabScore: number, max: number) => {
    setScore(s => ({ ...s, vocabQuiz: vocabScore, vocabQuizMax: max }));
    setStage('reading');
  };

  const handleReadingComplete = () => setStage('comprehension');

  const handleComprehensionComplete = (compScore: number, max: number) => {
    const finalScore = { ...score, comprehension: compScore, comprehensionMax: max };
    setScore(finalScore);
    
    // Save progress
    progressEngine.saveLessonScore(lesson.id, finalScore);
    progressEngine.markLessonComplete(lesson.id);
    refreshProgress();

    setStage('completion');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-1 block">
              {lesson.level} Level
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Lesson {lesson.number}: {lesson.title}
            </h1>
          </div>
          <button 
            onClick={onExit}
            className="text-slate-500 hover:text-slate-900 font-medium px-4 py-2 rounded-md hover:bg-slate-200 transition-colors"
          >
            Exit
          </button>
        </div>

        {/* Stage Content */}
        {stage === 'vocabulary' && (
          <VocabularyStage words={lesson.words} onComplete={handleVocabComplete} />
        )}
        {stage === 'quiz' && (
          <QuizEngine words={lesson.words} onComplete={handleQuizComplete} />
        )}
        {stage === 'reading' && (
          <ReadingStage reading={lesson.reading} words={lesson.words} onComplete={handleReadingComplete} />
        )}
        {stage === 'comprehension' && (
          <ComprehensionStage questions={lesson.reading.comprehensionQuestions} onComplete={handleComprehensionComplete} />
        )}
        {stage === 'completion' && (
          <CompletionStage lesson={lesson} score={score} onFinish={onExit} />
        )}
      </div>
    </div>
  );
};
