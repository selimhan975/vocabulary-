import React from 'react';
import { LessonScore, Lesson } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { progressEngine } from '../../engine/progress';

interface CompletionStageProps {
  lesson: Lesson;
  score: LessonScore;
  onFinish: () => void;
}

export const CompletionStage: React.FC<CompletionStageProps> = ({ lesson, score, onFinish }) => {
  const compPercent = Math.round((score.comprehension / score.comprehensionMax) * 100) || 0;
  
  const lessonMastery = progressEngine.getLessonMastery(lesson.id);
  const masteredWords = Object.values(lessonMastery.words).filter(w => w.state === 'MASTERED');
  const needsReviewWords = Object.values(lessonMastery.words).filter(w => w.state !== 'MASTERED');

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto min-h-[70vh] items-center justify-center py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-12 w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <CheckCircle2 size={48} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Lesson Completed</h2>
        <p className="text-lg text-slate-500 mb-10">{lesson.level} - Lesson {lesson.number}: {lesson.title}</p>
        
        <div className="space-y-6 mb-12 text-left">
          <div className="bg-slate-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-700 font-bold text-lg">Vocabulary Mastery</span>
              <span className="font-bold text-indigo-600">{masteredWords.length} / 10 Mastered</span>
            </div>
            
            {masteredWords.length === 10 && (
              <p className="text-green-700 font-medium bg-green-100 p-3 rounded-lg text-center mb-4">
                Excellent! You mastered all 10 words.
              </p>
            )}

            {needsReviewWords.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm uppercase tracking-wider text-amber-700 font-bold mb-2">Still learning:</h4>
                <div className="flex flex-wrap gap-2">
                  {needsReviewWords.map(wm => {
                    const w = lesson.words.find(word => word.id === wm.wordId);
                    return <span key={wm.wordId} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">{w?.word}</span>;
                  })}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-between">
            <span className="text-slate-700 font-bold text-lg">Reading Comprehension</span>
            <div className="flex items-center gap-4">
              <span className="text-slate-500">{score.comprehension} / {score.comprehensionMax}</span>
              <span className={`font-bold ${compPercent >= 80 ? 'text-green-600' : compPercent >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                {compPercent}%
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={onFinish}
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-md flex items-center justify-center space-x-2 transition-all text-lg"
        >
          <span>Return to Dashboard</span>
          <ArrowRight size={20} />
        </button>
      </motion.div>
    </div>
  );
};
