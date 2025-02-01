<!-- src/pages/WelcomePage.vue -->
<template>
  <q-page class="flex flex-center bg-subtle-gray">
    <q-card class="welcome-card">
      <!-- Logo and Title Section -->
      <q-card-section class="text-center q-pt-xl">
        <div class="logo-container q-mb-md">
          <q-avatar size="80px" color="deep-knowledge-blue" text-color="victory-gold">
            <q-icon name="emoji_events" size="50px" />
          </q-avatar>
        </div>
        <div class="text-h3 text-deep-knowledge-blue q-mb-md">{{ $t('pages.welcome.title')}}</div>
        <div class="text-subtitle1 text-royal-wisdom">{{ $t('pages.welcome.description')}}</div>
      </q-card-section>
      <!-- Quick Rules -->
      <q-card-section class="text-center q-pt-none">
        <q-btn
          glossy
          color="info"
          :label="$t('buttons.how_to_play.label')"
          @click="rulesDialog = true"
        />
      </q-card-section>
      <q-card-section class="q-px-lg">
        <q-form @submit="startGame" class="q-gutter-lg">
          <!-- Player Name Input with Icon -->
          <q-input
            v-model="playerName"
            :label="$t('inputs.user_name.label')"
            :rules="[val => !!val || 'Name is required']"
            outlined
            class="name-input"
            :hint="$t('inputs.user_name.hint')"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="deep-knowledge-blue" />
            </template>
          </q-input>
          <!-- Difficulty Selection -->
          <div>
            <div class="text-h6 q-mb-sm text-deep-knowledge-blue">{{ $t('pages.welcome.select_difficulty')}}:</div>
            <div class="row q-col-gutter-md justify-center">
              <div v-for="diff in difficulties" :key="diff.value" class="col-12 col-sm-4">
                <q-card
                  :class="[
                    'difficulty-card cursor-pointer',
                    selectedDifficulty === diff.value ? 'selected' : ''
                  ]"
                  flat
                  bordered
                  @click="selectedDifficulty = diff.value"
                >
                  <q-card-section>
                    <!-- Difficulty Icon -->
                    <div class="difficulty-icon q-mb-sm" :class="diff.value">
                      <q-icon :name="getDifficultyIcon(diff.value)" size="md" />
                    </div>
                    <!-- Difficulty Info -->
                    <div class="text-h6 text-center">{{ diff.label }}</div>
                    <q-list dense class="q-mt-sm">
                      <q-item>
                        <q-item-section avatar>
                          <q-icon name="help" size="xs" />
                        </q-item-section>
                        <q-item-section>{{ diff.questions }}</q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon name="timer" size="xs" />
                        </q-item-section>
                        <q-item-section>{{ diff.time }}</q-item-section>
                      </q-item>
                      <q-item>
                        <q-item-section avatar>
                          <q-icon name="checklist" size="xs" />
                        </q-item-section>
                        <q-item-section>{{ diff.choices }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>

          <!-- Start Button -->
          <div class="row justify-center q-mt-xl">
            <q-btn
              glossy
              type="submit"
              color="primary"
              size="lg"
              class="start-button"
              :disable="!isFormValid"
              padding="16px 48px"
            >
              <div class="row items-center">
                <q-icon name="play_arrow" size="md" class="q-mr-sm" />
                <div class="text-h6">{{ $t('buttons.start.label') }}</div>
              </div>
            </q-btn>
          </div>
        </q-form>
      </q-card-section>


    </q-card>
    <!-- Rules Dialog -->
    <q-dialog v-model="rulesDialog">
      <q-card style="min-width: 350px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t('pages.welcome.how_to_play')}}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <q-list>
            <q-item v-for="(rule, index) in gameRules" :key="index">
              <q-item-section avatar>
                <q-icon :name="rule.icon" color="deep-knowledge-blue" />
              </q-item-section>
              <q-item-section>{{ rule.text }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useGameStore } from 'src/stores/gameStore';
import { GAME_SETTINGS } from 'src/config/gameSettings'
import type { Difficulty } from 'src/types/game';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const gameStore = useGameStore();

const rulesDialog = ref(false);
const t = useI18n().t;

const playerName = ref('');
const selectedDifficulty = ref<Difficulty>('medium');

const difficulties = [
  {
    value: 'easy' as const,
    label: t('difficulties.easy.label'),
    questions: t('difficulties.questions',{count: GAME_SETTINGS['easy'].questionsCount}),
    time: t('difficulties.time_per_question', {time: GAME_SETTINGS['easy'].timePerQuestion}),
    choices: t('difficulties.choices', {count: GAME_SETTINGS['easy'].choicesCount})
  },
  {
    value: 'medium' as const,
    label: t('difficulties.medium.label'),
    questions: t('difficulties.questions',{count: GAME_SETTINGS['medium'].questionsCount}),
    time: t('difficulties.time_per_question', {time: GAME_SETTINGS['medium'].timePerQuestion}),
    choices: t('difficulties.choices', {count: GAME_SETTINGS['medium'].choicesCount})
  },
  {
    value: 'hard' as const,
    label: t('difficulties.hard.label'),
    questions: t('difficulties.questions',{count: GAME_SETTINGS['hard'].questionsCount}),
    time: t('difficulties.time_per_question', {time: GAME_SETTINGS['hard'].timePerQuestion}),
    choices: t('difficulties.choices', {count: GAME_SETTINGS['hard'].choicesCount})
  }
];

const gameRules = [
  { icon: 'quiz', text: t('game_rules.rule_1') },
  { icon: 'schedule', text: t('game_rules.rule_2') },
  { icon: 'trending_up', text: t('game_rules.rule_3') },
  { icon: 'psychology', text: t('game_rules.rule_4') },
  { icon: 'savings', text: t('game_rules.rule_5') }
];

const getDifficultyIcon = (difficulty: Difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 'sentiment_satisfied';
    case 'medium':
      return 'sentiment_neutral';
    case 'hard':
      return 'sentiment_very_dissatisfied';
    default:
      return 'help';
  }
};

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

<style lang="scss">
@import 'src/css/brand-variables.scss';

.welcome-card {
  width: 100%;
  max-width: 800px;
  margin: $space-base;
  border-radius: 16px;
}

.difficulty-card {
  height: 100%;
  transition: all $transition-default ease-in-out;
  border-radius: 12px;

  .difficulty-icon {
    text-align: center;
    padding: 12px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &.easy {
      background: rgba($success-green, 0.1);
      color: $success-green;
    }

    &.medium {
      background: rgba($victory-gold, 0.1);
      color: $victory-gold;
    }

    &.hard {
      background: rgba($alert-red, 0.1);
      color: $alert-red;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  &.selected {
    border: 2px solid $deep-knowledge-blue;
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background: rgba($deep-knowledge-blue, 0.05);
  }
}

.name-input {
  :deep(.q-field__control) {
    border-radius: 8px;
  }
}

.start-button {
  border-radius: 12px;
  font-weight: 700;

  .q-icon {
    transition: transform $transition-quick ease-in-out;
  }

  &:hover {
    .q-icon {
      transform: translateX(4px);
    }
  }
}
</style>
