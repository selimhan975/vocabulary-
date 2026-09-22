import React from 'react';
import { useAppContext } from '../../store/AppContext';

interface StreakIndicatorProps {
  className?: string;
}

export const StreakIndicator: React.FC<StreakIndicatorProps> = ({ className = '' }) => {
  const { streakCount } = useAppContext();

  return (
    <div
      id="streak-indicator"
      className={`flex flex-col sm:flex-row justify-center sm:items-center px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-orange-200 bg-orange-50/50 text-orange-950 shadow-sm select-none min-w-0 ${className}`}
      aria-label={`${streakCount} day streak`}
    >
      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-orange-400 leading-tight sm:hidden truncate">
        Streak
      </span>
      <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-0 leading-none truncate">
        <span className="text-xs sm:text-sm leading-none shrink-0" role="img" aria-label="Streak fire">
          🔥
        </span>
        <span className="text-xs sm:text-sm font-semibold text-orange-900 leading-none whitespace-nowrap truncate">
          <span className="sm:hidden">{streakCount} {streakCount === 1 ? 'day' : 'days'}</span>
          <span className="hidden sm:inline">{streakCount} {streakCount === 1 ? 'day' : 'day'} streak</span>
        </span>
      </div>
    </div>
  );
};
