import type { Lifeline, LifelineId } from 'src/types/game'
import { useGameStore } from 'src/stores/gameStore'
import { useI18n } from 'vue-i18n'

export class ShowHintLifeline implements Lifeline {
  call(): void {
    const gameStore = useGameStore()
    gameStore.gameState.currentQuestion!.showHint = true;
    gameStore.gameState.lifelinesRemaining.show_hint = false;
    this.isUsed = true;
  }
  description: string = useI18n().t('lifelines.show_hint.description').toString()
  icon: string = 'help_outline'
  id: LifelineId = 'show-hint'
  name: string = useI18n().t('lifelines.show_hint.label').toString()
  isUsed: boolean = false
}
