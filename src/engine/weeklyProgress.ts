import { getDailyGoal } from './dailyGoal';

export interface WeeklyProgressData {
  completedDays: number;
  totalDays: number; // 7
  weekDates: string[]; // Monday -> Sunday in YYYY-MM-DD
}

/**
 * Returns the ISO Monday -> Sunday dates (YYYY-MM-DD) for the current week in local time.
 */
export function getCurrentWeekDates(refDate = new Date()): string[] {
  const current = new Date(refDate);
  // getDay(): 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const currentDay = current.getDay();
  // Calculate distance back to Monday:
  // If Sunday (0), Monday was 6 days ago.
  // If Monday (1), Monday is today (diff = 0).
  // If Tuesday (2), Monday was 1 day ago (diff = 1).
  const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;

  const monday = new Date(current);
  monday.setDate(current.getDate() - distanceToMonday);

  const dates: string[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    dates.push(`${year}-${month}-${day}`);
  }

  return dates;
}

/**
 * Computes weekly progress by checking which days of the current Monday-to-Sunday
 * week have an entry in the existing daily goal history.
 */
export function getWeeklyProgress(): WeeklyProgressData {
  const goalData = getDailyGoal();
  const weekDates = getCurrentWeekDates();

  let completedDays = 0;
  for (const dateStr of weekDates) {
    if (goalData.history && goalData.history[dateStr] === true) {
      completedDays++;
    }
  }

  return {
    completedDays,
    totalDays: 7,
    weekDates,
  };
}
