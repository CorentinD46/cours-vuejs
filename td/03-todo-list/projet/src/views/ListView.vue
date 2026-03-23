<script setup lang="js">
import todos from '@/assets/todos.js'
import Button from '@/components/DesignedButton.vue';
import TodoCreation from '@/components/todo/TodoCreation.vue'
import TodoList from '@/components/todo/TodoList.vue';

</script>

<template>
  <div class="list-view">
    <h2>List</h2>
    <TodoList :todos="todos" />
    <TodoCreation/>
  </div>
</template>

<style lang="css" scoped>
.list-view {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h2 {
  font-size: 1.5em;
}
</style>
