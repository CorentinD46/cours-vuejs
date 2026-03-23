---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 11 - VueJS templating

---

Dans ce résumé, on ne travaillera qu'avec la **Compisition API**.

---

## References

```javascript
import { ref, computed } from 'vue';

const firstname = ref('John');
const lastname = ref('Doe');

const fullname = computed(() => { return firstname.value + ' ' + lastname.value });
```

---

## Value injection in template

```html
<p>{{ fullname }}</p>
<p>{{ firstname.trim().toLowerCase() }}</p>

<input value="{{ firstname }}"> // Erreur
```

---

## v-bind

```html
<input v-bind:value="firstname" type="text" name="firstname" />
<input :value="lastname" type="text" name="lastname" />
```

---

## v-on

```html
// <script setup> function submit() { ... } </script>

<input
  v-on:input="event => firstname = event.target.value"
  v-bind:value="firstname"
  type="text" name="firstname" />

<input
  @:input="event => lastname = event.target.value"
  :value="lastname"
  type="text" name="lastname" />

<button @click="submit" type="submit">Save</button>
```

---

## v-model

```html
<input
  type="text" name="firstname"
  v-bind:value="firstname"
  v-on:input="event => firstname = event.target.value"
/>
<input v-model="firstname" />

<input
  type="checkbox"
  :checked="isChecked"
  @click="() => isChecked = !isChecked"
/>
<input v-model="isChecked" />
```

---

## Conditional rendering

```html
<input type="number" v-model="numberValue" />

<p v-if="numberValue < 0">Negative</p>
<p v-else-if="numberValue === 0">Zero</p>
<p v-else>Positive</p>
```

---

## Conditional rendering multiple elements

```html
<div v-if="display">H</div>
<div v-if="display">e</div>
<div v-if="display">l</div>
<div v-if="display">l</div>
<div v-if="display">o</div>

// =>

<template v-if="display">
  <div>H</div>
  <div>e</div>
  <div>l</div>
  <div>l</div>
  <div>o</div>
</template>
```

---

## If and Show

```html
// Display = false

// Dans le DOM mais caché
<div v-show="display">Hello</div>

// Absent du DOM
<div v-if="display">Hello</div>
```

---

## Loop in render

```html
<ul>
  <li v-for="product in cart" key="product.id">
    {{ product.name }} {{ product.price }}
  </li>
</ul>
```

---

## Bind with classes and style

```html
<style>
  .biggerFont {
    font-size: 2em;
  }
</style>
<input type="checkbox" v-model="isChecked" />
<div v-bind:class="{ biggerFont: isChecked }">Title</div>
```

```html
<input type="checkbox" v-model="isChecked" />
<div :style="{ fontSize: isChecked ? '2em' : '1em' }">Title</div>
```

---

## Props

### App.vue

```javascript
const firstname = ref('John');
const lastname = ref('Doe');
```

```html
<SayHello :givenName="firstname" :familyName="lastname"/>
```

### SayHello.vue

```javascript
const props = defineProps(['givenName', 'familyName']);

const fullname = computed(() => givenName.value + ' ' + familyName.value);
```

```html
<p>Hello {{ fullname }}</p>
```

---

## Emits

### App.vue

```html
<FormValidation v-on:onSubmit="submitForm" @onCancel="close"/>
```

### FormValidation.vue

```javascript
const emits = defineEmits([ 'onSubmit', 'onCancel' ]);

function submitEvent() {
  console.log("emit submit")
  emits('onSubmit');
}
```

```html
<button v-on:click="submitEvent">Submit</button>
<button @click="$emit("onCancel")">Cancel</button>
```

---

## Composant

```javascript
<script setup>
import { computed, ref } from 'vue';
import Button from './MyButton.vue';

const counter = ref(0);
const double = computed(() => coutner.value * 2);
function increment() { counter++ };
</script>

<template><div class="main">
    <Button @onClick="increment"/>
    <p>{{ double }}</p>
</div></template>

<style scoped>
.main {
  color: blue;
}
</style>
```
