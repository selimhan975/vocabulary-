import React, { useState } from 'react';
import { AppProvider } from './store/AppContext';
import { LevelSelection } from './components/layout/LevelSelection';
import { LessonList } from './components/layout/LessonList';
import { LessonFlow } from './components/lesson/LessonFlow';
import { Lesson, CEFRLevel } from './types';

export default function App() {
  const [activeLevel, setActiveLevel] = useState<CEFRLevel | null>(() => {
    return localStorage.getItem('vocab_app_level') as CEFRLevel || null;
  });
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  const handleSelectLevel = (level: CEFRLevel) => {
    localStorage.setItem('vocab_app_level', level);
    setActiveLevel(level);
  };

  const handleBackToLevels = () => {
    setActiveLevel(null);
  };

  return (
    <AppProvider>
      {!activeLevel ? (
        <LevelSelection onSelectLevel={handleSelectLevel} />
      ) : activeLesson ? (
        <LessonFlow 
          lesson={activeLesson} 
          onExit={() => setActiveLesson(null)} 
        />
      ) : (
        <LessonList 
          level={activeLevel} 
          onStartLesson={setActiveLesson} 
          onBack={handleBackToLevels}
        />
      )}
    </AppProvider>
  );
}
