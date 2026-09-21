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
      className={`flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-orange-200 bg-orange-50/50 text-orange-950 shadow-sm shrink-0 select-none ${className}`}
      aria-label={`${streakCount} day streak`}
    >
      <span className="text-sm leading-none" role="img" aria-label="Streak fire">
        🔥
      </span>
      <span className="text-xs sm:text-sm font-semibold text-orange-900 leading-tight">
        {streakCount} {streakCount === 1 ? 'day' : 'day'} streak
      </span>
    </div>
  );
};
