import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore} from 'stores/gameStore'

export class RemoveHalfOptionsLifeline implements Lifeline{
  call(): void {

    const gameStore = useGameStore()

    if (gameStore.gameState.currentQuestion !== null) {
      const correctIndex = gameStore.gameState.currentQuestion.correctAnswerIndex
      const correctAnswer = gameStore.gameState.currentQuestion.choices[correctIndex];

      // Get array of wrong answers
      const wrongAnswers = gameStore.gameState.currentQuestion.choices
        .filter((_, index) => index !== correctIndex);

      // Keep only half of wrong answers
      const keepCount = Math.floor(wrongAnswers.length / 2);
      const keptWrong = wrongAnswers
        .sort(() => Math.random() - 0.5)
        .slice(0, keepCount);

      // Filter out undefined values
      gameStore.gameState.currentQuestion.choices = [correctAnswer, ...keptWrong]
        .filter((choice): choice is string => choice !== undefined)
        .sort(() => Math.random() - 0.5);
      this.isUsed = true;
    }
  }

  description: string = 'Remove half of the answers from the choices'
  icon: string = 'call_split'
  id: LifelineId = 'remove-half-options'
  isUsed: boolean = false
  name: string = 'Remove Half Options'
}
