import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { motion, AnimatePresence } from 'motion/react';

interface QuizSynonymProps {
  word: Word;
  distractors: Word[];
  onAnswer: (correct: boolean) => void;
}

export const QuizSynonym: React.FC<QuizSynonymProps> = ({ word, distractors, onAnswer }) => {
  const [options, setOptions] = useState<{ id: string, text: string, isCorrect: boolean }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const synonym = word.synonyms?.[0] || word.word; // Fallback to word if no synonym

    const correctOption = { id: word.id, text: synonym, isCorrect: true };
    const distractorOptions = distractors.slice(0, 3).map(d => {
      // Use distractor's synonym or word
      return { id: d.id, text: d.synonyms?.[0] || d.word, isCorrect: false };
    });

    const allOptions = [correctOption, ...distractorOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
    setSelectedId(null);
    setShowFeedback(false);
  }, [word, distractors]);

  const handleSelect = (id: string, isCorrect: boolean) => {
    if (selectedId) return;
    setSelectedId(id);
    
    if (!isCorrect) {
      setShowFeedback(true);
      setTimeout(() => {
        onAnswer(isCorrect);
      }, 3500);
    } else {
      setTimeout(() => {
        onAnswer(isCorrect);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Which word is closest in meaning to:</h3>
      
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">
        {word.word}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {options.map(opt => {
          let btnClass = "bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
          
          if (selectedId) {
            if (opt.isCorrect) {
              btnClass = "bg-green-50 border-green-500 text-green-800";
            } else if (selectedId === opt.id) {
              btnClass = "bg-red-50 border-red-500 text-red-800";
            } else {
              btnClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
            }
          }

          return (
            <motion.button
              key={opt.id}
              whileTap={!selectedId ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(opt.id, opt.isCorrect)}
              disabled={!!selectedId}
              className={`w-full p-6 text-center font-medium rounded-xl border-2 transition-all ${btnClass}`}
            >
              <span className="text-lg">{opt.text}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl w-full text-left"
          >
            <p className="text-red-800 font-bold mb-2">Incorrect.</p>
            <p className="text-slate-700 mb-1"><strong>Correct synonym:</strong> {word.synonyms?.[0] || word.word}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
