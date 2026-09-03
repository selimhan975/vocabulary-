import React, { useState } from 'react';
import { AppProvider } from './store/AppContext';
import { Dashboard } from './components/layout/Dashboard';
import { LessonFlow } from './components/lesson/LessonFlow';
import { Lesson } from './types';

export default function App() {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  return (
    <AppProvider>
      {activeLesson ? (
        <LessonFlow 
          lesson={activeLesson} 
          onExit={() => setActiveLesson(null)} 
        />
      ) : (
        <Dashboard onStartLesson={setActiveLesson} />
      )}
    </AppProvider>
  );
}
