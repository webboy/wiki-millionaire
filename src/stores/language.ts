// src/stores/language.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Language } from '../types/language'

export const useLanguageStore = defineStore('language', () => {
  // State
  const currentLocale = ref<string>('en-US')

  // Available languages
  const languages: Language[] = [
    {
      label: 'English',
      value: 'en-US',
      code: 'en'
    },
    {
      label: 'Српски',
      value: 'sr-Cyr',
      code: 'sr'
    },
  ]

  const setCurrentLocale = (locale: string) => {
    localStorage.setItem('selectedLocale', locale);
    currentLocale.value = locale
  }

  const getCurrentLanguage = () => {
    console.log('currentLocale.value', currentLocale.value);
    return languages.find((language) => language.value === currentLocale.value)
  }

  const availableLanguages = computed(() => languages)

  // Load current locale from local storage
  currentLocale.value = (localStorage.getItem('selectedLocale') as string) || 'en-US';

  return {
    // State
    currentLocale,
    setCurrentLocale,
    // Getters
    availableLanguages,
    getCurrentLanguage
  }
})
