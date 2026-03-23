---
marp: true
---

# Travaux pratiques 1 - Javascript

**Objectif**: Jouer et se familiariser avec JavaScript

---

## Exercice 1 - Préparer

Préparer un fichier HTML qui correspondra à ce design:

![Le design cible](design.png)

---

## Exercice 2 - Dynamiser

On va animer un peu tout ça :

1. Au chargement de la page :
   - La zone rouge n'est pas affichée
   - Le bouton close est désactivé
2. Quand l'utilisateur clique sur le bouton open :
   - La zone rouge s'affiche
   - Le bouton close devient clickable
   - Le bouton open est désactivé

---

## Exercice 2 - Dynamiser (suite)

3. Quand l'utilisateur clique sur le bouton close :
   - La zone rouge disparait
   - Le bouton open devient clickable
   - Le bouton close est désactivé

---

## Exercice 3 - Lister

1. Au chargement de la page, faire une requête à `https://pokeapi.co/api/v2/version-group`
2. Utiliser le champ "results" de la réponse pour générer une liste des noms de jeux Pokémon à la place des boutons open et close
3. Chaque élément de la liste contient le champ "name" d'un élément de "results"

---

## Exercice 4 - Détailler

1. Chaque élément de la liste est cliquable
2. Au clic, on fetch l'url associée au name cliqué
3. Le résultat est injecté dans une nouvelle zone qui est affiché à la place de la zone rouge
4. Si l'utilisateur clique sur un autre nom, alors  la zone de détail est remplacée par la nouvelle
5. *Bonus : Ajouter un bouton close dans la section de détail qui permet de nettoyer la zone et de la cacher*
