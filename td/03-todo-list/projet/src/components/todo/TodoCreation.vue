<script setup>
import DesignedButton from '@/components/DesignedButton.vue'

function sendTodoEvent(_) {
  const splittedTags = tags.value.split(', ');
}
</script>

<template>
  <h2>Créer une tâche</h2>
  <form @submit.prevent="sendTodoEvent">
    <label>Titre <input name="title"/></label>
    <label>Description <input name="description"/></label>

    <label>Status
      <select v-model="status">
        <option selected>Todo</option>
        <option>In progress</option>
        <option>Done</option>
        <option>Won't do</option>
      </select>
    </label>

    <label>Tags <input type="text" name="tags"/></label>

    <DesignedButton type="submit">Créer</DesignedButton>
  </form>
</template>

<style scoped lang="css">
h2 {
  border-top: 1px solid lightgray;
  padding: 30px 0;
  margin-top: 20px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
}

label {
  display: flex;
  justify-content: space-between;
}
</style>
