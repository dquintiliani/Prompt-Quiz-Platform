const XP_STORAGE_KEY = "prompt-quiz-total-xp";

/** Reads accumulated lifetime XP from local storage. Defaults to 0 if unset,
 * unavailable (e.g. private browsing), or corrupted. */
export function loadStoredXp(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = window.localStorage.getItem(XP_STORAGE_KEY);
    const parsed = raw === null ? 0 : Number(raw);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
  } catch {
    return 0;
  }
}

export function saveStoredXp(xp: number): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(XP_STORAGE_KEY, String(xp));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — ignore.
  }
}
