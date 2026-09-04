export type CEFRLevel = 'B1' | 'B2' | 'C1' | 'C2' | string;

export type LanguageCode = 'es' | 'ru' | 'zh' | 'fr' | 'de' | 'ja' | 'tr' | 'en';

export interface LevelConfig {
  id: CEFRLevel;
  name: string;
  description: string;
  available: boolean;
}

export interface TranslationMap {
  [langCode: string]: string;
}

export interface Example {
  id: string;
  sentence: string;
  translation: TranslationMap;
}

export interface Meaning {
  id: string;
  definition: string;
  translation: TranslationMap;
  examples: Example[];
}

export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  level: CEFRLevel;
  meanings: Meaning[];
  synonyms?: string[];
  collocations?: string[];
  translations: TranslationMap; 
}

export interface ComprehensionQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ReadingText {
  id: string;
  title: string;
  content: string; 
  translations: TranslationMap;
  comprehensionQuestions: ComprehensionQuestion[];
}

export interface Lesson {
  id: string;
  level: CEFRLevel;
  number: number;
  title: string;
  words: Word[];
  reading: ReadingText;
}

export interface LessonScore {
  vocabQuiz: number;
  vocabQuizMax: number;
  comprehension: number;
  comprehensionMax: number;
}

export type MasteryState = 'NEW' | 'PRACTICING' | 'NEEDS_REVIEW' | 'MASTERED' | 'UNRESOLVED';

export interface WordMastery {
  wordId: string;
  state: MasteryState;
  correctAnswers: number;
  incorrectAnswers: number;
  quizAttempts: number;
  // Future spaced review
  lastReviewed?: number;
  reviewCount?: number;
  masteryLevel?: number;
  nextReview?: number;
}

export interface LessonMastery {
  lessonId: string;
  words: Record<string, WordMastery>;
  lastQuizDate?: number;
}

export interface Progress {
  completedLessons: string[];
  scores: Record<string, LessonScore>;
  mastery?: Record<string, LessonMastery>;
}
