import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore} from 'stores/gameStore'
import { useI18n } from 'vue-i18n'

export class FiftyFiftyLifeline implements Lifeline{
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
      gameStore.gameState.lifelinesRemaining.fifty_fifty = false;
    }
  }

  description: string = useI18n().t('lifelines.fifty_fifty.description').toString()
  icon: string = 'call_split'
  id: LifelineId = 'fifty_fifty'
  isUsed: boolean = false
  name: string = useI18n().t('lifelines.fifty_fifty.label').toString()
}
