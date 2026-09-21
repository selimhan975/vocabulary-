import React from 'react';
import { useAppContext } from '../../store/AppContext';
import { Check } from 'lucide-react';

interface DailyGoalIndicatorProps {
  className?: string;
}

export const DailyGoalIndicator: React.FC<DailyGoalIndicatorProps> = ({ className = '' }) => {
  const { isDailyGoalCompleted } = useAppContext();

  return (
    <div
      id="daily-goal-indicator"
      className={`flex flex-col justify-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border bg-white shadow-sm shrink-0 select-none ${
        isDailyGoalCompleted
          ? 'border-emerald-200 bg-emerald-50/40 text-emerald-900'
          : 'border-slate-200 text-slate-700'
      } ${className}`}
      aria-label={`Daily Goal: ${isDailyGoalCompleted ? 'Complete' : 'Incomplete'}`}
    >
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
        Daily Goal
      </span>
      <div className="flex items-center gap-1.5 mt-0.5 text-xs sm:text-sm font-semibold leading-none">
        {isDailyGoalCompleted ? (
          <>
            <Check size={14} className="text-emerald-600 stroke-[2.5]" />
            <span className="text-emerald-700">Daily Goal Complete</span>
          </>
        ) : (
          <>
            <span className="text-slate-400 font-bold text-xs leading-none">○</span>
            <span className="text-slate-600">Today&apos;s lesson</span>
          </>
        )}
      </div>
    </div>
  );
};
