import React, { useState, useEffect } from 'react';
import { Word, Example } from '../../types';
import { motion } from 'motion/react';

interface QuizContextProps {
  word: Word;
  distractors: Word[];
  onAnswer: (correct: boolean) => void;
}

export const QuizContext: React.FC<QuizContextProps> = ({ word, distractors, onAnswer }) => {
  const [options, setOptions] = useState<{ id: string, text: string, isCorrect: boolean }[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sentenceParts, setSentenceParts] = useState<{ before: string, after: string }>({ before: '', after: '' });

  useEffect(() => {
    // Find an example sentence for this word
    let example: Example | null = null;
    for (const meaning of word.meanings) {
      if (meaning.examples.length > 0) {
        example = meaning.examples[0];
        break;
      }
    }

    if (!example) {
      // Fallback if no example (shouldn't happen with good data)
      setSentenceParts({ before: 'No example for ', after: '' });
    } else {
      // Try to find the word in the sentence (case insensitive, handling basic variations)
      const regex = new RegExp(`(\\b${word.word}\\b|\\b${word.word}s\\b|\\b${word.word}ed\\b|\\b${word.word}ing\\b)`, 'i');
      const match = example.sentence.match(regex);
      
      if (match && match.index !== undefined) {
        setSentenceParts({
          before: example.sentence.substring(0, match.index),
          after: example.sentence.substring(match.index + match[0].length)
        });
      } else {
        // Just remove a generic blank if strict match fails
        setSentenceParts({ before: example.sentence + ' (', after: ')' });
      }
    }

    const correctOption = { id: word.id, text: word.word, isCorrect: true };
    const distractorOptions = distractors.slice(0, 3).map(d => ({
      id: d.id, text: d.word, isCorrect: false
    }));

    const allOptions = [correctOption, ...distractorOptions].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
    setSelectedId(null);
  }, [word, distractors]);

  const handleSelect = (id: string, isCorrect: boolean) => {
    if (selectedId) return;
    setSelectedId(id);
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
      <h3 className="text-xl text-slate-500 mb-8 font-medium uppercase tracking-widest text-center">Complete the sentence</h3>
      
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800 mb-12 text-center leading-relaxed">
        {sentenceParts.before}
        <span className="inline-block mx-2 border-b-2 border-slate-400 min-w-[8rem] px-4 text-center text-indigo-600 font-bold">
          {selectedId ? options.find(o => o.id === selectedId)?.text : ''}
        </span>
        {sentenceParts.after}
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
              className={`w-full p-4 text-center font-medium rounded-xl border-2 transition-all ${btnClass}`}
            >
              <span className="text-lg">{opt.text}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
