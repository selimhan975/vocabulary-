import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { translationEngine } from '../../engine/translation';
import { useAppContext } from '../../store/AppContext';
import { motion, AnimatePresence } from 'motion/react';

interface QuizActiveRecallProps {
  word: Word;
  distractors: Word[];
  onAnswer: (correct: boolean) => void;
}

export const QuizActiveRecall: React.FC<QuizActiveRecallProps> = ({ word, distractors, onAnswer }) => {
  const { targetLang } = useAppContext();
  const [options, setOptions] = useState<{ id: string, text: string, isCorrect: boolean }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [meaning, setMeaning] = useState('');

  useEffect(() => {
    const getMeaningText = (w: Word) => {
      const trans = translationEngine.getAuthoredTranslation(w.translations);
      if (trans) return trans;
      return w.meanings[0]?.definition || w.word;
    };

    setMeaning(getMeaningText(word));

    const correctOption = { id: word.id, text: word.word, isCorrect: true };
    const distractorOptions = distractors.slice(0, 3).map(d => ({
      id: d.id, text: d.word, isCorrect: false
    }));

    const allOptions = [correctOption, ...distractorOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
    setSelectedId(null);
    setShowFeedback(false);
  }, [word, distractors, targetLang]);

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
      <h3 className="text-xl text-slate-500 mb-4 font-medium uppercase tracking-widest text-center">Which word means:</h3>
      
      <div className="text-2xl md:text-3xl font-bold tracking-tight text-slate-700 mb-12 text-center italic">
        "{meaning}"
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
              className={`w-full p-6 text-center rounded-xl border-2 transition-all font-bold text-xl ${btnClass}`}
            >
              {opt.text}
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
            <p className="text-slate-700 mb-1"><strong>Correct answer:</strong> {word.word}</p>
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
