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
  const [sessionMistakes, setSessionMistakes] = useState<Record<string, number>>({});
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
    <div className="min-h-screen bg-slate-50 py-2 sm:py-12 px-2 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 sm:mb-8 bg-white sm:bg-transparent p-2 sm:p-0 rounded-xl sm:rounded-none shadow-sm sm:shadow-none border border-slate-200 sm:border-none">
          <div className="flex-1 min-w-0 pr-2">
            <h1 className="text-xs sm:text-2xl font-extrabold tracking-tight text-slate-900 flex flex-wrap items-center gap-1 sm:gap-2">
              <span className="text-indigo-600 uppercase text-[10px] sm:text-sm font-bold tracking-wider">{lesson.level} · L{lesson.number}</span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="truncate font-semibold">{lesson.title}</span>
            </h1>
          </div>
          <button 
            onClick={onExit}
            className="flex-shrink-0 text-slate-500 hover:text-slate-900 font-medium px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-base rounded-md hover:bg-slate-100 sm:hover:bg-slate-200 transition-colors bg-slate-50 sm:bg-transparent border border-slate-200 sm:border-none"
          >
            Exit
          </button>
        </div>

        {/* Stage Content */}
        {stage === 'vocabulary' && (
          <VocabularyStage words={lesson.words} onComplete={handleVocabComplete} />
        )}
        {stage === 'quiz' && (
          <QuizEngine lessonId={lesson.id} words={lesson.words} onComplete={handleQuizComplete} />
        )}
        {stage === 'reading' && (
          <ReadingStage reading={lesson.reading} words={lesson.words} onComplete={handleReadingComplete} onBack={() => setStage('quiz')} />
        )}
        {stage === 'comprehension' && (
          <ComprehensionStage questions={lesson.reading.comprehensionQuestions} onComplete={handleComprehensionComplete} onBack={() => setStage('reading')} />
        )}
        {stage === 'completion' && (
          <CompletionStage lesson={lesson} score={score} onFinish={onExit} />
        )}
      </div>
    </div>
  );
};
