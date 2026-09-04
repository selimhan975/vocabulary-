import { Progress, LessonScore } from '../types';

export class ProgressEngine {
  private static STORAGE_KEY = 'vocab_app_progress';

  private progress: Progress;

  constructor() {
    this.progress = this.load();
  }

  private load(): Progress {
    try {
      const stored = localStorage.getItem(ProgressEngine.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
    return {
      completedLessons: [],
      scores: {},
      mastery: {}
    };
  }

  private save() {
    try {
      localStorage.setItem(ProgressEngine.STORAGE_KEY, JSON.stringify(this.progress));
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }

  getProgress(): Progress {
    return this.progress;
  }

  markLessonComplete(lessonId: string) {
    if (!this.progress.completedLessons.includes(lessonId)) {
      this.progress.completedLessons.push(lessonId);
      this.save();
    }
  }

  isLessonComplete(lessonId: string): boolean {
    return this.progress.completedLessons.includes(lessonId);
  }

  saveLessonScore(lessonId: string, score: LessonScore) {
    this.progress.scores[lessonId] = score;
    this.save();
  }
  
  getLessonScore(lessonId: string): LessonScore | undefined {
    return this.progress.scores[lessonId];
  }

  getLessonMastery(lessonId: string) {
    if (!this.progress.mastery) {
      this.progress.mastery = {};
    }
    if (!this.progress.mastery[lessonId]) {
      this.progress.mastery[lessonId] = {
        lessonId,
        words: {}
      };
    }
    return this.progress.mastery[lessonId];
  }

  updateWordMastery(lessonId: string, wordId: string, updates: Partial<import('../types').WordMastery>) {
    const lessonMastery = this.getLessonMastery(lessonId);
    if (!lessonMastery.words[wordId]) {
      lessonMastery.words[wordId] = {
        wordId,
        state: 'NEW',
        correctAnswers: 0,
        incorrectAnswers: 0,
        quizAttempts: 0
      };
    }
    lessonMastery.words[wordId] = {
      ...lessonMastery.words[wordId],
      ...updates,
      lastReviewed: Date.now()
    };
    
    // Evaluate mastery state
    const wm = lessonMastery.words[wordId];
    if (updates.state) {
      wm.state = updates.state;
    } else if (wm.state !== 'MASTERED') {
      if (wm.incorrectAnswers > 0 && wm.correctAnswers < 2) {
        wm.state = 'NEEDS_REVIEW';
      } else if (wm.correctAnswers >= 2) {
        wm.state = 'MASTERED';
      } else {
        wm.state = 'PRACTICING';
      }
    }
    
    lessonMastery.lastQuizDate = Date.now();
    this.save();
  }
}

export const progressEngine = new ProgressEngine();
