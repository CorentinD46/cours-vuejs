---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 03 - VueJS - Composants

---

## Principe des composants

A quoi ça sert ?

---

![Page web avec des cartes](schemas/0301_components.png)

---

![Page web avec des cartes](schemas/0302_card_components.png)

---

## Les objectifs

- Augmenter la réutilisabilité des composants
- Simplifier la base de code
  - Réduire le risque de bug
  - Faciliter la maintenance

---

## Le découpage d'une carte en composants

![Découpage d'une carte en composants](schemas/0303_component_structure.png)

---

## Déclarer un composant - Options API

```javascript
export default {
  components: {}, // Composants utilisés par le composant courant
  props: [], // Propriétés reçues
  emits: [], // Evenements levés
  data() {
    return {};
  }, // Données internes
  computed: {}, // Données calculées
  methods: {}, // Méthodes internes
  template: ``, // Template à rendre
};
```

---

## Déclarer un composant - Options API (suite)

```javascript
export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `<div>
    <span>{{ count }}</span>
    <button @click="count++">Increment</button>
  </div>`,
};
```

---

## Déclarer un composant - Composition API

```javascript
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
  <p>{{ count }}</p>
  <button @click="count++">Increment</button>
  `,
};
```

---

## Déclarer un composant - Composition API SFC

Single File Component.  
**Uniquement avec un outil de build.**

```javascript
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <p>{{ count }}</p>
  <button @click="count++">Increment</button>
</template>
```
