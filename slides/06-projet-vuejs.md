---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# Projet VueJS

---

## Création

Se créé avec la commande `npm create vue@latest`.
On répond à l'intérogatoire et le projet est créé.
Enfin, `npm install` et le projet est prêt à être lancé.

---

## Structure

- 
  - index.html
  - src/
    - main.js
    - App.vue
    - views/
    - components/
    - assets/
    - router/
    - stores/

---

## Structure d'un .vue

```vue
<script setup>
import { ref } from 'vue';

const name = ref('John');
</script>

<template>
    <input type="text" v-model="name"/>
</template>

<style scoped>
input {
    color: green;
}
</style>
```
