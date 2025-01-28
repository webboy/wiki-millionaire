<!-- src/components/game/PrizeLadder.vue -->
<template>
  <q-list bordered class="prize-ladder">
    <q-item
      v-for="(prize, index) in prizes.slice().reverse()"
      :key="index"
      :class="{
        'bg-primary text-white': currentQuestion === (prizes.length - 1 - index),
        'bg-positive text-white': index < prizes.length - 1 - currentQuestion,
        'bg-grey-3': index > prizes.length - 1 - currentQuestion,
        'safe-point': (prizes.length - 1 - index) % safetyNetFrequency === 0
      }"
    >
      <q-item-section>
        Question {{ prizes.length - index }}
      </q-item-section>
      <q-item-section side>
        ${{ prize.toLocaleString() }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
defineProps<{
  prizes: number[];
  currentQuestion: number;
  safetyNetFrequency: number;
}>();
</script>

<style lang="scss" scoped>
.prize-ladder {
  width: 250px;
  .safe-point {
    border-bottom: 2px solid var(--q-primary);
  }
}
</style>
