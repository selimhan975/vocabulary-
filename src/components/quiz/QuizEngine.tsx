import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { QuizMultipleChoice } from './QuizMultipleChoice';
import { QuizContext } from './QuizContext';
import { QuizMatching } from './QuizMatching';
import { motion, AnimatePresence } from 'motion/react';

interface QuizEngineProps {
  words: Word[];
  onComplete: (score: number, max: number) => void;
}

type QuizStage = 
  | { type: 'mc', wordIndex: number }
  | { type: 'match' }
  | { type: 'context', wordIndex: number };

export const QuizEngine: React.FC<QuizEngineProps> = ({ words, onComplete }) => {
  const [stages, setStages] = useState<QuizStage[]>([]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    // Generate quiz sequence
    const shuffledIndices = Array.from({ length: words.length }, (_, i) => i).sort(() => Math.random() - 0.5);
    
    const newStages: QuizStage[] = [];
    
    // 3 Multiple choice
    for(let i=0; i<3 && i < shuffledIndices.length; i++) {
      newStages.push({ type: 'mc', wordIndex: shuffledIndices[i] });
    }
    
    // 1 Matching (covers 4 words)
    newStages.push({ type: 'match' });

    // 3 Context
    for(let i=3; i<6 && i < shuffledIndices.length; i++) {
      newStages.push({ type: 'context', wordIndex: shuffledIndices[i] });
    }

    setStages(newStages);
    // Max score: 3 (mc) + 4 (match) + 3 (context) = 10
    setMaxScore(10); 
  }, [words]);

  const handleMCContextAnswer = (isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(newScore);
    advanceStage(newScore);
  };

  const handleMatchComplete = (matchScore: number, matchMax: number) => {
    const newScore = score + matchScore;
    setScore(newScore);
    advanceStage(newScore);
  };

  const advanceStage = (currentScore: number) => {
    if (currentStageIndex + 1 < stages.length) {
      setCurrentStageIndex(i => i + 1);
    } else {
      // Small delay before finishing to let animations settle
      setTimeout(() => {
        onComplete(currentScore, maxScore);
      }, 500);
    }
  };

  if (stages.length === 0) return null;

  const currentStage = stages[currentStageIndex];

  // Distractors logic
  const getDistractors = (wordIndex: number) => {
    return words.filter((_, i) => i !== wordIndex).sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh]">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="bg-indigo-600 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentStageIndex / stages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col items-center justify-center">
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
            
            {currentStage.type === 'context' && (
              <QuizContext 
                word={words[currentStage.wordIndex]} 
                distractors={getDistractors(currentStage.wordIndex)}
                onAnswer={handleMCContextAnswer} 
              />
            )}
            
            {currentStage.type === 'match' && (
              <QuizMatching 
                words={words} 
                onComplete={handleMatchComplete} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
