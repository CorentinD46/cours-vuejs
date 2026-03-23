---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 02 - VueJS templating introduction

---

## References

```javascript
import { ref } from 'vue';

setup() {
    const user = ref(new User());
}
```

---

## Value injection

`{{ variableToInject }}`

```javascript
<div>
    <p>{{ user.username }}</p>
    <p>{{ user.address }}</p>
</div>
```

```javascript
<p>{{ user.username.trim().toLowerCase() }}</p>
```

---

## Attribute binding

```html
<div v-bind:id="user.id">
  <p>{{ user.username }}</p>
  <p>{{ user.address }}</p>
</div>
```

---

## Event handling

```html
<form v-on:submit.prevent="submitForm" v-on:keyup.enter="submitForm">
  <button v-on:click="incrementCounter">Increment</button>
  <input v-on:input="event => text = event.target.value" v-bind:value="text" />
  <button type="submit">Submit</button>
</form>
```

---

## Model management

```html
<input
  type="text"
  v-bind:value="text"
  v-on:input="event => text = event.target.value"
/>
<input v-model="text" />

<input
  type="checkbox"
  v-bind:checked="isChecked"
  v-on:click="_ => isChecked = !isChecked"
/>
<input v-model="isChecked" />
```

---

## Computed references

```html
<input v-model="firstname" />
<input v-model="lastname" />
<p>{{ fullname }}</p>

<script>
  setup() {
      const firstname = ref('Jean')
      const lastname = ref('Dupond')
      const fullname = computed(() => `${firstname} ${lastname}`)
      return {
          firstname,
          fullname,
          lastname,
      }
  }
</script>
```

---

## Conditional rendering

```html
<input type="checkbox" v-model="display" />
<div v-if="display">Hello</div>
```

```html
<input type="checkbox" v-model="display" />
<div v-if="display">Hello</div>
<div v-else>Good bye</div>
```

---

## Conditional rendering multiple elements

```html
<div v-if="display">H</div>
<div v-if="display">e</div>
<div v-if="display">l</div>
<div v-if="display">l</div>
<div v-if="display">o</div>
```

---

## Conditional rendering multiple elements - Solved

```html
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
<div v-show="display">Hello</div>

<div v-if="display">Hello</div>
```

---

## Loop in render

```html
<ul>
  <li v-for="product in cart">{{ product.name }} {{ product.price }}</li>
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
<div v-bind:style="{ font-size: isChecked ? '2em' : '1em' }">Title</div>
```
