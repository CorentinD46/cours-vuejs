<script setup>
import { RouterView } from 'vue-router';
import ProjectHeader from './components/ProjectHeader.vue'
</script>

<template>
  <div class="app">
    <ProjectHeader />
    <RouterView />
  </div>
</template>

<style lang="css">
.app {
  padding: 10px 30px;

  font-size: 18px;
}
</style>
