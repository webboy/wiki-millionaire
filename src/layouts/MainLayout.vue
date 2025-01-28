<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Wiki Millionaire
        </q-toolbar-title>

        <!-- Show player info if game is in progress -->
        <div v-if="gameState.playerName && !gameState.isGameOver">
          Player: {{ gameState.playerName }} |
          Current Prize: ${{ gameState.currentPrize.toLocaleString() }}
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useGameStore } from 'src/stores/gameStore';

const gameStore = useGameStore();
const { gameState } = gameStore;
</script>
