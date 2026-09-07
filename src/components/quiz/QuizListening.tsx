import React, { useState, useEffect, useRef } from 'react';
import { Word } from '../../types';
import { translationEngine } from '../../engine/translation';
import { useAppContext } from '../../store/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { speak } from '../../engine/tts';
import { Volume2 } from 'lucide-react';

interface QuizListeningProps {
  word: Word;
  distractors: Word[];
  onAnswer: (correct: boolean) => void;
}

export const QuizListening: React.FC<QuizListeningProps> = ({ word, distractors, onAnswer }) => {
  const { targetLang } = useAppContext();
  const [options, setOptions] = useState<{ id: string, text: string, isCorrect: boolean }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const hasAttemptedAutoPlay = useRef(false);

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

  useEffect(() => {
    // When the word changes (i.e. new question), we want to try to play it once.
    // Also, we cancel any ongoing speech to avoid overlapping.
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    
    setIsPlaying(false);
    hasAttemptedAutoPlay.current = false;
    
    // Play automatically once
    if (!hasAttemptedAutoPlay.current) {
      hasAttemptedAutoPlay.current = true;
      handlePlay();
    }
    
    return () => {
      // Cleanup on unmount or question change
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [word.id]); // trigger only when the specific word changes

  const handlePlay = () => {
    if (isPlaying && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      speak(
        word.word,
        () => setIsPlaying(true),
        () => setIsPlaying(false)
      );
      
      // Failsafe timeout to prevent stuck state
      setTimeout(() => {
        setIsPlaying(false);
      }, 5000); // Reset state after 5s max regardless of speech end event, keeping Quiz unblocked
    }
  };

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
      <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Listen and select the meaning</h3>
      
      <div className="mb-12 flex justify-center w-full">
        <button
          onClick={(e) => { e.preventDefault(); handlePlay(); }}
          className={`inline-flex items-center justify-center p-8 rounded-full transition-all border-4 shadow-sm ${
            isPlaying 
              ? 'border-indigo-200 text-indigo-600 bg-indigo-50 animate-pulse' 
              : 'border-slate-100 text-slate-700 bg-white hover:border-indigo-200 hover:text-indigo-600'
          }`}
          title="Listen to pronunciation"
          aria-label="Listen to pronunciation"
        >
          <Volume2 size={64} className={isPlaying ? "opacity-100" : "opacity-80"} />
        </button>
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
            <p className="text-slate-700 mb-1"><strong>Correct answer:</strong> {word.word} = {getMeaningText(word)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
