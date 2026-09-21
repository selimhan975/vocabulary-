export const DAILY_GOAL_STORAGE_KEY = 'vocab_app_daily_goal';

export interface DailyGoalData {
  date: string;
  completed: boolean;
  history: Record<string, boolean>;
}

export function getTodayLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDailyGoal(): DailyGoalData {
  const today = getTodayLocalDateString();
  try {
    const raw = localStorage.getItem(DAILY_GOAL_STORAGE_KEY);
    if (!raw) {
      return {
        date: today,
        completed: false,
        history: {},
      };
    }

    const parsed = JSON.parse(raw);
    const history: Record<string, boolean> =
      typeof parsed.history === 'object' && parsed.history !== null
        ? { ...parsed.history }
        : {};

    // If a previously stored record was completed, ensure it is recorded in history
    if (parsed.date && parsed.completed) {
      history[parsed.date] = true;
    }

    const isTodayCompleted = Boolean(parsed.date === today ? parsed.completed : history[today]);

    const result: DailyGoalData = {
      date: today,
      completed: isTodayCompleted,
      history,
    };

    // If day rolled over in storage, keep the stored record updated with today's date
    if (parsed.date !== today) {
      localStorage.setItem(DAILY_GOAL_STORAGE_KEY, JSON.stringify(result));
    }

    return result;
  } catch (error) {
    console.error('Error reading daily goal from localStorage:', error);
    return {
      date: today,
      completed: false,
      history: {},
    };
  }
}

export function markDailyGoalComplete(): DailyGoalData {
  const today = getTodayLocalDateString();
  const current = getDailyGoal();

  const updatedHistory: Record<string, boolean> = {
    ...current.history,
    [today]: true,
  };

  const updatedData: DailyGoalData = {
    date: today,
    completed: true,
    history: updatedHistory,
  };

  try {
    localStorage.setItem(DAILY_GOAL_STORAGE_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Error saving daily goal to localStorage:', error);
  }

  return updatedData;
}
