import type { Lifeline } from 'src/types/game'
import { useGameStore } from 'src/stores/gameStore'

const gameStore = useGameStore()

export class ExtendTimeLifeline implements Lifeline {
  call(): void {
    // Add 30 seconds to the timer
    const newTime = gameStore.gameState.timeRemaining + 30;
    gameStore.updateTimer(newTime);
    this.isUsed = true;
  }
  description: string = 'Add 30 seconds to the timer'
  icon: string = 'hourglass'
  id: string = 'extend-time'
  name: string = 'Extend Time'
  isUsed: boolean = false
}
