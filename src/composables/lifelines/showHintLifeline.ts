import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore } from 'src/stores/gameStore'

export class ShowHintLifeline implements Lifeline {
  call(): void {
    const gameStore = useGameStore()
    gameStore.gameState.currentQuestion!.showHint = true;
    gameStore.gameState.lifelinesRemaining.showHint = false;
    this.isUsed = true;
  }
  description: string = 'Show a hint for the current question'
  icon: string = 'help_outline'
  id: LifelineId = 'show-hint'
  name: string = 'Show Hint'
  isUsed: boolean = false
}
