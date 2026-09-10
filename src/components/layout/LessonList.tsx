import React, { useState, useEffect, useRef } from 'react';
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
  
  const [selectedRangeIndex, setSelectedRangeIndex] = useState(() => {
    const saved = sessionStorage.getItem(`vocab_app_range_${level}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem(`vocab_app_range_${level}`, selectedRangeIndex.toString());
  }, [selectedRangeIndex, level]);

  const maxLessonNumber = availableLessons.reduce((max, lesson) => Math.max(max, lesson.number), 0);
  const totalRanges = Math.ceil(maxLessonNumber / LESSONS_PER_RANGE);

  // If the stored index is out of bounds (e.g., lessons were removed), reset to 0
  useEffect(() => {
    if (selectedRangeIndex >= totalRanges && totalRanges > 0) {
      setSelectedRangeIndex(0);
    }
  }, [totalRanges, selectedRangeIndex]);

  const ranges = Array.from({ length: totalRanges }, (_, i) => {
    const start = i * LESSONS_PER_RANGE + 1;
    const end = Math.min((i + 1) * LESSONS_PER_RANGE, maxLessonNumber);
    return { start, end, index: i };
  });

  const activeRange = ranges[selectedRangeIndex] || { start: 1, end: LESSONS_PER_RANGE };

  const currentRangeLessons = availableLessons
    .filter(lesson => lesson.number >= activeRange.start && lesson.number <= activeRange.end)
    .sort((a, b) => a.number - b.number);

  return (
    <div className="min-h-screen bg-slate-50 py-4 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-slate-500 hover:text-slate-800 font-medium transition-colors mb-3 text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Levels</span>
        </button>

        <header className="flex flex-row justify-between items-center mb-4 gap-2">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 leading-tight">{level} Lessons</h1>
            <p className="text-slate-500 text-xs sm:text-sm">Select a lesson to begin.</p>
          </div>
          
          <div className="flex items-center gap-1.5 bg-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-sm border border-slate-200 shrink-0">
            <Settings size={14} className="text-slate-400" />
            <select 
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value as LanguageCode)}
              className="bg-transparent border-none text-xs sm:text-sm text-slate-700 font-medium focus:ring-0 cursor-pointer outline-none p-0 pr-1"
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
                <div className="flex overflow-x-auto gap-2 mb-4 pb-1 no-scrollbar">
                  {ranges.map((range) => (
                    <button
                      key={range.index}
                      onClick={() => setSelectedRangeIndex(range.index)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-bold transition-colors ${
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

              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {currentRangeLessons.map((lesson) => {
                  const isCompleted = completedLessons.includes(lesson.id);
                  
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onStartLesson(lesson)}
                      className={`relative flex flex-col items-center justify-center p-2 aspect-square rounded-xl border transition-all text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                        isCompleted 
                          ? 'bg-white border-green-200 hover:border-green-400 shadow-sm' 
                          : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-md'
                      }`}
                      aria-label={`Lesson ${lesson.number}: ${lesson.title}${isCompleted ? ', Completed' : ''}`}
                    >
                      {isCompleted && (
                        <div className="absolute top-1.5 right-1.5">
                          <CheckCircle2 className="text-green-500" size={14} />
                        </div>
                      )}
                      
                      <span className={`text-2xl sm:text-3xl font-black mb-1 leading-none ${isCompleted ? 'text-slate-800' : 'text-slate-800'}`}>
                        {String(lesson.number).padStart(2, '0')}
                      </span>
                      
                      <span className="text-[10px] sm:text-xs font-semibold text-slate-600 line-clamp-2 leading-tight px-1">
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

