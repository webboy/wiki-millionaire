import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore } from 'src/stores/gameStore'



export class ExtendTimeLifeline implements Lifeline {
  call(): void {
    const gameStore = useGameStore()
    // Add 30 seconds to the timer
    const newTime = gameStore.gameState.timeRemaining + 30;
    gameStore.updateTimer(newTime);
    gameStore.gameState.lifelinesRemaining.extendTime = false;
    this.isUsed = true;
  }
  description: string = 'Add 30 seconds to the timer'
  icon: string = 'more_time'
  id: LifelineId = 'extend-time'
  name: string = 'Extend Time'
  isUsed: boolean = false
}
