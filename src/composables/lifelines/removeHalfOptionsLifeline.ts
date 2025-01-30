import type { Lifeline } from 'src/types/game'

export class RemoveHalfOptionsLifeline implements Lifeline{
  call(): void {
  }

  description: string = 'Remove half of the answers from the choices'
  icon: string = 'remove'
  id: string = 'remove-half-options'
  isUsed: boolean = false
  name: string = 'Remove Half Options'
}
