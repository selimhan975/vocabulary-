import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '../types';
import { translationEngine } from '../engine/translation';
import { progressEngine } from '../engine/progress';

interface AppContextType {
  targetLang: LanguageCode;
  setTargetLang: (lang: LanguageCode) => void;
  completedLessons: string[];
  refreshProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [targetLang, setTargetLangState] = useState<LanguageCode>(translationEngine.getLanguage());
  const [completedLessons, setCompletedLessons] = useState<string[]>(progressEngine.getProgress().completedLessons);

  const setTargetLang = (lang: LanguageCode) => {
    translationEngine.setLanguage(lang);
    setTargetLangState(lang);
  };

  const refreshProgress = () => {
    setCompletedLessons([...progressEngine.getProgress().completedLessons]);
  };

  return (
    <AppContext.Provider value={{ targetLang, setTargetLang, completedLessons, refreshProgress }}>
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
