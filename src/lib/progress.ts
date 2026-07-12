const STORAGE_KEY = "qa-platform-progress";

export interface Progress {
  completedLessons: string[];
  quizScores: Record<number, number>;
  xp: number;
  streak: number;
  lastVisit: string;
}

function defaultProgress(): Progress {
  return { completedLessons: [], quizScores: {}, xp: 0, streak: 0, lastVisit: "" };
}

export function getProgress(): Progress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultProgress(), ...JSON.parse(raw) } : defaultProgress();
  } catch { return defaultProgress(); }
}

export function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

export function markLessonComplete(lessonId: string) {
  const p = getProgress();
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId);
    p.xp += 10;
  }
  const today = new Date().toDateString();
  if (p.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    p.streak = p.lastVisit === yesterday ? p.streak + 1 : 1;
    p.lastVisit = today;
  }
  saveProgress(p);
  return p;
}

export function saveQuizScore(moduleId: number, score: number) {
  const p = getProgress();
  const prev = p.quizScores[moduleId] || 0;
  if (score > prev) {
    p.quizScores[moduleId] = score;
    p.xp += score * 5;
  }
  saveProgress(p);
  return p;
}

export function getModuleProgress(moduleId: number, lessonIds: string[]): number {
  const p = getProgress();
  const done = lessonIds.filter(id => p.completedLessons.includes(id)).length;
  return lessonIds.length ? Math.round((done / lessonIds.length) * 100) : 0;
}

export function resetProgress() {
  if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
}
