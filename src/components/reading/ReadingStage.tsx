import React, { useState, useRef, useEffect } from 'react';
import { ReadingText, Word } from '../../types';
import { translationEngine } from '../../engine/translation';
import { TranslatableText } from '../shared/TranslatableText';
import { TranslationToggle } from '../shared/TranslationToggle';
import { CheckCircle2, X } from 'lucide-react';
import { motion } from 'motion/react';
import { SpeakerButton } from '../shared/SpeakerButton';

interface ReadingStageProps {
  reading: ReadingText;
  words: Word[]; // Target words to highlight
  onComplete: () => void;
}

export const ReadingStage: React.FC<ReadingStageProps> = ({ reading, words, onComplete }) => {
  // Highlight target words. 
  // We can do a simple CSS replace for target words, but TranslatableText already splits by words.
  // We can pass a custom class map or just let the user read. 
  // For highlighting, let's inject simple HTML or modify TranslatableText to accept highlighted words.
  // Actually, modifying TranslatableText is cleaner. Let's update it later if needed.
  // For now, let's just render the text. 
  // Wait, prompt says: "Highlight the target vocabulary words visually."
  // Let's create a specialized ReadingText component or just let TranslatableText handle it.

  const renderText = (content: string) => {
    // Split by paragraphs
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');
    
    return paragraphs.map((p, idx) => (
      <div key={idx} className="mb-6 last:mb-0 text-xl leading-relaxed text-slate-800">
        <HighlightedTranslatableText text={p} targetWords={words.map(w => w.word)} />
      </div>
    ));
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto min-h-[70vh]">
      <div className="flex-grow bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-8 border-b border-slate-100 pb-8">
            {reading.title}
          </h2>
          
          <div className="mb-10">
            {renderText(reading.content)}
          </div>
          
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
            <TranslationToggle translations={reading.translations} buttonClassName="font-medium text-base" />
          </div>

          <div className="flex justify-end pt-8 border-t border-slate-100">
            <button
              onClick={onComplete}
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm flex items-center space-x-2 transition-all"
            >
              <span>Continue to Comprehension</span>
              <CheckCircle2 size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const HighlightedTranslatableText: React.FC<{ text: string, targetWords: string[] }> = ({ text, targetWords }) => {
  const [activeWord, setActiveWord] = useState<{ word: string, index: number } | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const tokens = text.split(/(\b[\w'-]+\b)/g);
  const lowerTargets = targetWords.map(w => w.toLowerCase());

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveWord(null);
        setTranslation(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleWordClick = async (word: string, index: number) => {
    if (activeWord?.index === index) {
      setActiveWord(null);
      setTranslation(null);
      return;
    }
    setActiveWord({ word, index });
    setLoading(true);
    const trans = await translationEngine.translateWordOffline(word);
    setTranslation(trans);
    setLoading(false);
  };

  return (
    <div className="relative inline" ref={containerRef}>
      {tokens.map((token, i) => {
        if (/^[\w'-]+$/.test(token)) {
          const isActive = activeWord?.index === i;
          // Check if token matches any target word (basic stemming - just exact or +s/ed/ing for now)
          const lowerToken = token.toLowerCase();
          const isTarget = lowerTargets.some(t => 
            lowerToken === t || lowerToken === t + 's' || lowerToken === t + 'd' || lowerToken === t + 'ed' || lowerToken === t + 'ing'
          );

          return (
            <span key={i} className="relative inline-block">
              <span
                onClick={() => handleWordClick(token, i)}
                className={`cursor-pointer transition-colors duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white rounded px-0.5' 
                    : isTarget 
                      ? 'text-indigo-700 font-medium bg-indigo-50 hover:bg-indigo-100 rounded px-0.5' 
                      : 'hover:bg-slate-100 rounded px-0.5'
                }`}
              >
                {token}
              </span>
              {isActive && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-white text-slate-800 text-sm rounded-xl shadow-xl z-50 border border-slate-200 min-w-[12rem] flex flex-col cursor-default font-sans font-normal">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                    <span className="font-bold text-slate-900 text-base">{token}</span>
                    <div className="flex items-center gap-1">
                      <SpeakerButton text={token} className="w-7 h-7" />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveWord(null);
                          setTranslation(null);
                        }}
                        className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                  <span className="font-medium text-indigo-600 text-center text-base">
                    {loading ? '...' : (translation || 'No translation')}
                  </span>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-white" />
                </span>
              )}
            </span>
          );
        }
        return <span key={i}>{token}</span>;
      })}
    </div>
  );
};
