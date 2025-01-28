<!-- src/components/game/GameLifelines.vue -->
<template>
  <div class="row q-gutter-md">
    <q-btn
      flat
      round
      color="primary"
      :disable="!lifelines.extendTime"
      @click="useLifeline('extendTime')"
      icon="schedule"
    >
      <q-tooltip>Add 30 seconds</q-tooltip>
    </q-btn>

    <q-btn
      flat
      round
      color="primary"
      :disable="!lifelines.split"
      @click="useLifeline('split')"
      icon="call_split"
    >
      <q-tooltip>Remove half of wrong answers</q-tooltip>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  lifelines: {
    extendTime: boolean;
    split: boolean;
  }
}>()
const emit = defineEmits<{
  (e: 'use-lifeline', type: 'extendTime' | 'split'): void;
}>();

const useLifeline = (type: 'extendTime' | 'split') => {
  emit('use-lifeline', type);
};
</script>
