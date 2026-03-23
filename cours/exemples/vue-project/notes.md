# Notes about VueJS projects

## NPM Cheatsheet

|             Name              |    Command    |
| :---------------------------: | :-----------: |
|            Install            | `npm install` |
|      Run for development      | `npm run dev` |
| Build to deploy it statically | npm run build |

## Package structure

```json
{
  "name": "vue-project",
  "version": "1.0.0",
  "scripts": {
    "run dev": "vite",
    "run build": "vite build"
  },
  "dependencies": {
    "pinia": "^3.0.4",
    "vue": "^3.5.28",
    "vue-router": "^5.0.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.2",
    "@vitejs/plugin-vue": "^6.0.4",
    "eslint": "^9.39.2"
  }
}
```

## Project structure
