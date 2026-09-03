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
      scores: {}
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
}

export const progressEngine = new ProgressEngine();
