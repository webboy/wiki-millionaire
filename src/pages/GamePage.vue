<!-- src/pages/GamePage.vue -->
<template>
  <q-page class="row">
    <!-- Left side - Prize ladder (hidden on small screens by default) -->
    <div class="col-auto">
      <!-- Toggle button for mobile -->
      <q-btn
        class="prize-ladder-toggle q-mt-sm lt-md"
        flat
        round
        color="primary"
        icon="menu"
        @click="showPrizeLadder = true"
      />
    </div>

    <!-- Center - Main game area -->
    <div class="col-grow q-pa-md">
      <div class="column full-height">
        <!-- Top section - Timer and lifelines -->
        <div class="row items-center justify-between q-mb-lg">
          <game-timer
            class="col-auto"
            :total-time="settings.timePerQuestion"
            :remaining-time="gameState.timeRemaining"
          />
          <div class="col-auto row q-gutter-md">
            <q-btn
              v-for="(available, type) in gameState.lifelinesRemaining"
              :key="type"
              :class="[
                'lifeline-button',
                { 'lifeline-used': !available }
              ]"
              :color="available ? 'primary' : 'grey-5'"
              round
              :disable="!available"
              @click="confirmLifeline(type as 'extendTime' | 'split')"
            >
              <q-icon :name="getLifelineIcon(type)" size="md" />
              <q-tooltip>{{ getLifelineTooltip(type) }}</q-tooltip>
            </q-btn>
          </div>
        </div>

        <!-- Question section -->
        <q-card class="question-card q-pa-lg">
          <div v-if="loadingQuestion" class="text-h5 text-center q-mb-xl">
            <q-spinner-clock/> Loading question...
          </div>
          <div v-else>
            <div class="text-h5 q-mb-xl text-primary text-center">
              {{ currentQuestion?.text }}
            </div>

            <div class="row q-col-gutter-md justify-center">
              <div
                v-for="(choice, index) in displayedChoices"
                :key="index"
                class="col-12 col-sm-6"
              >
                <q-btn
                  :label="choice"
                  class="choice-button full-width"
                  :color="getChoiceColor(index)"
                  :disable="answered"
                  @click="submitAnswer(index)"
                />
              </div>
            </div>
          </div>
        </q-card>

        <!-- Source citation -->
        <div class="text-caption q-mt-md text-center" v-if="currentQuestion?.wikiSource">
          Source: {{ currentQuestion.wikiSource.title }}
        </div>
      </div>
    </div>
    <!-- Mobile Prize Ladder Dialog -->
    <q-dialog v-model="showPrizeLadder" position="left">
      <q-card class="prize-ladder-dialog">
        <q-card-section>
          <div class="text-h6">{{ gameState.playerName }}</div>
          <div class="text-subtitle1 q-mt-md">
            Current Prize:
            <span class="text-primary text-weight-bold">${{ gameState.currentPrize.toLocaleString() }}</span>
          </div>
          <div class="text-subtitle2">
            Guaranteed:
            <span class="text-positive">${{ gameState.guaranteedPrize.toLocaleString() }}</span>
          </div>
        </q-card-section>
        <q-card-section>
          <prize-ladder
            :prizes="settings.moneyProgression"
            :current-question="gameState.currentQuestion"
            :safety-net-frequency="settings.safetyNetFrequency"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useGameStore } from 'src/stores/gameStore';
import { GAME_SETTINGS } from 'src/config/gameSettings';
import { MediaWikiClient } from 'src/services/wiki/mediaWikiClient';
import { OpenAIQuestionGenerator } from 'src/services/ai/openAiGenerator';
import type { Question } from 'src/types/game';
import GameTimer from 'src/components/game/GameTimer.vue';
import PrizeLadder from 'src/components/game/PrizeLadder.vue';
import { v4 as uuidv4 } from 'uuid';

const router = useRouter();
const $q = useQuasar();
const gameStore = useGameStore();
const gameState = computed(() => gameStore.gameState);
const showPrizeLadder = ref(false);

const settings = computed(() => {
  return GAME_SETTINGS[gameState.value.difficulty];
});

const wikiClient = new MediaWikiClient();
const aiGenerator = new OpenAIQuestionGenerator(import.meta.env.VITE_OPENAI_API_KEY || 'No Api Key');

