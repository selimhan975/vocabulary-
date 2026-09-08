import React, { useState } from 'react';
import { Lesson, CEFRLevel, LanguageCode } from '../../types';
import { getLessonsByLevel } from '../../data/lessons';
import { useAppContext } from '../../store/AppContext';
import { CheckCircle2, Settings, ArrowLeft } from 'lucide-react';

interface LessonListProps {
  level: CEFRLevel;
  onStartLesson: (lesson: Lesson) => void;
  onBack: () => void;
}

const LESSONS_PER_RANGE = 10;

export const LessonList: React.FC<LessonListProps> = ({ level, onStartLesson, onBack }) => {
  const { completedLessons, targetLang, setTargetLang } = useAppContext();
  const availableLessons = getLessonsByLevel(level);
  const [selectedRangeIndex, setSelectedRangeIndex] = useState(0);

  const totalLessons = availableLessons.length;
  const totalRanges = Math.ceil(totalLessons / LESSONS_PER_RANGE);

  const ranges = Array.from({ length: totalRanges }, (_, i) => {
    const start = i * LESSONS_PER_RANGE + 1;
    const end = Math.min((i + 1) * LESSONS_PER_RANGE, totalLessons);
    return { start, end, index: i };
  });

  const currentRangeLessons = availableLessons.slice(
    selectedRangeIndex * LESSONS_PER_RANGE,
    (selectedRangeIndex + 1) * LESSONS_PER_RANGE
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-500 hover:text-slate-800 font-medium transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Levels</span>
        </button>

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-1">{level} Lessons</h1>
            <p className="text-slate-500 text-base">Select a lesson to begin.</p>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-200">
            <Settings size={16} className="text-slate-400" />
            <select 
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value as LanguageCode)}
              className="bg-transparent border-none text-sm text-slate-700 font-medium focus:ring-0 cursor-pointer outline-none"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="tr">Turkish</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
        </header>

        <section>
          {availableLessons.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No lessons available for this level yet.
            </div>
          ) : (
            <>
              {totalRanges > 1 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {ranges.map((range) => (
                    <button
                      key={range.index}
                      onClick={() => setSelectedRangeIndex(range.index)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                        selectedRangeIndex === range.index 
                          ? 'bg-slate-800 text-white' 
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      {range.start}–{range.end}
                    </button>
                  ))}
                </div>
              )}

              <div 
                className="grid gap-3 sm:gap-4"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))' }}
              >
                {currentRangeLessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onStartLesson(lesson)}
                      className={`relative flex flex-col items-center justify-center p-3 aspect-square rounded-2xl border transition-all text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                        isCompleted 
                          ? 'bg-white border-green-200 hover:border-green-400 shadow-sm' 
                          : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md'
                      }`}
                      aria-label={`Lesson ${lesson.number}: ${lesson.title}${isCompleted ? ', Completed' : ''}`}
                    >
                      {isCompleted && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle2 className="text-green-500" size={18} />
                        </div>
                      )}
                      
                      <span className={`text-3xl font-black mb-2 ${isCompleted ? 'text-slate-800' : 'text-slate-800'}`}>
                        {String(lesson.number).padStart(2, '0')}
                      </span>
                      
                      <span className="text-xs font-semibold text-slate-600 line-clamp-2 leading-tight px-1">
                        {lesson.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

