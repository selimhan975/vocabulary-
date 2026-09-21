export const STREAK_STORAGE_KEY = 'vocab_app_streak';

export interface StreakData {
  currentStreak: number;
  lastCompletedDate: string | null;
}

export function getTodayLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayLocalDateString(referenceDateStr?: string): string {
  const date = referenceDateStr ? new Date(referenceDateStr + 'T12:00:00') : new Date();
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getStreakData(): StreakData {
  const today = getTodayLocalDateString();
  const yesterday = getYesterdayLocalDateString();

  try {
    const raw = localStorage.getItem(STREAK_STORAGE_KEY);
    if (!raw) {
      return {
        currentStreak: 0,
        lastCompletedDate: null,
      };
    }

    const parsed = JSON.parse(raw);
    const lastCompletedDate: string | null = parsed.lastCompletedDate || null;
    let currentStreak: number = typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0;

    // If lastCompletedDate was neither today nor yesterday, the streak has lapsed
    if (lastCompletedDate && lastCompletedDate !== today && lastCompletedDate !== yesterday) {
      currentStreak = 0;
    }

    return {
      currentStreak,
      lastCompletedDate,
    };
  } catch (error) {
    console.error('Error reading streak data from localStorage:', error);
    return {
      currentStreak: 0,
      lastCompletedDate: null,
    };
  }
}

/**
 * Updates streak when daily goal is completed.
 * Should be called whenever Daily Goal becomes completed.
 */
export function recordDailyGoalCompletionForStreak(): StreakData {
  const today = getTodayLocalDateString();
  const yesterday = getYesterdayLocalDateString();
  const current = getStreakData();

  // If already recorded for today, completing another lesson today must NOT increase the streak again.
  if (current.lastCompletedDate === today) {
    return current;
  }

  let newStreak = 1;
  if (current.lastCompletedDate === yesterday) {
    newStreak = current.currentStreak + 1;
  } else {
    // Yesterday was not completed, start a new streak at 1
    newStreak = 1;
  }

  const updated: StreakData = {
    currentStreak: newStreak,
    lastCompletedDate: today,
  };

  try {
    localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving streak data to localStorage:', error);
  }

  return updated;
}
