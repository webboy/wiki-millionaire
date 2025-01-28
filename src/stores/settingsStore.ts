// src/stores/settingsStore.ts
import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { SettingsState } from '../types/settings';

export const useSettingsStore = defineStore('settings', () => {
  const settingsState = ref<SettingsState>({
    openAIKey: ''
  });

  // Watch for changes and save to localStorage
  watch(
    settingsState,
    (newVal) => {
      localStorage.setItem('wiki-millionaire-settings', JSON.stringify(newVal));
    },
    { deep: true }
  );

  // Initialize from localStorage if exists
  if (localStorage.getItem('wiki-millionaire-settings')) {
    settingsState.value = JSON.parse(
      localStorage.getItem('wiki-millionaire-settings') || '{}'
    );
  }

  const setOpenAIKey = (key: string): void => {
    settingsState.value.openAIKey = key;
  };

  const getOpenAIKey = (): string => {
    return settingsState.value.openAIKey;
  };

  return {
    settingsState,
    setOpenAIKey,
    getOpenAIKey
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
}
