import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore } from 'src/stores/gameStore'
import { useI18n } from 'vue-i18n'


export class ExtendTimeLifeline implements Lifeline {
  call(): void {
    const gameStore = useGameStore()
    // Add 30 seconds to the timer
    const newTime = gameStore.gameState.timeRemaining + 30;
    gameStore.updateTimer(newTime);
    gameStore.gameState.lifelinesRemaining.extend_time = false;
    this.isUsed = true;
  }
  description: string = useI18n().t('lifelines.extend_time.description').toString()
  icon: string = 'more_time'
  id: LifelineId = 'extend-time'
  name: string = useI18n().t('lifelines.extend_time.label').toString()
  isUsed: boolean = false
}
