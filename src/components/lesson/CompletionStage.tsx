import React from 'react';
import { LessonScore, Lesson } from '../../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CompletionStageProps {
  lesson: Lesson;
  score: LessonScore;
  onFinish: () => void;
}

export const CompletionStage: React.FC<CompletionStageProps> = ({ lesson, score, onFinish }) => {
  const vocabPercent = Math.round((score.vocabQuiz / score.vocabQuizMax) * 100) || 0;
  const compPercent = Math.round((score.comprehension / score.comprehensionMax) * 100) || 0;
  const totalPercent = Math.round(((score.vocabQuiz + score.comprehension) / (score.vocabQuizMax + score.comprehensionMax)) * 100) || 0;

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto min-h-[70vh] items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="bg-white rounded-3xl shadow-lg border border-slate-100 p-10 md:p-16 w-full text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <CheckCircle2 size={48} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Lesson Completed</h2>
        <p className="text-lg text-slate-500 mb-10">{lesson.level} - Lesson {lesson.number}: {lesson.title}</p>
        
        <div className="space-y-6 mb-12">
          <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-between">
            <span className="text-slate-700 font-medium">Vocabulary Quiz</span>
            <div className="flex items-center gap-4">
              <span className="text-slate-500">{score.vocabQuiz} / {score.vocabQuizMax}</span>
              <span className={`font-bold ${vocabPercent >= 80 ? 'text-green-600' : vocabPercent >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
                {vocabPercent}%
              </span>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-between">
            <span className="text-slate-700 font-medium">Reading Comprehension</span>
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
