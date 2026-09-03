import React, { useState } from 'react';
import { TranslationMap } from '../../types';
import { translationEngine } from '../../engine/translation';
import { Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TranslationToggleProps {
  translations: TranslationMap;
  className?: string;
  buttonClassName?: string;
}

export const TranslationToggle: React.FC<TranslationToggleProps> = ({ translations, className = '', buttonClassName = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translation = translationEngine.getAuthoredTranslation(translations);

  if (!translation) return null;

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName || "flex items-center space-x-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"}
      >
        <Languages size={16} />
        <span>{isOpen ? 'Hide translation' : 'Show translation'}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden w-full"
          >
            <div className="p-3 bg-slate-50 text-slate-700 text-sm rounded border border-slate-100">
              {translation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
