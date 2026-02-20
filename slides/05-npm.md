---
marp: true
paginate: true
footer: Adrien Bouyssou (macdrien.github.io)
---

# Bases de NPM

---

## C'est quoi ?

NPM est un gestionnaire de paquets pour les environnements NodeJS. Il permets donc, entre autres de gérer ses dépendances et leurs versions et de créer des scripts pour son projet.

---

## Structure d'un projet

- 
  - `package.json` : La description du projet
  - `package-lock.json` : Les versions exactes des paquets de dépendances installés
  - `public/` : Les fichiers statiques
  - `src/` : Le source du projet. Contient souvent un main.js comme point d'entrée

---

## package.json

```json
{
  "name": "vue-project",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "run-s lint:*",
  },
  "dependencies": {
    "pinia": "^3.0.4",
    "vue": "^3.5.28",
    "vue-router": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.2",
    "@vitejs/plugin-vue": "^6.0.4",
    "globals": "^17.3.0",
    // ...
  }
}

```

---

## Commandes utiles pour des projets front-end

| Commande | Description |
| :---: | :---: |
| `npm create` / `npm init` | Créé un projet NodeJS |
| `npm install` | Installer et/ou met à jour les dépendances du projet |
| `npm run dev` | Lance le projet pour tester son travail |
| `npm run build` | Build le projet sous une forme statique. Utile pour déployer son projet sur un serveur web classique |
