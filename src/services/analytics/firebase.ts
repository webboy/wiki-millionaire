// src/services/analytics/firebase.ts
import { getAnalytics, logEvent } from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';
import type { Difficulty, LifelineId } from 'src/types/game'

export class GameAnalytics {
  private readonly analytics: Analytics;

  constructor() {
    this.analytics = getAnalytics();
  }

  // Game Session Events
  public logGameStart(difficulty: Difficulty): void {
    logEvent(this.analytics, 'game_start', {
      difficulty,
      timestamp: new Date().toISOString()
    });
  }

  public logGameEnd(params: {
    difficulty: Difficulty;
    questionsAnswered: number;
    finalPrize: number;
  }): void {
    logEvent(this.analytics, 'game_end', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  // Question Events
  public logQuestionAnswer(params: {
    questionNumber: number;
    correct: boolean;
    timeSpent: number;
    prizeLevel: number;
  }): void {
    logEvent(this.analytics, 'question_answer', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  // Lifeline Events
  public logLifelineUse(params: {
    type: LifelineId;
    questionNumber: number;
    difficulty: Difficulty;
  }): void {
    logEvent(this.analytics, 'lifeline_use', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }
}

// Create a singleton instance
export const gameAnalytics = new GameAnalytics();
