import React, { useState } from 'react';
import { Word } from '../../types';
import { TranslatableText } from '../shared/TranslatableText';
import { TranslationToggle } from '../shared/TranslationToggle';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SpeakerButton } from '../shared/SpeakerButton';

interface VocabularyStageProps {
  words: Word[];
  onComplete: () => void;
}

export const VocabularyStage: React.FC<VocabularyStageProps> = ({ words, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewedWords, setViewedWords] = useState<Set<number>>(new Set([0]));

  const currentWord = words[currentIndex];
  const allViewed = viewedWords.size === words.length;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentIndex]);

  const navigateTo = (index: number) => {
    setCurrentIndex(index);
    setViewedWords(prev => new Set(prev).add(index));
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh]">
      {/* Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {words.map((_, idx) => (
          <button
            key={idx}
            onClick={() => navigateTo(idx)}
            className={`w-10 h-10 aspect-square flex items-center justify-center rounded text-sm font-bold cursor-pointer transition-all ${
              currentIndex === idx
                ? 'border-2 border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-100'
                : viewedWords.has(idx)
                ? 'border bg-green-100 border-green-200 text-green-700'
                : 'border border-slate-200 text-slate-400 bg-white hover:border-indigo-300'
            }`}
          >
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="p-8 md:p-12 flex-grow"
          >
            <div className="mb-8 border-b border-slate-100 pb-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">{currentWord.word}</h2>
                <SpeakerButton text={currentWord.word} className="w-10 h-10 flex-shrink-0" />
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs font-bold uppercase">
                  {currentWord.partOfSpeech}
                </span>
                <span className="text-slate-500 italic text-sm">{currentWord.pronunciation}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-bold uppercase">
                  {currentWord.level}
                </span>
              </div>
              <div className="mt-4 flex justify-center md:justify-start">
                <TranslationToggle 
                  translations={currentWord.translations} 
                  buttonClassName="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-100 hover:bg-indigo-100 shadow-sm"
                />
              </div>
              
              {(currentWord.synonyms || currentWord.collocations) && (
                <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-sm">
                  {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-widest text-xs block mb-1">Synonyms</span>
                      <span className="text-slate-700">{currentWord.synonyms.join(', ')}</span>
                    </div>
                  )}
                  {currentWord.collocations && currentWord.collocations.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-widest text-xs block mb-1">Collocations</span>
                      <span className="text-slate-700">{currentWord.collocations.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-10">
              {currentWord.meanings.map((meaning, mIndex) => (
                <div key={meaning.id} className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Definition {mIndex + 1}</h3>
                        <p className="text-xl text-slate-700 leading-relaxed">{meaning.definition}</p>
                        <TranslationToggle translations={meaning.translation} className="mt-2" />
                      </div>
                      
                      <div className="space-y-4 pt-4">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Contextual Examples</h3>
                        {meaning.examples.map((example) => (
                          <div key={example.id} className="bg-slate-50 p-5 rounded-xl border border-slate-100 group relative">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <TranslatableText text={example.sentence} className="text-slate-800 text-lg leading-snug flex-1" />
                              <SpeakerButton text={example.sentence} className="w-8 h-8 flex-shrink-0 -mt-1" />
                            </div>
                            <TranslationToggle translations={example.translation} buttonClassName="text-indigo-500 text-xs font-bold opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => navigateTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-6 py-3 flex items-center space-x-2 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:border-slate-300 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Previous Word</span>
          </button>
          
          {currentIndex === words.length - 1 && allViewed ? (
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 flex items-center space-x-2 transition-all"
            >
              <span>Start Review Quiz</span>
              <CheckCircle2 size={20} />
            </button>
          ) : (
            <button
              onClick={() => navigateTo(currentIndex + 1)}
              disabled={currentIndex === words.length - 1}
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 flex items-center space-x-2 transition-all disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="hidden sm:inline">Next Word</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
