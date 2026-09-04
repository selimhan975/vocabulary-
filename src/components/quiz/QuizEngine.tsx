import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { QuizMultipleChoice } from './QuizMultipleChoice';
import { QuizContext } from './QuizContext';
import { QuizMatching } from './QuizMatching';
import { QuizActiveRecall } from './QuizActiveRecall';
import { QuizSynonym } from './QuizSynonym';
import { progressEngine } from '../../engine/progress';
import { motion, AnimatePresence } from 'motion/react';

interface QuizEngineProps {
  lessonId: string;
  words: Word[];
  onComplete: (score: number, max: number, sessionMistakes?: Record<string, number>) => void;
}

type StageType = 'mc' | 'match' | 'context' | 'active_recall' | 'synonym';

type QuizStage = 
  | { type: StageType, wordIndex: number }
  | { type: 'match', words: number[] };

export const QuizEngine: React.FC<QuizEngineProps> = ({ lessonId, words, onComplete }) => {
  const [stages, setStages] = useState<QuizStage[]>([]);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  
  const [mode, setMode] = useState<'core' | 'review_intro' | 'review'>('core');
  const [masteryData, setMasteryData] = useState<Record<string, import('../../types').WordMastery>>({});
  const [sessionMistakes, setSessionMistakes] = useState<Record<string, number>>({});

  useEffect(() => {
    // Generate CORE quiz sequence
    const shuffledIndices = Array.from({ length: words.length }, (_, i) => i).sort(() => Math.random() - 0.5);
    
    const newStages: QuizStage[] = [];
    
    // ROUND 1: Recognition (4 questions)
    for(let i=0; i<4 && i < shuffledIndices.length; i++) {
      newStages.push({ type: 'mc', wordIndex: shuffledIndices[i] });
    }
    
    // MATCHING (1 game, uses 4 words)
    newStages.push({ type: 'match', words: shuffledIndices.slice(0, 4) });
    
    // ROUND 2: Active Recall (3 questions)
    for(let i=4; i<7 && i < shuffledIndices.length; i++) {
      newStages.push({ type: 'active_recall', wordIndex: shuffledIndices[i] });
    }
    
    // ROUND 3: Context (3 questions)
    for(let i=7; i<10 && i < shuffledIndices.length; i++) {
      newStages.push({ type: 'context', wordIndex: shuffledIndices[i] });
    }
    
    // ROUND 4: Meaning/Usage (Synonyms) (2 questions, re-using indices 0 and 1)
    newStages.push({ type: 'synonym', wordIndex: shuffledIndices[0] });
    newStages.push({ type: 'synonym', wordIndex: shuffledIndices[1] });

    setStages(newStages);
    // Core max score
    setMaxScore(newStages.length + 3); // match is worth 4 (1 stage + 3 extra)
  }, [words]);

  const updateMastery = (wordId: string, isCorrect: boolean) => {
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
  };

  const handleMCContextAnswer = (isCorrect: boolean) => {
    const currentStage = stages[currentStageIndex];
    if (currentStage.type !== 'match') {
      const wordId = words[currentStage.wordIndex].id;
      updateMastery(wordId, isCorrect);
    }
    
    const newScore = isCorrect ? score + 1 : score;
    if (isCorrect) setScore(newScore);
    advanceStage(newScore);
  };

  const handleMatchComplete = (matchScore: number, matchMax: number) => {
    // For matching, we simplify mastery update (just boost score for now)
    const newScore = score + matchScore;
    setScore(newScore);
    advanceStage(newScore);
  };

  const advanceStage = (currentScore: number) => {
    if (currentStageIndex + 1 < stages.length) {
      setCurrentStageIndex(i => i + 1);
    } else {
      // End of current stages list
      checkMasteryAndProceed(currentScore);
    }
  };

  const checkMasteryAndProceed = (currentScore: number) => {
    const currentMastery = progressEngine.getLessonMastery(lessonId).words;
    
    // Find words that need review
    const needsReviewIndices = words
      .map((w, index) => ({ w, index }))
      .filter(({ w }) => {
        const m = currentMastery[w.id];
        return !m || m.state === 'NEEDS_REVIEW' || m.state === 'NEW' || m.state === 'PRACTICING';
      })
      .map(({ index }) => index);

    if (needsReviewIndices.length > 0 && mode !== 'review_intro') {
      // Setup review round
      setMode('review_intro');
      
      const reviewStages: QuizStage[] = [];
      needsReviewIndices.sort(() => Math.random() - 0.5).forEach(idx => {
        // Vary the type
        const types: StageType[] = ['mc', 'active_recall', 'context', 'synonym'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        reviewStages.push({ type: randomType, wordIndex: idx });
      });
      
      setStages(reviewStages);
      setCurrentStageIndex(0);
    } else {
      // Finished completely
      setTimeout(() => {
        onComplete(currentScore, maxScore, sessionMistakes);
      }, 500);
    }
  };

  if (stages.length === 0) return null;

  if (mode === 'review_intro') {
    return (
      <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh] items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Let's review your difficult words.</h2>
          <p className="text-slate-500 mb-8 text-lg">You missed a few words. Let's practice them again to make sure you've got them.</p>
          <button 
            onClick={() => setMode('review')}
            className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Start Focused Review
          </button>
        </motion.div>
      </div>
    );
  }

  const currentStage = stages[currentStageIndex];

  const getDistractors = (wordIndex: number) => {
    return words.filter((_, i) => i !== wordIndex).sort(() => Math.random() - 0.5);
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh]">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-12 overflow-hidden flex">
        <motion.div 
          className={mode === 'core' ? "bg-indigo-600 h-full" : "bg-amber-500 h-full"}
          initial={{ width: 0 }}
          animate={{ width: `${(currentStageIndex / stages.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden">
        {mode === 'review' && (
          <div className="absolute top-0 left-0 w-full bg-amber-50 text-amber-700 text-center py-2 text-sm font-bold uppercase tracking-wider">
            Focused Review
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
