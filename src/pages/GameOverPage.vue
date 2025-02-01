<!-- src/pages/GameOverPage.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card class="game-over-card q-pa-lg">
      <!-- Result Header -->
      <q-card-section class="text-center">
        <div class="text-h3 text-weight-bold" :class="gameState.hasWon ? 'text-positive' : 'text-negative'">
          {{ gameState.hasWon ? $t('pages.game_over.congrats') : $t('pages.game_over.game_over') }}
        </div>
        <div class="text-h5">{{ gameState.playerName }}</div>
      </q-card-section>
      <!-- Prize Information -->
      <q-card-section class="text-center">
        <div class="text-h6 q-mb-md">
          {{ $t('pages.game_over.you_won') }}
        </div>
        <div class="text-h4 text-primary q-mb-lg">
          ${{ gameState.currentPrize.toLocaleString() }}
        </div>

        <!-- Game Statistics -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-xs-12 col-sm-6">
            <q-card flat bordered class="bg-grey-3">
              <q-card-section>
                <div class="text-subtitle2">{{ $t('pages.game_over.questions_answered') }}</div>
                <div class="text-h6">{{ gameState.currentQuestionIndex }}</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-card flat bordered class="bg-grey-3">
              <q-card-section>
                <div class="text-subtitle2">{{ $t('pages.game_over.difficulty') }}</div>
                <div class="text-h6 text-capitalize">{{ gameState.difficulty }}</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Lifelines Usage -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-12">
            <q-card flat bordered class="bg-grey-3">
              <q-card-section>
                <div class="text-subtitle2">{{ $t('pages.game_over.used_lifelines') }}:</div>
                <div class="text-caption">
                  {{ $t('lifelines.extend_time.label')}}: {{ gameState.lifelinesRemaining.extend_time ? $t('common.no') : $t('common.yes') }}
                </div>
                <div class="text-caption">
                  {{ $t('lifelines.fifty_fifty.label')}}: {{ gameState.lifelinesRemaining.fifty_fifty ? $t('common.no') : $t('common.yes') }}
                </div>
                <div class="text-caption">
                  {{ $t('lifelines.show_hint.label')}}: {{ gameState.lifelinesRemaining.show_hint ? $t('common.no') : $t('common.yes') }}
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
          :label="$t('buttons.play_again.label')"
          @click="playAgain"
          size="lg"
        />
        <q-btn
          outline
          color="primary"
          :label="$t('buttons.change_difficulty.label')"
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
