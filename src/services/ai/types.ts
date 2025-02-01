import type { QuestionDifficulty } from 'src/types/game'
import type { Language } from 'src/types/language'

export interface QuestionGenerator {
  generateQuestion(
    wikiSummary: string,
    choicesCount: number,
    difficulty: QuestionDifficulty,
    language: Language | undefined
  ): Promise<{
    question: string;
    choices: string[];
    correctAnswerIndex: number;
  }>;
}
