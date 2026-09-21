import React from 'react';
import { useAppContext } from '../../store/AppContext';

interface WeeklyProgressIndicatorProps {
  className?: string;
}

export const WeeklyProgressIndicator: React.FC<WeeklyProgressIndicatorProps> = ({ className = '' }) => {
  const { weeklyCompletedDays } = useAppContext();

  return (
    <div
      id="weekly-progress-indicator"
      className={`flex flex-col justify-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-indigo-200 bg-indigo-50/40 text-indigo-950 shadow-sm shrink-0 select-none ${className}`}
      aria-label={`This Week: ${weeklyCompletedDays} of 7 days completed`}
    >
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-indigo-400 leading-tight">
        This Week
      </span>
      <div className="flex items-center gap-1 mt-0.5 text-xs sm:text-sm font-semibold leading-none text-indigo-900">
        <span>{weeklyCompletedDays} / 7 days</span>
      </div>
    </div>
  );
};
