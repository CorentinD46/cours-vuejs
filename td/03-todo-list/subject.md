# TD 3 - Vue-router

## 1. Créer la liste

1. Dans TodoItem, afficher le champs description de la todo reçue
2. Stocker la liste todos.json dans une ref de ListView appelée todos
3. Dans TodoList, utiliser le composant TodoItem pour afficher la liste des tâches

## 2. Ajouter des éléments

1. Dans TodoCreation.vue, créer les refs ``title``, ``description``, ``status`` et ``tags`` avec leur valeur par défaut
2. Lier les refs nouvellement créées aux inputs correspondant
3. Emettre l'event creation quand le formulaire est validé
4. Dans ListView, gérer l'event creation de TodoCreation pour ajouter la tache à la ref todos.
