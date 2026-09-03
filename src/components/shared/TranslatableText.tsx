import React, { useState, useRef, useEffect } from 'react';
import { translationEngine } from '../../engine/translation';
import { X } from 'lucide-react';
import { SpeakerButton } from './SpeakerButton';

interface TranslatableTextProps {
  text: string;
  className?: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({ text, className = '' }) => {
  const [activeWord, setActiveWord] = useState<{ word: string, index: number } | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Split text by word boundaries, keeping punctuation
  const tokens = text.split(/(\b[\w'-]+\b)/g);

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
    <div className={`relative ${className}`} ref={containerRef}>
      <div className="leading-relaxed">
        {tokens.map((token, i) => {
          // If token is a word
          if (/^[\w'-]+$/.test(token)) {
            const isActive = activeWord?.index === i;
            return (
              <span key={i} className="relative inline-block">
                <span
                  onClick={() => handleWordClick(token, i)}
                  className={`cursor-pointer transition-colors duration-200 ${isActive ? 'bg-indigo-100 text-indigo-900 rounded px-0.5' : 'hover:bg-slate-100 rounded px-0.5'}`}
                >
                  {token}
                </span>
                {isActive && (
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-3 bg-white text-slate-800 text-sm rounded-xl shadow-xl z-50 border border-slate-200 min-w-[12rem] flex flex-col cursor-default">
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
          // Punctuation and spaces
          return <span key={i}>{token}</span>;
        })}
      </div>
    </div>
  );
};
