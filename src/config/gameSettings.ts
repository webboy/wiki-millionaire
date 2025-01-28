import type { Difficulty, GameSettings } from 'src/types/game'

export const GAME_SETTINGS: Record<Difficulty, GameSettings> = {
  easy: {
    difficulty: 'easy',
    questionsCount: 5,
    timePerQuestion: 120,
    choicesCount: 3,
    safetyNetFrequency: 1,
    moneyProgression: [100, 1000, 10000, 100000, 1000000]
  },
  medium: {
    difficulty: 'medium',
    questionsCount: 10,
    timePerQuestion: 60,
    choicesCount: 4,
    safetyNetFrequency: 2,
    moneyProgression: [100, 500, 1000, 5000, 10000, 50000, 100000, 250000, 500000, 1000000]
  },
  hard: {
    difficulty: 'hard',
    questionsCount: 15,
    timePerQuestion: 20,
    choicesCount: 6,
    safetyNetFrequency: 3,
    moneyProgression: [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]
  }
};
