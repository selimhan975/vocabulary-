import React, { useState, useEffect } from 'react';
import { Word } from '../../types';
import { translationEngine } from '../../engine/translation';
import { motion } from 'motion/react';

interface QuizMatchingProps {
  words: Word[];
  onComplete: (score: number, max: number) => void;
}

export const QuizMatching: React.FC<QuizMatchingProps> = ({ words, onComplete }) => {
  const [leftItems, setLeftItems] = useState<{ id: string, text: string, matched: boolean }[]>([]);
  const [rightItems, setRightItems] = useState<{ id: string, text: string, matched: boolean }[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [errors, setErrors] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    // Select 4 random words
    const selectedWords = [...words].sort(() => Math.random() - 0.5).slice(0, 4);
    
    const left = selectedWords.map(w => ({ id: w.id, text: w.word, matched: false }));
    const right = selectedWords.map(w => {
      const trans = translationEngine.getAuthoredTranslation(w.translations);
      return { id: w.id, text: trans || w.meanings[0].definition, matched: false };
    });

    setLeftItems(left.sort(() => Math.random() - 0.5));
    setRightItems(right.sort(() => Math.random() - 0.5));
  }, [words]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (selectedLeft === selectedRight) {
        // Match!
        setTimeout(() => {
          setLeftItems(prev => prev.map(i => i.id === selectedLeft ? { ...i, matched: true } : i));
          setRightItems(prev => prev.map(i => i.id === selectedRight ? { ...i, matched: true } : i));
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 500);
      } else {
        // Error
        setErrors(e => e + 1);
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  }, [selectedLeft, selectedRight]);

  useEffect(() => {
    if (!completed && leftItems.length > 0 && leftItems.every(i => i.matched)) {
      setCompleted(true);
      setTimeout(() => {
        // Calculate score (4 pairs = 4 max). Deduct for errors, min 0.
        const score = Math.max(0, 4 - errors);
        onComplete(score, 4);
      }, 1000);
    }
  }, [leftItems, errors, onComplete, completed]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Match the pairs</h3>
      
      <div className="grid grid-cols-2 gap-8 md:gap-16">
        {/* Left Column (Words) */}
        <div className="space-y-4">
          {leftItems.map(item => (
            <button
              key={item.id}
              onClick={() => !item.matched && setSelectedLeft(item.id)}
              disabled={item.matched}
              className={`w-full p-4 text-center rounded-xl border-2 transition-all font-medium text-lg ${
                item.matched ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-50'
                : selectedLeft === item.id && selectedRight && selectedLeft !== selectedRight ? 'bg-red-50 border-red-500 text-red-700'
                : selectedLeft === item.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>

        {/* Right Column (Meanings) */}
        <div className="space-y-4">
          {rightItems.map(item => (
            <button
              key={item.id}
              onClick={() => !item.matched && setSelectedRight(item.id)}
              disabled={item.matched}
              className={`w-full p-4 text-center rounded-xl border-2 transition-all text-md ${
                item.matched ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-50'
                : selectedRight === item.id && selectedLeft && selectedLeft !== selectedRight ? 'bg-red-50 border-red-500 text-red-700'
                : selectedRight === item.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
              }`}
            >
              {item.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
