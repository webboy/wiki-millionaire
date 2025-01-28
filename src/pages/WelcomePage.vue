<!-- src/pages/WelcomePage.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card class="welcome-card q-pa-lg">
      <q-card-section class="text-center q-pb-xl">
        <div class="text-h3 text-primary q-mb-md">Wiki Millionaire</div>
        <div class="text-subtitle1">Test your knowledge and win virtual millions!</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="startGame" class="q-gutter-md">
          <!-- Player Name Input -->
          <q-input
            v-model="playerName"
            label="Your Name"
            :rules="[val => !!val || 'Name is required']"
            outlined
          />

          <!-- Difficulty Selection -->
          <div class="text-subtitle2 q-mb-sm">Select Difficulty:</div>
          <div class="row q-gutter-md justify-center">
            <q-card
              v-for="diff in difficulties"
              :key="diff.value"
              :class="[
                'difficulty-card cursor-pointer',
                selectedDifficulty === diff.value ? 'selected' : ''
              ]"
              bordered
              @click="selectedDifficulty = diff.value"
            >
              <q-card-section>
                <div class="text-h6">{{ diff.label }}</div>
                <div class="text-caption">
                  {{ diff.questions }} questions
                </div>
                <div class="text-caption">
                  {{ diff.time }}s per question
                </div>
                <div class="text-caption">
                  {{ diff.choices }} choices
                </div>
              </q-card-section>
            </q-card>
          </div>

          <!-- Start Button -->
          <div class="row justify-center q-mt-lg">
            <q-btn
              type="submit"
              color="primary"
              size="lg"
              label="Start Game"
              :disable="!isFormValid"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from 'src/stores/gameStore';
import type { Difficulty } from 'src/types/game';

const router = useRouter();
const gameStore = useGameStore();

const playerName = ref('');
const selectedDifficulty = ref<Difficulty>('medium');

const difficulties = [
  {
    value: 'easy' as const,
    label: 'Easy',
    questions: 5,
    time: 120,
    choices: 3
  },
  {
    value: 'medium' as const,
    label: 'Medium',
    questions: 10,
    time: 90,
    choices: 4
  },
  {
    value: 'hard' as const,
    label: 'Hard',
    questions: 15,
    time: 60,
    choices: 6
  }
];

const isFormValid = computed(() => {
  return playerName.value.trim() !== '' && selectedDifficulty.value;
});

const startGame = async () => {
  if (isFormValid.value) {
    gameStore.startGame(playerName.value.trim(), selectedDifficulty.value);
    await router.push({ name: 'game' });
  }
};
</script>

<style lang="scss" scoped>
.welcome-card {
  width: 100%;
  max-width: 600px;
  margin: 1rem;
}

.difficulty-card {
  width: 160px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  &.selected {
    border: 2px solid var(--q-primary);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
}
</style>
