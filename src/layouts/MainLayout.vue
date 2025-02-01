<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('common.app_name') }}
        </q-toolbar-title>
        <q-separator vertical />
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
          <div class="text-h6">{{ $t('settings.settings')}}</div>
          <div class="text-caption">{{ $t('settings.subtitle')}}</div>
          <div class="text-caption">{{ $t('settings.version')}}: {{ AppVersion }}</div>
        </q-card-section>

        <q-card-section>
          <div class="text-caption">
            {{ $t('settings.api_key_description')}}
          </div>
          <q-input v-model="openAIKey" :label="$t('inputs.open_ai_key.label')" :hint="$t('inputs.open_ai_key.hint')" />
        </q-card-section>
        <q-card-section>
          <div class="text-caption">
            {{ $t('settings.language')}}
          </div>
          <q-select
            :label="$t('settings.language')"
            v-model="locale"
            :options="localeOptions"
            map-options
            option-label="label"
            option-value="value"
            emit-value
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('buttons.cancel.label')" color="primary" v-close-popup />
          <q-btn flat :label="$t('buttons.save.label')" color="primary" @click="saveSettings" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useSettingsStore } from 'src/stores/settingsStore'
import { useQuasar } from 'quasar'
import { useI18n} from 'vue-i18n'
import { useLanguageStore } from 'stores/language'

const $q = useQuasar()
const settingsStore = useSettingsStore()
const languageStore = useLanguageStore()
const { settingsState } = settingsStore

const { locale } = useI18n({ useScope: 'global' })

const localeOptions = computed(() => {
  return languageStore.availableLanguages
})

const settingsDialogOpen = ref(false)
const openAIKey = ref(settingsState.openAIKey)
const AppVersion = ref(import.meta.env.VITE_APP_VERSION)

function openSettingsDialog() {
  settingsDialogOpen.value = true
}

function saveSettings() {
  settingsStore.setOpenAIKey(openAIKey.value)

  // Save the selected language to local storage
  languageStore.setCurrentLocale(locale.value)

  // Refresh the page to apply the new language
  location.reload()
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
})
</script>
