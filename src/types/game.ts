export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameSettings {
  difficulty: Difficulty;
  questionsCount: number;
  timePerQuestion: number;
  choicesCount: number;
  safetyNetFrequency: number;
  moneyProgression: number[];
}

export interface GameState {
  playerName: string;
  difficulty: Difficulty;
  currentQuestion: number;
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
  wikiSource: {
    pageId: string;
    title: string;
    url: string;
  };
}
