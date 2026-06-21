// ============================================================
// ACHIEVEMENTS - Badge & Achievement Definitions
// ============================================================

export const achievements = [
  // Learning Achievements
  {
    id: 'first-variable',
    title: 'First Variable',
    description: 'Declare your first variable',
    category: 'learning',
    tier: 'bronze',
    icon: 'variables',
    xp: 25,
    condition: (state) => state.progress.completedLessons.includes('declaring-variables'),
  },
  {
    id: 'first-function',
    title: 'First Function',
    description: 'Write your first function',
    category: 'learning',
    tier: 'bronze',
    icon: 'functions',
    xp: 25,
    condition: (state) => state.progress.completedLessons.includes('function-basics'),
  },
  {
    id: 'first-array',
    title: 'First Array',
    description: 'Create your first array',
    category: 'learning',
    tier: 'bronze',
    icon: 'arrays',
    xp: 25,
    condition: (state) => state.progress.completedLessons.includes('creating-arrays'),
  },
  {
    id: 'first-object',
    title: 'First Object',
    description: 'Build your first object',
    category: 'learning',
    tier: 'bronze',
    icon: 'objects',
    xp: 25,
    condition: (state) => state.progress.completedLessons.includes('object-basics'),
  },
  {
    id: 'dom-explorer',
    title: 'DOM Explorer',
    description: 'Complete all DOM lessons',
    category: 'learning',
    tier: 'silver',
    icon: 'dom',
    xp: 50,
    condition: (state) => {
      const domLessons = ['dom-intro', 'selecting-elements', 'manipulating-dom'];
      return domLessons.every(l => state.progress.completedLessons.includes(l));
    },
  },
  {
    id: 'async-initiate',
    title: 'Async Initiate',
    description: 'Complete the async introduction',
    category: 'learning',
    tier: 'silver',
    icon: 'async',
    xp: 30,
    condition: (state) => state.progress.completedLessons.includes('async-intro'),
  },

  // Puzzle Achievements
  {
    id: 'puzzle-solver-1',
    title: 'Puzzle Solver',
    description: 'Solve your first 5 puzzles',
    category: 'puzzle',
    tier: 'bronze',
    icon: 'puzzle',
    xp: 20,
    condition: (state) => state.progress.completedPuzzles.length >= 5,
  },
  {
    id: 'puzzle-solver-2',
    title: 'Puzzle Master',
    description: 'Solve 25 puzzles',
    category: 'puzzle',
    tier: 'silver',
    icon: 'puzzle',
    xp: 50,
    condition: (state) => state.progress.completedPuzzles.length >= 25,
  },
  {
    id: 'puzzle-solver-3',
    title: 'Puzzle Legend',
    description: 'Solve 50 puzzles',
    category: 'puzzle',
    tier: 'gold',
    icon: 'puzzle',
    xp: 100,
    condition: (state) => state.progress.completedPuzzles.length >= 50,
  },
  {
    id: 'bug-hunter',
    title: 'Bug Hunter',
    description: 'Fix 10 bugs',
    category: 'puzzle',
    tier: 'silver',
    icon: 'bug',
    xp: 30,
    condition: (state) => {
      // Count fix-bug type completions
      return state.progress.completedPuzzles.filter(p => p.startsWith('p-')).length >= 10;
    },
  },
  {
    id: 'zero-hints',
    title: 'Zero Hints',
    description: 'Complete 10 puzzles without using hints',
    category: 'puzzle',
    tier: 'gold',
    icon: 'shield',
    xp: 50,
    condition: (state) => state.profile.noHintStreak >= 10,
  },

  // Streak Achievements
  {
    id: 'streak-3',
    title: 'Three Day Streak',
    description: 'Learn for 3 consecutive days',
    category: 'special',
    tier: 'bronze',
    icon: 'flame',
    xp: 30,
    condition: (state) => state.profile.streak >= 3,
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: 'Learn for 7 consecutive days',
    category: 'special',
    tier: 'silver',
    icon: 'flame',
    xp: 75,
    condition: (state) => state.profile.streak >= 7,
  },
  {
    id: 'streak-30',
    title: 'Monthly Master',
    description: 'Learn for 30 consecutive days',
    category: 'special',
    tier: 'gold',
    icon: 'flame',
    xp: 200,
    condition: (state) => state.profile.streak >= 30,
  },

  // Level Achievements
  {
    id: 'level-5',
    title: 'Rising Star',
    description: 'Reach level 5',
    category: 'special',
    tier: 'bronze',
    icon: 'star',
    xp: 25,
    condition: (state) => state.profile.level >= 5,
  },
  {
    id: 'level-10',
    title: 'Dedicated Learner',
    description: 'Reach level 10',
    category: 'special',
    tier: 'silver',
    icon: 'star',
    xp: 50,
    condition: (state) => state.profile.level >= 10,
  },
  {
    id: 'level-25',
    title: 'JavaScript Expert',
    description: 'Reach level 25',
    category: 'special',
    tier: 'gold',
    icon: 'trophy',
    xp: 100,
    condition: (state) => state.profile.level >= 25,
  },
  {
    id: 'level-50',
    title: 'JavaScript Master',
    description: 'Reach level 50',
    category: 'special',
    tier: 'platinum',
    icon: 'trophy',
    xp: 250,
    condition: (state) => state.profile.level >= 50,
  },

  // World Completion
  {
    id: 'complete-variables',
    title: 'Variables Valley Champion',
    description: 'Complete all Variables Valley lessons',
    category: 'learning',
    tier: 'silver',
    icon: 'variables',
    xp: 75,
    condition: (state) => {
      const vars = ['declaring-variables', 'variable-types', 'naming-rules'];
      return vars.every(l => state.progress.completedLessons.includes(l));
    },
  },
  {
    id: 'complete-functions',
    title: 'Functions Forest Champion',
    description: 'Complete all Functions Forest lessons',
    category: 'learning',
    tier: 'silver',
    icon: 'functions',
    xp: 75,
    condition: (state) => {
      const funcs = ['function-basics', 'parameters-arguments', 'arrow-functions'];
      return funcs.every(l => state.progress.completedLessons.includes(l));
    },
  },
];

export function checkAchievements(state) {
  const newAchievements = [];
  for (const achievement of achievements) {
    if (!state.achievements.includes(achievement.id)) {
      if (achievement.condition(state)) {
        newAchievements.push(achievement);
      }
    }
  }
  return newAchievements;
}

export function getAchievement(id) {
  return achievements.find(a => a.id === id);
}

export function getAchievementsByCategory(category) {
  return achievements.filter(a => a.category === category);
}
