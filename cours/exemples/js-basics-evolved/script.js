import { getRandomInt } from "../utils.js"

document.getElementById("switcher").addEventListener("click", () => {
  const elements = document.getElementsByTagName("p")
  for (let element of elements) {
    const currentColor = element.style.color
    element.style.color = currentColor === "red" ? "black" : "red"
  }
})

const catchThemAll = document.getElementById("catch-them-all");

/* Asynchronous with Promise callback */
catchThemAll.addEventListener("click", () => {
  let pokemon = document.getElementById("pokemon");
  if (!pokemon) {
    pokemon = document.createElement("img");
    pokemon.id = "pokemon";
    document.body.append(pokemon);
  }

  const id = getRandomInt(151) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const spriteUrl = data.sprites.other["official-artwork"].front_default;
      pokemon.setAttribute("src", spriteUrl);
    });
});

/* Asynchronous test */
// catchThemAll.addEventListener("click", () => {
//   console.clear();

//   let pokemon = document.getElementById("pokemon");
//   if (!pokemon) {
//     pokemon = document.createElement("img");
//     pokemon.id = "pokemon";
//     document.body.append(pokemon);
//   }

//   const id = getRandomInt(151) + 1;
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       const spriteUrl = data.sprites.other["official-artwork"].front_default;
//       pokemon.setAttribute("src", spriteUrl);
//     });
//   console.log("Hello from the text world");
// });

/* Asynchronous with async await */
// catchThemAll.addEventListener("click", async () => {
//   let pokemon = document.getElementById("pokemon");
//   if (!pokemon) {
//     pokemon = document.createElement("img");
//     pokemon.id = "pokemon";
//     document.body.append(pokemon);
//   }

//   const id = getRandomInt(151) + 1;
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   const data = await response.json();
//   const spriteUrl = data.sprites.other["official-artwork"].front_default;
//   pokemon.setAttribute("src", spriteUrl);
// });
