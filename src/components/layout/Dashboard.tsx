import React from 'react';
import { Lesson, LanguageCode } from '../../types';
import { b2Lesson1 } from '../../data/b2-lesson-1';
import { useAppContext } from '../../store/AppContext';
import { PlayCircle, CheckCircle2, Settings } from 'lucide-react';

interface DashboardProps {
  onStartLesson: (lesson: Lesson) => void;
}

// Mock index of available lessons
const availableLessons = [b2Lesson1];

export const Dashboard: React.FC<DashboardProps> = ({ onStartLesson }) => {
  const { completedLessons, targetLang, setTargetLang } = useAppContext();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">My Journey</h1>
            <p className="text-slate-500 text-lg">Master English vocabulary in context.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
            <Settings size={18} className="text-slate-400" />
            <select 
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value as LanguageCode)}
              className="bg-transparent border-none text-slate-700 font-medium focus:ring-0 cursor-pointer outline-none"
            >
              <option value="es">Spanish</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
          </div>
        </header>

        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-slate-900">B2 Level</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {availableLessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              
              return (
                <div 
                  key={lesson.id} 
                  className={`relative p-6 rounded-2xl border transition-all ${
                    isCompleted 
                      ? 'bg-white border-green-200 shadow-sm' 
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md cursor-pointer group'
                  }`}
                  onClick={() => !isCompleted && onStartLesson(lesson)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Lesson {lesson.number}
                    </span>
                    {isCompleted && <CheckCircle2 className="text-green-500" size={24} />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{lesson.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{lesson.words.length} vocabulary words</p>
                  
                  {isCompleted ? (
                    <button 
                      onClick={(e) => { e.stopPropagation(); onStartLesson(lesson); }}
                      className="text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
                    >
                      Review again
                    </button>
                  ) : (
                    <div className="flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mr-2">Start Learning</span>
                      <PlayCircle size={20} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mock locked lesson to show scale */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                Lesson 2
              </span>
              <h3 className="text-xl font-bold text-slate-500 mb-2">Society & Culture</h3>
              <p className="text-slate-400 text-sm">Coming soon</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
