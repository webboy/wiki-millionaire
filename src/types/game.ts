export type Difficulty = 'easy' | 'medium' | 'hard';

export type LifelineId = 'extend-time' | 'remove-half-options';

export enum QuestionDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface DifficultyDistribution {
  easy: number;
  medium: number;
  hard: number;
}

export interface GameSettings {
  difficulty: Difficulty;
  questionsCount: number;
  timePerQuestion: number;
  choicesCount: number;
  safetyNetFrequency: number;
  moneyProgression: number[];
  difficultyDistribution: DifficultyDistribution;
}

export interface GameState {
  playerName: string;
  difficulty: Difficulty;
  currentQuestionIndex: number;
  currentQuestion: Question | null;
  timeRemaining: number;
  currentPrize: number;
  guaranteedPrize: number;
  lifelinesRemaining: {
    extendTime: boolean;
    split: boolean;
  };
  isGameOver: boolean;
  hasWon: boolean;
}

export interface Question {
  id: string;
  text: string;
  choices: string[];
  correctAnswerIndex: number;
  difficulty: QuestionDifficulty;
  hint: string;
  showHint: boolean;
  wikiSource: {
    pageId: string;
    title: string;
    url: string;
  };
}

export interface Lifeline {
  id: LifelineId;
  name: string;
  description: string;
  icon: string;
  isUsed: boolean;
  call: () => void;
}
