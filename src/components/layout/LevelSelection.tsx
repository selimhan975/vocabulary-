import React from 'react';
import { CEFRLevel, LevelConfig } from '../../types';
import { availableLevels } from '../../data/levels';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

interface LevelSelectionProps {
  onSelectLevel: (level: CEFRLevel) => void;
}

export const LevelSelection: React.FC<LevelSelectionProps> = ({ onSelectLevel }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Vocabulary
        </h1>
        <p className="text-xl text-slate-500">Choose your level</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {availableLevels.map((lvl) => (
          <motion.button
            key={lvl.id}
            whileHover={lvl.available ? { scale: 1.02 } : {}}
            whileTap={lvl.available ? { scale: 0.98 } : {}}
            onClick={() => lvl.available && onSelectLevel(lvl.id)}
            disabled={!lvl.available}
            className={`
              relative p-8 rounded-3xl border-2 text-left transition-all overflow-hidden
              ${lvl.available 
                ? 'bg-white border-slate-200 hover:border-indigo-600 shadow-sm hover:shadow-md cursor-pointer' 
                : 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed'}
            `}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-4xl font-bold mb-2 ${lvl.available ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {lvl.name}
                </h3>
                <p className="text-lg text-slate-600 font-medium">
                  {lvl.description}
                </p>
              </div>
              <div className={`p-4 rounded-full ${lvl.available ? 'bg-indigo-50 text-indigo-500' : 'bg-slate-200 text-slate-400'}`}>
                <BookOpen size={32} />
              </div>
            </div>
            
            {!lvl.available && (
              <div className="absolute bottom-0 left-0 right-0 bg-slate-200 text-slate-600 text-center py-2 text-sm font-bold uppercase tracking-wider">
                Coming soon
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
