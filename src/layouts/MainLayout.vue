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
        <q-separator vertical/>
        <!-- Settings button -->
        <q-btn flat round dense icon="settings" @click="openSettingsDialog" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Settings dialog -->
    <q-dialog v-model="settingsDialogOpen">
      <q-card style="min-width: 350px; max-width: 90vw" class="q-mt-lg">
        <q-card-section>
          <div class="text-h6">Settings</div>
          <div class="text-caption">Configure game settings</div>
        </q-card-section>

        <q-card-section v-if="(openAIKey ==='')">
          <q-input v-model="openAIKey" label="Open AI Key" hint="Enter your Open AI API key" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Save" color="primary" @click="saveSettings" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGameStore } from 'src/stores/gameStore';
import { useSettingsStore } from 'src/stores/settingsStore';
import { useQuasar } from 'quasar'

const $q = useQuasar();
const gameStore = useGameStore();
const settingsStore = useSettingsStore();
const { gameState } = gameStore;
const { settingsState } = settingsStore;

const settingsDialogOpen = ref(false);
const openAIKey = ref(settingsState.openAIKey);

function openSettingsDialog() {
  settingsDialogOpen.value = true;
}

function saveSettings() {
  settingsStore.setOpenAIKey(openAIKey.value);
}

onMounted(() => {
  // Check if the openAiKey is set
  if (!settingsState.openAIKey) {
    $q.dialog({
      title: 'Open AI Key Required',
      message: 'Please enter your Open AI key in settings',
      persistent: true,
      ok: 'Go to Settings',
    }).onOk(() => {
      openSettingsDialog()
    })
  }
});
</script>
