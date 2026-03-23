---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 08 - Les stores avec Pinia

---

## Utilité

Permet de définir un state global à une application et intéragir avec ce state depuis n'importe quel composant.

### Paquet NPM

`"pinia": "^X.Y.Z"`

---

## Setup de Pinia

```javascript
createApp(App).use(createPinia()).mount("#app");
```

---

## Création d'un store - Options API

```javascript
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2;
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

---

## Création d'un store - Setup API

```javascript
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }
  return {
    count,
    doubleCount,
    increment,
  };
});
```

---

## Utilisation d'un store - Options API

```javascript
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      name: "Adrien",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["count"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
  },
  template: `
  <div>
    <p>{{ name}} counted: {{ count }} times</p>
    <button @click="increment">Increment</button>
  </div>
  `,
};
```

---

## Utilisation d'un store - Setup API

```javascript
import { computed } from "vue";
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const counterStore = useCounterStore();
    const doubleCount = computed(() => counterStore.count * 2);
  },
  template: `
  <div>
    <p>Counted: {{ counterStore.count }} times</p>
    <p>Double count: {{ doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
  `,
};
```
