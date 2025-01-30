import type { QuestionDifficulty } from 'src/types/game'

export interface QuestionGenerator {
  generateQuestion(
    wikiSummary: string,
    choicesCount: number,
    difficulty: QuestionDifficulty
  ): Promise<{
    question: string;
    choices: string[];
    correctAnswerIndex: number;
  }>;
}
