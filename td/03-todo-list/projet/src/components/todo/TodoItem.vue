<script setup lang="js">
import TagList from './TagList.vue';

defineProps(['todo'])
</script>

<template>
  <li class="todo-item">
    <h3>{{ todo.title }}</h3>
    <span>{{ todo.status }}</span>
    <TagList :tags="todo.tags"/>
  </li>
</template>

<style lang="css" scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #aaa;
}

h3 {
  flex-basis: 400px;
  overflow: hidden;
  font-size: 1.2em;
}
</style>
