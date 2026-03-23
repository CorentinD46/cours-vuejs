<script setup lang="js">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Projects</h1>
    <nav>
      <RouterLink to="/">List</RouterLink>
    </nav>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 2px solid #aaa;
  padding-bottom: 25px;
  margin-bottom: 25px;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1rem;
  font-size: 1.2em;
}

nav a {
  text-decoration: underline;
  color: inherit;
}

nav a:hover {
  color: royalblue;
  text-decoration: none;
}
</style>
