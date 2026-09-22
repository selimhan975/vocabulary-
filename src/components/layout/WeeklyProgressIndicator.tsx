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
      className={`flex flex-col justify-center px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-indigo-200 bg-indigo-50/40 text-indigo-950 shadow-sm select-none min-w-0 ${className}`}
      aria-label={`This Week: ${weeklyCompletedDays} of 7 days completed`}
    >
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-indigo-500 sm:text-indigo-400 leading-tight truncate">
        This Week
      </span>
      <div className="flex items-center gap-1 mt-0.5 text-xs sm:text-sm font-semibold leading-none text-indigo-900 truncate">
        <span className="whitespace-nowrap">{weeklyCompletedDays} / 7 days</span>
      </div>
    </div>
  );
};
