<script setup lang="js">
import TodoItem from './TodoItem.vue'

defineProps(['todos'])
</script>

<template>
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<style lang="css" scoped>
ul {
  list-style: none;
}
</style>
