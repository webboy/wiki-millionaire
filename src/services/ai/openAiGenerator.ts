import { OpenAI } from 'openai';
import type { QuestionGenerator } from './types';
import type { QuestionDifficulty } from 'src/types/game'

export class OpenAIQuestionGenerator implements QuestionGenerator {
  private openai: OpenAI;

  constructor(apiKey: string) {
    this.openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
  }

  async generateQuestion(wikiSummary: string, choicesCount: number, difficulty: QuestionDifficulty) {
    const prompt = `
      Generate a ${difficulty.toLowerCase()} difficulty multiple choice question based on this Wikipedia summary.
      You also need to generate a hint for the question. The hint is a sentence that provides a clue to the correct answer.
      Respond ONLY with a JSON object, no other text or formatting.

      Summary: "${wikiSummary}"

      The JSON must have exactly this structure:
      {
        "question": "question text here",
        "choices": ["option 1", "option 2", ... (exactly ${choicesCount} options)],
        "correctAnswerIndex": number (0-based index of correct answer)
        "hint": "hint text here"
      }
    `;

    try {
      const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a quiz generator. Respond only with valid JSON objects following the specified format exactly."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) {
        throw new Error('No content received from OpenAI');
      }

      const parsedData = JSON.parse(content);

      // Validate the response structure
      if (!parsedData.question || !Array.isArray(parsedData.choices) ||
        typeof parsedData.correctAnswerIndex !== 'number' ||
        parsedData.choices.length !== choicesCount) {
        throw new Error('Invalid response format from OpenAI');
      }

      return parsedData;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to generate question: ${error.message}`);
      }
      throw error;
    }
  }
}
