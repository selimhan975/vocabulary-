import React, { useState } from 'react';
import { Word } from '../../types';
import { TranslatableText } from '../shared/TranslatableText';
import { TranslationToggle } from '../shared/TranslationToggle';
import { ChevronLeft, ChevronRight, CheckCircle2, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SpeakerButton } from '../shared/SpeakerButton';
import { translationEngine } from '../../engine/translation';
import { useSwipeNavigation } from '../../hooks/useSwipeNavigation';

interface VocabularyStageProps {
  words: Word[];
  onComplete: () => void;
}

export const VocabularyStage: React.FC<VocabularyStageProps> = ({ words, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewedWords, setViewedWords] = useState<Set<number>>(new Set([0]));
  const [showMainTranslation, setShowMainTranslation] = useState(false);

  const currentWord = words[currentIndex];
  const allViewed = viewedWords.size === words.length;

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setShowMainTranslation(false);
  }, [currentIndex]);

  const navigateTo = (index: number) => {
    window.speechSynthesis.cancel();
    setCurrentIndex(index);
    setViewedWords(prev => new Set(prev).add(index));
  };

  const swipeRef = useSwipeNavigation<HTMLDivElement>({
    onSwipeLeft: () => {
      if (currentIndex < words.length - 1) navigateTo(currentIndex + 1);
    },
    onSwipeRight: () => {
      if (currentIndex > 0) navigateTo(currentIndex - 1);
    }
  });

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto min-h-[70vh]">
      {/* Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1 mb-2 sm:mb-8">
        {words.map((_, idx) => (
          <button
            key={idx}
            onClick={() => navigateTo(idx)}
            className={`w-[28px] h-[28px] sm:w-10 sm:h-10 aspect-square flex items-center justify-center rounded text-[10px] sm:text-sm font-bold cursor-pointer transition-all ${
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
      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col" ref={swipeRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="p-3 sm:p-8 md:p-12 flex-grow"
          >
            <div className="mb-4 md:mb-8 border-b border-slate-100 pb-4 md:pb-8 text-center md:text-left flex flex-col items-center md:items-start">
              
              {/* Reserved space for translation to appear ABOVE the word */}
              <div className="h-6 sm:h-8 flex items-end justify-center md:justify-start w-full mb-1">
                <AnimatePresence>
                  {showMainTranslation && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="text-slate-600 font-bold text-sm sm:text-base text-center md:text-left"
                    >
                      {translationEngine.getAuthoredTranslation(currentWord.translations)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-4 mb-2 w-full">
                <button
                  onClick={() => setShowMainTranslation(!showMainTranslation)}
                  aria-label={showMainTranslation ? "Hide translation" : "Show translation"}
                  title={showMainTranslation ? "Hide translation" : "Show translation"}
                  className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-100 hover:bg-indigo-100 shadow-sm flex-shrink-0 transition-colors"
                >
                  <Languages size={18} />
                </button>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 border-b-4 border-indigo-200 inline-block pb-1 min-w-0 truncate text-center md:text-left">{currentWord.word}</h2>
                <SpeakerButton text={currentWord.word} className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 w-full">
                <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 text-xs font-bold uppercase">
                  {currentWord.partOfSpeech}
                </span>
                <span className="text-slate-500 italic text-sm">{currentWord.pronunciation}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs font-bold uppercase hidden md:inline-flex">
                  {currentWord.level}
                </span>
              </div>
              
              {(currentWord.synonyms || currentWord.collocations) && (
                <div className="mt-3 md:mt-6 flex flex-wrap gap-3 md:gap-6 justify-center md:justify-start text-xs sm:text-sm w-full">
                  {currentWord.synonyms && currentWord.synonyms.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs block mb-0.5 sm:mb-1">Synonyms</span>
                      <span className="text-slate-700">{currentWord.synonyms.join(', ')}</span>
                    </div>
                  )}
                  {currentWord.collocations && currentWord.collocations.length > 0 && (
                    <div>
                      <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs block mb-0.5 sm:mb-1">Collocations</span>
                      <span className="text-slate-700">{currentWord.collocations.join(', ')}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4 md:space-y-10">
              {currentWord.meanings.map((meaning, mIndex) => (
                <div key={meaning.id} className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Definition {mIndex + 1}</h3>
                        <p className="text-base sm:text-xl text-slate-700 leading-relaxed">{meaning.definition}</p>
                        <TranslationToggle translations={meaning.translation} className="mt-2" hideTextOnMobile={false} />
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-4">
                        <h3 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Contextual Examples</h3>
                        {meaning.examples.map((example) => (
                          <div key={example.id} className="bg-slate-50 p-3 sm:p-5 rounded-xl border border-slate-100 group relative">
                            <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2 sm:mb-3">
                              <TranslatableText targetWord={currentWord.word} text={example.sentence} className="text-slate-800 text-[15px] sm:text-lg leading-snug flex-1" />
                              <SpeakerButton text={example.sentence} className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 -mt-0.5 sm:-mt-1" />
                            </div>
                            <TranslationToggle translations={example.translation} buttonClassName="text-indigo-500 text-xs font-bold mt-2 flex items-center gap-1 transition-opacity hover:text-indigo-700" labelShow="Translate sentence" hideTextOnMobile={false} />
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
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => navigateTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="px-4 sm:px-6 py-2.5 sm:py-3 flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:border-slate-300 disabled:opacity-50 disabled:pointer-events-none transition-colors text-sm sm:text-base"
          >
            <ChevronLeft size={18} />
            <span className="hidden sm:inline">Previous Word</span>
            <span className="sm:hidden">Previous</span>
          </button>
          
          {currentIndex === words.length - 1 && allViewed ? (
            <button
              onClick={onComplete}
              className="px-4 sm:px-8 py-2.5 sm:py-3 flex-1 sm:flex-none bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 flex items-center justify-center space-x-2 transition-all text-sm sm:text-base"
            >
              <span>Review Quiz</span>
              <CheckCircle2 size={18} />
            </button>
          ) : (
            <button
              onClick={() => navigateTo(currentIndex + 1)}
              disabled={currentIndex === words.length - 1}
              className="px-4 sm:px-8 py-2.5 sm:py-3 flex-1 sm:flex-none bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 flex items-center justify-center space-x-2 transition-all disabled:opacity-50 disabled:pointer-events-none text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Next Word</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
