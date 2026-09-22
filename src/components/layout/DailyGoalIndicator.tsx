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
      className={`flex flex-col justify-center px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border bg-white shadow-sm select-none min-w-0 ${
        isDailyGoalCompleted
          ? 'border-emerald-200 bg-emerald-50/40 text-emerald-900'
          : 'border-slate-200 text-slate-700'
      } ${className}`}
      aria-label={`Daily Goal: ${isDailyGoalCompleted ? 'Complete' : 'Incomplete'}`}
    >
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight truncate">
        Daily Goal
      </span>
      <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 text-xs sm:text-sm font-semibold leading-none truncate">
        {isDailyGoalCompleted ? (
          <>
            <Check size={13} className="text-emerald-600 stroke-[2.5] shrink-0" />
            <span className="text-emerald-700 truncate">
              <span className="sm:hidden">Done</span>
              <span className="hidden sm:inline">Daily Goal Complete</span>
            </span>
          </>
        ) : (
          <>
            <span className="text-slate-400 font-bold text-xs leading-none shrink-0">○</span>
            <span className="text-slate-600 truncate">
              <span className="sm:hidden">1 lesson</span>
              <span className="hidden sm:inline">Today&apos;s lesson</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
};
