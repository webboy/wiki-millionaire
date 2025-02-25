// src/stores/gameStore.ts
import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { GameState, Difficulty, GameSettings } from '../types/game';
import { GAME_SETTINGS } from '../config/gameSettings';

export const useGameStore = defineStore('game', () => {
  const gameState = ref<GameState>({
    playerName: '',
    difficulty: 'easy',
    currentQuestionIndex: 0,
    currentQuestion: null,
    timeRemaining: 0,
    currentPrize: 0,
    guaranteedPrize: 0,
    lifelinesRemaining: {
      extend_time: true,
      fifty_fifty: true,
      show_hint: true
    },
    isGameOver: false,
    hasWon: false
  });

  // Watch for changes and save to localStorage
  watch(
    gameState,
    (newVal) => {
      localStorage.setItem('wiki-millionaire-game', JSON.stringify(newVal));
    },
    { deep: true }
  );

  // Initialize from localStorage if exists
  if (localStorage.getItem('wiki-millionaire-game')) {
    gameState.value = JSON.parse(
      localStorage.getItem('wiki-millionaire-game') || '{}'
    );
  }

  const startGame = (playerName: string, difficulty: Difficulty): void => {
    const settings = GAME_SETTINGS[difficulty];
    gameState.value = {
      playerName,
      difficulty,
      currentQuestionIndex: 0,
      currentQuestion: null,
      timeRemaining: settings.timePerQuestion,
      currentPrize: 0,
      guaranteedPrize: 0,
      lifelinesRemaining: {
        extend_time: true,
        fifty_fifty: true,
        show_hint: true
      },
      isGameOver: false,
      hasWon: false,
    };
  };

  const updateTimer = (timeRemaining: number) => {
    if (timeRemaining <= 0) {
      // Set time to 0 and mark game as over
      gameState.value.timeRemaining = 0;
      gameOver(false);
    } else {
      gameState.value.timeRemaining = timeRemaining;
    }
  };

  const answerQuestion = (isCorrect: boolean, settings: GameSettings): void => {
    if (isCorrect) {
      gameState.value.currentPrize = settings.moneyProgression[gameState.value.currentQuestionIndex] ?? 0;

      // Update guaranteed prize if at safety net
      if ((gameState.value.currentQuestionIndex + 1) % settings.safetyNetFrequency === 0) {
        gameState.value.guaranteedPrize = gameState.value.currentPrize;
      }

      gameState.value.currentQuestionIndex++;

      if (gameState.value.currentQuestionIndex >= settings.questionsCount) {
        gameOver(true);
      } else {
        gameState.value.timeRemaining = settings.timePerQuestion;
      }
    } else {
      gameOver(false);
    }
  };

  const gameOver = (hasWon: boolean): void => {
    gameState.value.isGameOver = true;
    gameState.value.hasWon = hasWon;
    gameState.value.currentPrize = hasWon
      ? gameState.value.currentPrize
      : gameState.value.guaranteedPrize;
  };

  const getGameState = (): GameState => {
    return gameState.value;
  };

  return {
    gameState,
    startGame,
    updateTimer,
    answerQuestion,
    gameOver,
    getGameState
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot));
}
