// src/services/analytics/firebase.ts
import { getAnalytics, logEvent } from 'firebase/analytics';
import type { Analytics } from 'firebase/analytics';
import type { Difficulty } from 'src/types/game'

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
    difficulty: string;
    questionsAnswered: number;
    finalPrize: number;
    timeSpent: number;
    completed: boolean;
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
    type: 'time_extension' | 'split';
    questionNumber: number;
    prizeLevel: number;
  }): void {
    logEvent(this.analytics, 'lifeline_use', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  // Safety Net Events
  public logSafetyNetReached(params: {
    level: number;
    questionNumber: number;
    timeSpent: number;
  }): void {
    logEvent(this.analytics, 'safety_net_reached', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }

  // Timeout Events
  public logTimeout(params: {
    questionNumber: number;
    prizeLevel: number;
    totalTimeSpent: number;
  }): void {
    logEvent(this.analytics, 'timeout', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }
}

// Create a singleton instance
export const gameAnalytics = new GameAnalytics();
