import React, { useState, useEffect } from 'react';
import { ComprehensionQuestion } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

interface ComprehensionStageProps {
  questions: ComprehensionQuestion[];
  onComplete: (score: number, max: number) => void;
}

export const ComprehensionStage: React.FC<ComprehensionStageProps> = ({ questions, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const [shuffledOptions, setShuffledOptions] = useState<{text: string, originalIndex: number}[]>([]);

  useEffect(() => {
    const optionsWithIndex = questions[currentIndex].options.map((text, index) => ({ text, originalIndex: index }));
    setShuffledOptions(optionsWithIndex.sort(() => Math.random() - 0.5));
  }, [currentIndex, questions]);

  const question = questions[currentIndex];

  const handleSelect = (originalIndex: number) => {
    if (selectedIdx !== null) return;
    
    setSelectedIdx(originalIndex);
    
    const isCorrect = originalIndex === question.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(i => i + 1);
        setSelectedIdx(null);
      } else {
        onComplete(score + (isCorrect ? 1 : 0), questions.length);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto min-h-[70vh]">
      <div className="w-full bg-slate-100 h-2 rounded-full mb-12 overflow-hidden">
        <motion.div 
          className="bg-indigo-600 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentIndex / questions.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Reading Comprehension</h3>
            
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-10 text-center leading-relaxed">
              {question.question}
            </h2>

            <div className="w-full space-y-4">
              {shuffledOptions.map((opt, idx) => {
                let btnClass = "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
                if (selectedIdx !== null) {
                  if (opt.originalIndex === question.correctAnswerIndex) {
                    btnClass = "bg-green-50 border-green-500 text-green-800";
                  } else if (selectedIdx === opt.originalIndex) {
                    btnClass = "bg-red-50 border-red-500 text-red-800";
                  } else {
                    btnClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                  }
                }

                return (
                  <motion.button
                    key={opt.originalIndex}
                    whileTap={selectedIdx === null ? { scale: 0.98 } : {}}
                    onClick={() => handleSelect(opt.originalIndex)}
                    disabled={selectedIdx !== null}
                    className={`w-full p-5 text-left rounded-xl border-2 transition-all ${btnClass}`}
                  >
                    <span className="text-lg">{opt.text}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
