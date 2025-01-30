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
              v-for="(lifeline, type) in lifelines"
              :key="type"
              :class="['lifeline-button', { 'lifeline-used': lifeline.isUsed }]"
              :color="lifeline.isUsed ? 'grey-5' : 'primary'"
              round
              :disable="lifeline.isUsed"
              @click="confirmLifeline(lifeline)"
            >
              <q-icon :name="lifeline.icon" size="md" />
              <q-tooltip>{{ lifeline.description }}</q-tooltip>
            </q-btn>
          </div>
        </div>

        <!-- Question section -->
        <q-card :class="'question-card q-pa-lg ' + getQuestionBackgroundClass(currentQuestion)">
          <q-card-section v-if="loadingQuestion" class="text-h5 text-center q-mb-xl">
            <q-spinner-clock /> Loading question...
          </q-card-section>
          <div v-else>
            <q-card-section class="text-h5 q-mb-xl text-primary text-center">
              {{ currentQuestion?.text }}
            </q-card-section>

            <q-card-section class="row q-col-gutter-md justify-center">
              <div v-for="(choice, index) in displayedChoices" :key="index" class="col-12 col-sm-6">
                <q-btn
                  :label="choice"
                  class="choice-button full-width"
                  :color="getChoiceColor(index)"
                  :disable="answered"
                  @click="submitAnswer(index)"
                />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-body1 q-col-gutter-md justify-center">
                <span class="text-bold">Hint: </span> {{ currentQuestion?.hint }}
              </div>
            </q-card-section>
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
            <span class="text-primary text-weight-bold"
              >${{ gameState.currentPrize.toLocaleString() }}</span
            >
          </div>
          <div class="text-subtitle2">
            Guaranteed:
            <span class="text-positive">${{ gameState.guaranteedPrize.toLocaleString() }}</span>
          </div>
        </q-card-section>
        <q-card-section>
          <prize-ladder
            :prizes="settings.moneyProgression"
            :current-question="gameState.currentQuestionIndex"
            :safety-net-frequency="settings.safetyNetFrequency"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useGameStore } from 'src/stores/gameStore'
import { useSettingsStore } from 'src/stores/settingsStore'
import { GAME_SETTINGS } from 'src/config/gameSettings'
import { MediaWikiClient } from 'src/services/wiki/mediaWikiClient'
import { OpenAIQuestionGenerator } from 'src/services/ai/openAiGenerator'
import type { Lifeline, Question } from 'src/types/game'
import { QuestionDifficulty } from 'src/types/game'
import GameTimer from 'src/components/game/GameTimer.vue'
import PrizeLadder from 'src/components/game/PrizeLadder.vue'
import { v4 as uuidv4 } from 'uuid'
import { ExtendTimeLifeline } from 'src/composables/lifelines/extendTimeLifeline'
import { RemoveHalfOptionsLifeline } from 'src/composables/lifelines/removeHalfOptionsLifeline'

const router = useRouter();
const $q = useQuasar();
const gameStore = useGameStore();
const settingsStore = useSettingsStore();
const { settingsState } = settingsStore;
const gameState = computed(() => gameStore.gameState);
const showPrizeLadder = ref(false);

const settings = computed(() => {
  return GAME_SETTINGS[gameState.value.difficulty];
});


const wikiClient = new MediaWikiClient();
const aiGenerator = new OpenAIQuestionGenerator(settingsState.openAIKey);

const currentQuestion = computed(() => gameStore.gameState.currentQuestion);
const currentQuestionIndex = ref(0);
const currentQuestionDifficulty = ref(QuestionDifficulty.EASY);

const answered = ref(false);
const displayedChoices = computed(() => currentQuestion.value?.choices || []);
const timerInterval = ref<number>();
const loadingQuestion = ref(false);

const lifelines = ref([
  new ExtendTimeLifeline(),
  new RemoveHalfOptionsLifeline()
])

const getQuestionBackgroundClass = (question: Question | null) => {
  if (!question) return '';
  if (question.difficulty === QuestionDifficulty.EASY)
  {
    return 'bg-green-3';
  } else if (question.difficulty === QuestionDifficulty.MEDIUM)
  {
    return 'bg-orange-3';
  } else
  {
    return 'bg-red-3';
  }
};

const confirmLifeline = (lifeline: Lifeline) => {
  $q.dialog({
    title: 'Use Lifeline',
    message: `Are you sure you want to use ${lifeline.name}?`,
    cancel: true,
    persistent: true
  }).onOk(() => {
    lifeline.call()
  });
};

const loadQuestion = async () => {
  loadingQuestion.value = true;
  currentQuestionIndex.value++;


  //Use settings to determine the difficulty of the question
  if (currentQuestionIndex.value <= settings.value.difficultyDistribution.easy)
  {
    currentQuestionDifficulty.value = QuestionDifficulty.EASY;
  } else if (currentQuestionIndex.value <= settings.value.difficultyDistribution.easy + settings.value.difficultyDistribution.medium)
  {
    currentQuestionDifficulty.value = QuestionDifficulty.MEDIUM;
  } else
  {
    currentQuestionDifficulty.value = QuestionDifficulty.HARD;
  }

  try {
    const wikiPage = await wikiClient.getRandomPage();
    const questionData = await aiGenerator.generateQuestion(
      wikiPage.summary,
      settings.value.choicesCount,
      currentQuestionDifficulty.value
    );

    if (!questionData.choices || !Array.isArray(questionData.choices)) {
      throw new Error('Invalid question data: choices must be an array');
    }

    const validChoices = questionData.choices.filter((choice: unknown): choice is string =>
      typeof choice === 'string' && choice.length > 0
    );

    gameStore.gameState.currentQuestion = {
      id: uuidv4(),
      text: questionData.question,
      choices: validChoices,
      correctAnswerIndex: questionData.correctAnswerIndex,
      difficulty: currentQuestionDifficulty.value,
      hint: questionData.hint,
      showHint: false,
      wikiSource: {
        pageId: wikiPage.pageId,
        title: wikiPage.title,
        url: wikiPage.url
      }
    };

    startTimer();
    loadingQuestion.value = false;
  } catch (error) {
    console.error(error);
    loadingQuestion.value = false;
    $q.dialog({
      title: 'Error Loading Question',
      message: 'An error occurred while loading the question. Please try again.',
      ok: 'Retry',
      cancel: 'Quit Game',
      persistent: true
    }).onOk(() => {
      void loadQuestion();
    }).onCancel(() => {
      void router.push({ name: 'welcome' });
    })
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
      gameStore.gameState.currentQuestion = null;
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

<style lang="scss"></style>
