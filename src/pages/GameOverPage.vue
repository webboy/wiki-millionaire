<!-- src/pages/GameOverPage.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card class="game-over-card q-pa-lg">
      <!-- Result Header -->
      <q-card-section class="text-center">
        <div class="text-h3 text-weight-bold" :class="gameState.hasWon ? 'text-positive' : 'text-negative'">
          {{ gameState.hasWon ? 'Congratulations!' : 'Game Over' }}
        </div>
        <div class="text-h5 q-mt-md">{{ gameState.playerName }}</div>
      </q-card-section>

      <!-- Prize Information -->
      <q-card-section class="text-center q-pt-none">
        <div class="text-h6 q-mb-md">
          {{ gameState.hasWon ? 'You won' : 'You won' }}
        </div>
        <div class="text-h4 text-primary q-mb-lg">
          ${{ gameState.currentPrize.toLocaleString() }}
        </div>

        <!-- Game Statistics -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-subtitle2">Questions Answered</div>
                <div class="text-h6">{{ gameState.currentQuestion }}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-subtitle2">Difficulty</div>
                <div class="text-h6 text-capitalize">{{ gameState.difficulty }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Lifelines Usage -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-subtitle2">Time Extensions Used</div>
                <div class="text-h6">
                  {{ gameState.lifelinesRemaining.extendTime ? 'No' : 'Yes' }}
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-subtitle2">Splits Used</div>
                <div class="text-h6">
                  {{ gameState.lifelinesRemaining.split ? 'No' : 'Yes' }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-card-section>

      <!-- Action Buttons -->
      <q-card-actions align="center" class="q-gutter-md">
        <q-btn
          color="primary"
          label="Play Again"
          @click="playAgain"
          size="lg"
        />
        <q-btn
          outline
          color="primary"
          label="Change Difficulty"
          @click="newGame"
          size="lg"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useGameStore } from 'src/stores/gameStore';
import { computed } from 'vue'

const router = useRouter();
const gameStore = useGameStore();
const gameState = computed(() => gameStore.gameState);

const playAgain = async () => {
  // Start new game with same settings
  gameStore.startGame(gameState.value.playerName, gameState.value.difficulty);
  await router.push({ name: 'game' });
};

const newGame = async () => {
  // Go back to welcome screen for new settings
  await router.push({ name: 'welcome' });
};
</script>

<style lang="scss" scoped>
.game-over-card {
  width: 100%;
  max-width: 600px;
  margin: 1rem;
}

.stat-card {
  height: 100px;
}
</style>
