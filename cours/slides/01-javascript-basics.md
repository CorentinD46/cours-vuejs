---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# 01 - Rappel JavaScript

---

## JS c'est quoi ?

- Complément à HTML/CSS
- Langage de scripting initialement côté client
- Code interprété

---

## Client side

- Lancé côté client => dans le navigateur
- Aujourd'hui, utilisé côté serveur

---

## Document managing

```javascript
const switcher = document.getElementById("switcher");
switcher.setAttribute("disabled", true);
```

```javascript
const elements = document.getElementsByTagName("p"); // [{}, {}, ...]
for (let element of elements) {
  const currentColor = element.style.color;
  element.style.color = currentColor === "red" ? "black" : "red";
}
```

---

## Gestion des imports

---

### Export default

```javascript
// utils.js
export default function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
```

```javascript
// script.js
import getRandomInt from "../utils.js";
```

---

### Imports

Export classique :

```javascript
// utils.js
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
```

```javascript
// script.js
import { getRandomInt } from "../utils.js";
```

---

### Export object

```javascript
// utils.js
const getRandomInt = (max) => Math.floor(Math.random() * max);

export { getRandomInt };
```

---

## Asynchronous

- N'attend pas la fin de la ligne 125 pour exécuter la ligne 126.
- Permet de garder la réactivité du site, même si un programme lourd tourne.
- Fonctionne avec des promesses (`Promise`).

---

## Exemple

```javascript
const id = getRandomInt(151) + 1; // 4
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // GET request
  .then((response) => response.json())
  .then((data) => {
    const spriteUrl = data.sprites.other["official-artwork"].front_default;
    console.log(spriteUrl);
  });
console.log("Hello from the text world"); // Print

// Result :
// Hello from the text world
// https://...
```

---

## Travailler avec les promesses

2 possibilités

- Les callbacks
- Async / Await

---

## Promesses et callbacks

```javascript
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) // Async
  .then(
    (response) => response.json(), // Parsing async too
    (error) => console.error(error),
  )
  .then((data) => {
    const spriteUrl = data.sprites.other["official-artwork"].front_default;
    pokemon.setAttribute("src", spriteUrl);
  });
```

---

## Async / Await

```javascript
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
const data = await response.json();
const spriteUrl = data.sprites.other["official-artwork"].front_default;
pokemon.setAttribute("src", spriteUrl);
```

---

## Async / Await 2

```javascript
try {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  const spriteUrl = data.sprites.other["official-artwork"].front_default;
  pokemon.setAttribute("src", spriteUrl);
} catch (error) {
  console.error(error);
}
```
