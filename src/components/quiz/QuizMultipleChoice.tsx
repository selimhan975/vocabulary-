import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { translationEngine } from '../../engine/translation';
import { useAppContext } from '../../store/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { useQuizShortcuts } from '../../hooks/useQuizShortcuts';

interface QuizMultipleChoiceProps {
  word: Word;
  distractors: Word[];
  onAnswer: (correct: boolean) => void;
}

export const QuizMultipleChoice: React.FC<QuizMultipleChoiceProps> = ({ word, distractors, onAnswer }) => {
  const { targetLang } = useAppContext();
  const [options, setOptions] = useState<{ id: string, text: string, isCorrect: boolean }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useQuizShortcuts(options, (id, isCorrect) => handleSelect(id, isCorrect), !!selectedId);

  useEffect(() => {
    // Generate options: 1 correct meaning, 2 distractors
    const getMeaningText = (w: Word) => {
      const trans = translationEngine.getAuthoredTranslation(w.translations);
      if (trans) return trans;
      return w.meanings[0]?.definition || w.word; // Fallback
    };

    const correctOption = { id: word.id, text: getMeaningText(word), isCorrect: true };
    const distractorOptions = distractors.slice(0, 2).map(d => ({
      id: d.id, text: getMeaningText(d), isCorrect: false
    }));

    const allOptions = [correctOption, ...distractorOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
    setSelectedId(null);
    setShowFeedback(false);
  }, [word, distractors, targetLang]);

  const handleSelect = (id: string, isCorrect: boolean) => {
    if (selectedId) return; // Prevent multiple clicks
    setSelectedId(id);
    
    if (!isCorrect) {
      setShowFeedback(true);
      setTimeout(() => {
        onAnswer(isCorrect);
      }, 3500); // 3.5s feedback delay
    } else {
      setTimeout(() => {
        onAnswer(isCorrect);
      }, 1000); // 1s feedback delay
    }
  };

  const getMeaningText = (w: Word) => {
    const trans = translationEngine.getAuthoredTranslation(w.translations);
    if (trans) return trans;
    return w.meanings[0]?.definition || w.word;
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Select the meaning</h3>
      
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">
        {word.word}
      </div>

      <div className="w-full space-y-4">
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
              className={`w-full p-6 text-left rounded-xl border-2 transition-all ${btnClass}`}
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
            <p className="text-slate-700 mb-1"><strong>Correct answer:</strong> {getMeaningText(word)}</p>
            {word.meanings[0]?.examples[0] && (
              <p className="text-slate-600 italic text-sm">
                "{word.meanings[0].examples[0].sentence}"
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
