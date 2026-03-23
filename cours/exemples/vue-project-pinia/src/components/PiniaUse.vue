<script setup lang="js">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'

const counterStore = useCounterStore()

const tripleCount = computed(() => counterStore.count * 3)
</script>
<template>
  <div>
    <h1>Counter: {{ counterStore.count }}</h1>
    <h2>Double: {{ counterStore.doubleCount }}</h2>
    <h2>Triple: {{ tripleCount }}</h2>
    <button @click="counterStore.increment()">Increment</button>
  </div>
</template>
