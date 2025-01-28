export interface QuestionGenerator {
  generateQuestion(
    wikiSummary: string,
    choicesCount: number
  ): Promise<{
    question: string;
    choices: string[];
    correctAnswerIndex: number;
  }>;
}
