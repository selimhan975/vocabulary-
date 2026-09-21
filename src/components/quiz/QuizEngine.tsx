import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { QuizMultipleChoice } from './QuizMultipleChoice';
import { QuizContext } from './QuizContext';
import { QuizActiveRecall } from './QuizActiveRecall';
import { QuizSynonym } from './QuizSynonym';
import { QuizListening } from './QuizListening';
import { progressEngine } from '../../engine/progress';
import { motion, AnimatePresence } from 'motion/react';

interface QuizEngineProps {
  lessonId: string;
  words: Word[];
  onComplete: (score: number, max: number, sessionMistakes?: Record<string, number>) => void;
}

type StageType = 'mc' | 'context' | 'active_recall' | 'synonym' | 'listening';

interface QuizStage {
  type: StageType;
  wordIndex: number;
  isRetry?: boolean;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ lessonId, words, onComplete }) => {
  const [stages, setStages] = useState<QuizStage[]>([]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [sessionMistakes, setSessionMistakes] = useState<Record<string, number>>({});

  useEffect(() => {
    // Generate initial quiz sequence: exactly 1 question per word (10 words total)
    const shuffledIndices = Array.from({ length: words.length }, (_, i) => i).sort(() => Math.random() - 0.5);
    const nonMatchTypes: StageType[] = ['mc', 'active_recall', 'context', 'synonym', 'listening'];
    
    const initialStages: QuizStage[] = shuffledIndices.map((idx, i) => ({
      type: nonMatchTypes[i % nonMatchTypes.length],
      wordIndex: idx,
      isRetry: false
    }));

    setStages(initialStages);
    setCurrentStageIndex(0);
    setScore(0);
  }, [words]);

  const updateMastery = (wordId: string, isCorrect: boolean, mistakesForWord: number) => {
    const current = progressEngine.getLessonMastery(lessonId).words[wordId];

    const updates: Partial<import('../../types').WordMastery> = {
      quizAttempts: (current?.quizAttempts || 0) + 1,
      correctAnswers: (current?.correctAnswers || 0) + (isCorrect ? 1 : 0),
      incorrectAnswers: (current?.incorrectAnswers || 0) + (isCorrect ? 0 : 1)
    };

    if (mistakesForWord >= 3) {
      updates.state = 'UNRESOLVED';
    } else if (mistakesForWord > 0) {
      updates.state = 'NEEDS_REVIEW';
    } else if (isCorrect) {
      updates.state = 'MASTERED';
    }

    progressEngine.updateWordMastery(lessonId, wordId, updates);
  };

  const handleMCContextAnswer = (isCorrect: boolean) => {
    const currentStage = stages[currentStageIndex];
    if (!currentStage) return;

    const wordId = words[currentStage.wordIndex].id;
    
    let currentMistakes = sessionMistakes[wordId] || 0;
    if (!isCorrect) {
      currentMistakes += 1;
      setSessionMistakes(prev => ({ ...prev, [wordId]: currentMistakes }));
    }

    updateMastery(wordId, isCorrect, currentMistakes);

    const newScore = isCorrect && !currentStage.isRetry ? score + 1 : score;
    if (isCorrect && !currentStage.isRetry) {
      setScore(newScore);
    }

    // Repetition logic:
    // A question that the user answers CORRECTLY must NEVER appear again during the current Quiz session.
    // A question that the user answers INCORRECTLY may appear ONE additional time later.
    // Do not create additional attempts beyond this one retry.
    let updatedStages = stages;
    if (!isCorrect && !currentStage.isRetry) {
      const nonMatchTypes: StageType[] = ['mc', 'active_recall', 'context', 'synonym', 'listening'];
      const altTypes = nonMatchTypes.filter(t => t !== currentStage.type);
      const retryType = altTypes[Math.floor(Math.random() * altTypes.length)] || 'mc';

      const retryStage: QuizStage = {
        type: retryType,
        wordIndex: currentStage.wordIndex,
        isRetry: true
      };

      updatedStages = [...stages, retryStage];
      setStages(updatedStages);
    }

    const nextIndex = currentStageIndex + 1;
    if (nextIndex < updatedStages.length) {
      setCurrentStageIndex(nextIndex);
    } else {
      setTimeout(() => {
        const finalMistakes = !isCorrect 
          ? { ...sessionMistakes, [wordId]: currentMistakes } 
          : sessionMistakes;
        onComplete(newScore, words.length, finalMistakes);
      }, 500);
    }
  };

  if (stages.length === 0) return null;

  const currentStage = stages[currentStageIndex];
  if (!currentStage) return null;

  const getDistractors = (wordIndex: number) => {
    return words.filter((_, i) => i !== wordIndex).sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh]">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-12 overflow-hidden flex">
        <motion.div 
          className={currentStage.isRetry ? "bg-amber-500 h-full" : "bg-indigo-600 h-full"}
          initial={{ width: 0 }}
          animate={{ width: `${((currentStageIndex + 1) / stages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {currentStage.isRetry && (
          <div className="absolute top-0 left-0 w-full bg-amber-50 text-amber-700 text-center py-2 text-sm font-bold uppercase tracking-wider">
            Review Practice
          </div>
        )}
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {currentStage.type === 'mc' && (
              <QuizMultipleChoice 
                word={words[currentStage.wordIndex]} 
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer} 
              />
            )}

            {currentStage.type === 'listening' && (
              <QuizListening
                word={words[currentStage.wordIndex]}
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer}
              />
            )}
            
            {currentStage.type === 'active_recall' && (
              <QuizActiveRecall 
                word={words[currentStage.wordIndex]} 
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer} 
              />
            )}

            {currentStage.type === 'synonym' && (
              <QuizSynonym 
                word={words[currentStage.wordIndex]} 
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer} 
              />
            )}
            
            {currentStage.type === 'context' && (
              <QuizContext 
                word={words[currentStage.wordIndex]} 
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
