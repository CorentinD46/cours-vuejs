<script setup lang="js">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const status = ref('todo')

function submitForm() {
  console.log('Creating project', name.value, 'with status', status.value)
  router.push({ name: 'list' })
}
</script>

<template>
  <div class="create-view">
    <h2>Create a new project</h2>

    <form @submit.prevent.stop="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="name"
          placeholder="The greatest project"
        />
      </div>

      <div class="form-group">
        <label for="status">Starting status</label>
        <select id="status" name="status" v-model="status">
          <option value="todo">Todo</option>
          <option value="in-progress">In progress</option>
          <option value="won't-do">Won't do</option>
          <option value="done">Done</option>
        </select>
      </div>

      <button type="submit">Create</button>
    </form>
  </div>
</template>

<style lang="css" scoped>
.create-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 20px;
}

.form-group {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.form-group label::after {
  content: ':';
}

button {
  margin-top: 10px;
  width: fit-content;
  padding: 5px 10px;
  align-self: flex-end;
}
</style>