const currentQuestion = ref<Question | null>(null);
const answered = ref(false);
const displayedChoices = ref<string[]>([]);
const timerInterval = ref<number>();
const loadingQuestion = ref(false);

const getLifelineIcon = (type: string) => {
  return type === 'extendTime' ? 'timer' : 'call_split';
};

const getLifelineTooltip = (type: string) => {
  return type === 'extendTime' ? 'Add 30 seconds' : 'Remove half of wrong answers';
};

const confirmLifeline = (type: 'extendTime' | 'split') => {
  $q.dialog({
    title: 'Use Lifeline',
    message: `Are you sure you want to use ${type === 'extendTime' ? 'Time Extension' : 'Split'} lifeline?`,
    cancel: true,
    persistent: true
  }).onOk(() => {
    handleLifeline(type);
  });
};

const loadQuestion = async () => {
  loadingQuestion.value = true;
  try {
    const wikiPage = await wikiClient.getRandomPage();
    const questionData = await aiGenerator.generateQuestion(
      wikiPage.summary,
      settings.value.choicesCount
    );

    if (!questionData.choices || !Array.isArray(questionData.choices)) {
      throw new Error('Invalid question data: choices must be an array');
    }

    const validChoices = questionData.choices.filter((choice: unknown): choice is string =>
      typeof choice === 'string' && choice.length > 0
    );

    const question: Question = {
      id: uuidv4(),
      text: questionData.question,
      choices: validChoices,
      correctAnswerIndex: questionData.correctAnswerIndex,
      wikiSource: {
        pageId: wikiPage.pageId,
        title: wikiPage.title,
        url: wikiPage.url
      }
    };

    currentQuestion.value = question;
    displayedChoices.value = validChoices;
    startTimer();
    loadingQuestion.value = false;
  } catch (error) {
    console.error('Error loading question:', error);
    loadingQuestion.value = false;
  }
};

const startTimer = () => {
  if (timerInterval.value) {
    window.clearInterval(timerInterval.value);
  }

  timerInterval.value = window.setInterval(() => {
    if (gameState.value.timeRemaining > 0) {
      if (gameState.value.timeRemaining === 1) {
        // Time's up - handle as wrong answer
        if (timerInterval.value) {
          window.clearInterval(timerInterval.value);
        }
        handleTimeUp();
      } else {
        gameStore.updateTimer(gameState.value.timeRemaining - 1);
      }
    }
  }, 1000);
};

const handleTimeUp = () => {
  answered.value = true;

  // Show the correct answer for a moment
  setTimeout(() => {
    gameStore.answerQuestion(false, settings.value);
    void router.push({ name: 'gameOver' });
  }, 2000);
};

const handleLifeline = (type: 'extendTime' | 'split') => {
  if (type === 'extendTime') {
    // Add 30 seconds to current time
    const newTime = gameState.value.timeRemaining + 30;
    gameStore.updateTimer(newTime);
  } else if (type === 'split' && currentQuestion.value) {
    const correctIndex = currentQuestion.value.correctAnswerIndex;
    const correctAnswer = currentQuestion.value.choices[correctIndex];

    // Get array of wrong answers
    const wrongAnswers = currentQuestion.value.choices
      .filter((_, index) => index !== correctIndex);

    // Keep only half of wrong answers
    const keepCount = Math.floor(wrongAnswers.length / 2);
    const keptWrong = wrongAnswers
      .sort(() => Math.random() - 0.5)
      .slice(0, keepCount);

    // Filter out undefined values
    displayedChoices.value = [correctAnswer, ...keptWrong]
      .filter((choice): choice is string => choice !== undefined)
      .sort(() => Math.random() - 0.5);
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
      answered.value = false;
      currentQuestion.value = null;
      await loadQuestion();
    }
  };

  setTimeout(() => {
    void handleAnswer();
  }, 2000);
};

const getChoiceColor = (index: number) => {
  if (!answered.value) return 'primary';

  if (currentQuestion.value?.correctAnswerIndex === index) {
    return 'positive';
  }
  return 'negative';
};

onMounted(() => {
  void loadQuestion();
});

onUnmounted(() => {
  if (timerInterval.value) {
    window.clearInterval(timerInterval.value);
  }
});
</script>

<style lang="scss">
</style>
