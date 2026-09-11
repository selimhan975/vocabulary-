import { Progress, LessonScore } from '../types';

export class ProgressEngine {
  private static STORAGE_KEY = 'vocab_app_progress';

  private progress: Progress;

  constructor() {
    this.progress = this.load();
  }

  private load(): Progress {
    const defaultProgress: Progress = {
      completedLessons: [],
      scores: {},
      mastery: {}
    };

    try {
      const stored = localStorage.getItem(ProgressEngine.STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        
        if (!parsed || typeof parsed !== 'object') {
          return defaultProgress;
        }

        // Check if versioned
        if ('version' in parsed) {
          if (parsed.version === 1) {
            // Version 1
            if (parsed.data && typeof parsed.data === 'object' && Array.isArray(parsed.data.completedLessons)) {
              return parsed.data as Progress;
            }
          } else {
             // Unknown future version
             console.warn('Unknown progress version:', parsed.version);
             return defaultProgress;
          }
        } else {
          // Legacy unversioned format
          if (Array.isArray(parsed.completedLessons)) {
             return parsed as Progress;
          }
        }
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
    
    return defaultProgress;
  }

  private save() {
    try {
      const versionedData = {
        version: 1,
        data: this.progress
      };
      localStorage.setItem(ProgressEngine.STORAGE_KEY, JSON.stringify(versionedData));
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
