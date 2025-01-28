<!-- src/pages/GamePage.vue -->
<template>
  <q-page class="row">
    <!-- Left side - Prize ladder -->
    <div class="col-3 q-pa-md">
      <prize-ladder
        :prizes="settings.moneyProgression"
        :current-question="gameState.currentQuestion"
        :safety-net-frequency="settings.safetyNetFrequency"
      />
    </div>

    <!-- Center - Main game area -->
    <div class="col-6 q-pa-md">
      <div class="column full-height">
        <!-- Top section - Timer and lifelines -->
        <div class="row items-center justify-between q-mb-lg">
          <game-timer
            :total-time="settings.timePerQuestion"
            :remaining-time="gameState.timeRemaining"
          />
          <game-lifelines
            :lifelines="gameState.lifelinesRemaining"
            @use-lifeline="handleLifeline"
          />
        </div>

        <!-- Question section -->
        <q-card class="question-card q-pa-md">
          <div class="text-h6 q-mb-md">{{ currentQuestion?.text }}</div>

          <div class="row q-gutter-md justify-center">
            <q-btn
              v-for="(choice, index) in displayedChoices"
              :key="index"
              :label="choice"
              class="choice-button col-5"
              :color="getChoiceColor(index)"
              :disable="answered"
              @click="submitAnswer(index)"
            />
          </div>
        </q-card>

        <!-- Source citation -->
        <div class="text-caption q-mt-md" v-if="currentQuestion?.wikiSource">
          Source: {{ currentQuestion.wikiSource.title }}
        </div>
      </div>
    </div>

    <!-- Right side - Stats -->
    <div class="col-3 q-pa-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ gameState.playerName }}</div>
          <div class="text-subtitle2">
            Current Prize: ${{ gameState.currentPrize.toLocaleString() }}
          </div>
          <div class="text-subtitle2">
            Guaranteed: ${{ gameState.guaranteedPrize.toLocaleString() }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from 'src/stores/gameStore';
import { GAME_SETTINGS } from 'src/config/gameSettings';
import { MediaWikiClient } from 'src/services/wiki/mediaWikiClient';
import { OpenAIQuestionGenerator } from 'src/services/ai/openAiGenerator';
import type { Question } from 'src/types/game';
import GameTimer from 'src/components/game/GameTimer.vue';
import GameLifelines from 'src/components/game/GameLifelines.vue';
import PrizeLadder from 'src/components/game/PrizeLadder.vue';
import { v4 as uuidv4 } from 'uuid';


const router = useRouter();
const gameStore = useGameStore();
const gameState = computed(() => gameStore.gameState);

const settings = computed(() => {
  return GAME_SETTINGS[gameState.value.difficulty];
});

const wikiClient = new MediaWikiClient();
const aiGenerator = new OpenAIQuestionGenerator(import.meta.env.VITE_OPENAI_API_KEY || 'No Api Key');

const currentQuestion = ref<Question | null>(null);
const answered = ref(false);
const displayedChoices = ref<string[]>([]);
const timerInterval = ref<number | null>(null);

const loadQuestion = async () => {
  try {
    const wikiPage = await wikiClient.getRandomPage();
    const questionData = await aiGenerator.generateQuestion(
      wikiPage.summary,
      settings.value.choicesCount
    );

    if (!questionData.choices || !Array.isArray(questionData.choices)) {
      throw new Error('Invalid question data: choices must be an array');
    }

    // Add type annotation to the 'choice' parameter
    const validChoices = questionData.choices.filter((choice: unknown): choice is string =>
      typeof choice === 'string' && choice.length > 0
    );

    currentQuestion.value = {
      id: uuidv4(),
      text: questionData.text,
      choices: validChoices,
      correctAnswerIndex: questionData.correctAnswerIndex,
      wikiSource: {
        pageId: wikiPage.pageId,
        title: wikiPage.title,
        url: wikiPage.url
      }
    };

    displayedChoices.value = validChoices;
    startTimer();
  } catch (error) {
    console.error('Error loading question:', error);
    // Handle error - maybe retry or show error message
  }
};

const startTimer = () => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
  }

  timerInterval.value = window.setInterval(() => {
    if (gameState.value.timeRemaining > 0) {
      gameStore.updateTimer(gameState.value.timeRemaining - 1);
    }
  }, 1000);
};

const handleLifeline = (type: 'extendTime' | 'split') => {
  if (type === 'split' && currentQuestion.value) {
    // Ensure we have a valid correct answer
    const correctIndex = currentQuestion.value.correctAnswerIndex;
    const correctAnswer = currentQuestion.value.choices[correctIndex] as string;

    // Get wrong answers and ensure they're all strings
    const wrongAnswers = currentQuestion.value.choices
      .filter((_, index) => index !== correctIndex)
      .filter((answer): answer is string => typeof answer === 'string');

    // Randomly select half of wrong answers to keep
    const keepCount = Math.floor(wrongAnswers.length / 2);
    const keptWrong = wrongAnswers
      .sort(() => Math.random() - 0.5)
      .slice(0, keepCount);

    // All elements are guaranteed to be strings now
    const newChoices: string[] = [correctAnswer, ...keptWrong];
    displayedChoices.value = newChoices.sort(() => Math.random() - 0.5);
  }

  gameStore.useLifeline(type);
};

const submitAnswer = (index: number) => {
  if (!currentQuestion.value) return;

  answered.value = true;
  const isCorrect = index === currentQuestion.value.correctAnswerIndex;

  const handleAnswer = async () => {
    gameStore.answerQuestion(isCorrect, settings.value);

    if (gameState.value.isGameOver) {
      await router.push({ name: 'gameOver' });
    } else {
      // Reset for next question
      answered.value = false;
      currentQuestion.value = null;
      await loadQuestion(); // Add await here
    }
  };

  // Show correct/wrong answer for a moment before proceeding
  setTimeout(() => {
    void handleAnswer(); // void operator to explicitly ignore the promise
  }, 2000);
};

const getChoiceColor = (index: number) => {
  if (!answered.value) return 'primary';

  if (currentQuestion.value?.correctAnswerIndex === index) {
    return 'positive';
  }
  return 'negative';
};

// Lifecycle hooks
onMounted(() => {
  void loadQuestion();
});

onUnmounted(() => {
  if (timerInterval.value) {
    clearInterval(timerInterval.value);
  }
});
</script>

<style lang="scss" scoped>
.question-card {
  min-height: 300px;
}

.choice-button {
  min-height: 60px;
  white-space: normal;
  text-align: left;
}
</style>
