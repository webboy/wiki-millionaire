<!-- src/components/game/GameTimer.vue -->
<template>
  <div class="timer-container">
    <q-circular-progress
      :value="percentage"
      size="60px"
      :color="timerColor"
      show-value
      center-color="grey-1"
      track-color="grey-3"
    >
      {{ remainingTime }}
    </q-circular-progress>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  totalTime: number;
  remainingTime: number;
}>();

const percentage = computed(() => {
  return (props.remainingTime / props.totalTime) * 100;
});

const timerColor = computed(() => {
  if (props.remainingTime <= 10) return 'red';
  if (props.remainingTime <= 30) return 'orange';
  return 'primary';
});
</script>
