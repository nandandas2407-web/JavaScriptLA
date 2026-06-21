// ============================================================
// STORE - State Management (localStorage-backed)
// ============================================================

const STORAGE_KEY = 'js-explorer-state';

const defaultState = {
  profile: {
    name: 'Explorer',
    rank: 'JavaScript Novice',
    xp: 0,
    level: 1,
    streak: 0,
    lastVisit: null,
  },
  progress: {
    completedLessons: [],
    completedPuzzles: [],
    masteredWorlds: [],
    currentWorld: 'variables-valley',
    currentLesson: null,
  },
  achievements: [],
  badges: [],
  settings: {
    theme: 'dark',
    soundEnabled: true,
    reducedMotion: false,
  },
};

class Store {
  constructor() {
    this.listeners = new Map();
    this.state = this.load();
    this.updateStreak();
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultState, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Failed to load state:', e);
    }
    return { ...defaultState };
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.state);
  }

  set(path, value) {
    const keys = path.split('.');
    const last = keys.pop();
    const target = keys.reduce((obj, key) => obj[key], this.state);
    target[last] = value;
    this.save();
    this.notify(path);
  }

  update(path, updater) {
    const current = this.get(path);
    this.set(path, updater(current));
  }

  on(path, callback) {
    if (!this.listeners.has(path)) {
      this.listeners.set(path, new Set());
    }
    this.listeners.get(path).add(callback);
    return () => this.listeners.get(path)?.delete(callback);
  }

  notify(path) {
    this.listeners.forEach((callbacks, listenerPath) => {
      if (path.startsWith(listenerPath) || listenerPath.startsWith(path)) {
        callbacks.forEach(cb => cb(this.state));
      }
    });
  }

  updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = this.state.profile.lastVisit;

    if (lastVisit === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit === yesterday.toDateString()) {
      this.state.profile.streak += 1;
    } else if (lastVisit !== today) {
      this.state.profile.streak = 1;
    }

    this.state.profile.lastVisit = today;
    this.save();
  }

  addXP(amount) {
    this.update('profile.xp', xp => xp + amount);
    this.checkLevelUp();
  }

  checkLevelUp() {
    const xp = this.state.profile.xp;
    const level = Math.floor(xp / 100) + 1;

    if (level > this.state.profile.level) {
      this.state.profile.level = level;
      this.state.profile.rank = this.getRank(level);
      this.save();
      this.notify('profile');
      return true;
    }
    return false;
  }

  getRank(level) {
    const ranks = [
      { level: 1, name: 'JavaScript Novice' },
      { level: 3, name: 'Syntax Explorer' },
      { level: 5, name: 'Variable Apprentice' },
      { level: 8, name: 'Function Crafter' },
      { level: 12, name: 'Array Navigator' },
      { level: 16, name: 'Object Architect' },
      { level: 20, name: 'DOM Engineer' },
      { level: 25, name: 'Async Explorer' },
      { level: 30, name: 'Event Loop Analyst' },
      { level: 40, name: 'Full Stack Builder' },
      { level: 50, name: 'JavaScript Master' },
    ];

    let rank = ranks[0].name;
    for (const r of ranks) {
      if (level >= r.level) rank = r.name;
    }
    return rank;
  }

  completeLesson(lessonId, worldId, xp = 25) {
    if (!this.state.progress.completedLessons.includes(lessonId)) {
      this.state.progress.completedLessons.push(lessonId);
      this.addXP(xp);
      this.checkWorldCompletion(worldId);
      this.save();
    }
  }

  completePuzzle(puzzleId, xp = 10) {
    if (!this.state.progress.completedPuzzles.includes(puzzleId)) {
      this.state.progress.completedPuzzles.push(puzzleId);
      this.addXP(xp);
      this.save();
    }
  }

  checkWorldCompletion(worldId) {
    // Placeholder - will check against curriculum data
  }

  unlockAchievement(achievementId) {
    if (!this.state.achievements.includes(achievementId)) {
      this.state.achievements.push(achievementId);
      this.save();
      return true;
    }
    return false;
  }

  reset() {
    this.state = { ...defaultState };
    this.save();
    this.notify('');
  }
}

export const store = new Store();
export default store;
