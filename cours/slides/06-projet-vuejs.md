---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 06 - Projet VueJS

---

## Structure d'un .vue

```vue
<script setup>
import { ref } from "vue";

const name = ref("John");
</script>

<template>
  <input type="text" v-model="name" />
</template>

<style scoped>
input {
  color: green;
}
</style>
```

---

## Structure d'un .vue (suite)

```vue
<script setup>
const props = defineProps(['name']);
const emits = defineEmits(['onClick']);

console.log(props.name)
function buttonClick() {
  emits('onClick');
}
</script>

<template>
<button @click="$emit('onClick')">{{ name }}</button>
<button @click="buttonClick">{{ name }}</button>
</template>
```

---

## Création

Se créé avec la commande `npm create vue@latest`.
On répond à l'intérogatoire et le projet est créé.
Enfin, `npm install` et le projet est prêt à être lancé.

---

## Structure

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

## JSConfig

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```
