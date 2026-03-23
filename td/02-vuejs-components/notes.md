---
marp: true
---

# Travaux pratiques 2 - Composants VueJS

**Objectif**: Jouer et se familiariser avec les composants VueJS en JavaScript

---

## Exercice 1 - Utilisation unique

Prendre un pokémon dans le fichier `pokemons.json` et créer une carte pour présenter le pokémon dans une page html en utilisant son nom et son image.  
La carte doit être codée sous la forme d'un composant importé par l'application.

```json
{
"id": 2,
"name": "ivysaur",
"sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
}
```

---

## Exercice 2 - Composition

Créer un nouveau composant `Pokedex`. Ce composant doit charger le fichier `pokemons.json` et afficher chaque pokémon en utilisant la carte développée dans l'exercice 1.

---

## Exercice 3 - Généralisation

Adapter les composants Carte et Pokedex pour pouvoir afficher, au choix, les données de `pokemons.json` et celles de `plants.json`.  
Faire la sélection avec une checkbox.
**Règle** : Ne pas changer les noms des champs dans les fichiers `.json`. Il faut passer par le code pour adaptater/mapper de noms de champs.

---

## Exercice 4 - Recherche

Ajouter un champ de texte qui permet de filtrer la liste. Ne garder que les éléments de la liste dont le nom contient le texte saisi.
