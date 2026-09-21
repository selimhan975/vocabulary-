import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { translationEngine } from '../engine/translation';
import { progressEngine } from '../engine/progress';
import { getDailyGoal } from '../engine/dailyGoal';
import { getStreakData } from '../engine/streak';
import { getWeeklyProgress } from '../engine/weeklyProgress';

interface AppContextType {
  targetLang: LanguageCode;
  setTargetLang: (lang: LanguageCode) => void;
  completedLessons: string[];
  refreshProgress: () => void;
  isDailyGoalCompleted: boolean;
  refreshDailyGoal: () => void;
  streakCount: number;
  refreshStreak: () => void;
  weeklyCompletedDays: number;
  refreshWeeklyProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [targetLang, setTargetLangState] = useState<LanguageCode>(translationEngine.getLanguage());
  const [completedLessons, setCompletedLessons] = useState<string[]>(progressEngine.getProgress().completedLessons);
  const [isDailyGoalCompleted, setIsDailyGoalCompleted] = useState<boolean>(() => getDailyGoal().completed);
  const [streakCount, setStreakCount] = useState<number>(() => getStreakData().currentStreak);
  const [weeklyCompletedDays, setWeeklyCompletedDays] = useState<number>(() => getWeeklyProgress().completedDays);

  const setTargetLang = (lang: LanguageCode) => {
    translationEngine.setLanguage(lang);
    setTargetLangState(lang);
  };

  const refreshDailyGoal = () => {
    setIsDailyGoalCompleted(getDailyGoal().completed);
  };

  const refreshStreak = () => {
    setStreakCount(getStreakData().currentStreak);
  };

  const refreshWeeklyProgress = () => {
    setWeeklyCompletedDays(getWeeklyProgress().completedDays);
  };

  const refreshProgress = () => {
    setCompletedLessons([...progressEngine.getProgress().completedLessons]);
    refreshDailyGoal();
    refreshStreak();
    refreshWeeklyProgress();
  };

  return (
    <AppContext.Provider
      value={{
        targetLang,
        setTargetLang,
        completedLessons,
        refreshProgress,
        isDailyGoalCompleted,
        refreshDailyGoal,
        streakCount,
        refreshStreak,
        weeklyCompletedDays,
        refreshWeeklyProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
