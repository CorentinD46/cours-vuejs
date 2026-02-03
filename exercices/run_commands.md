# How to run npm commands using the Dockerfile

## Default

By default, the image builds the project. It runs `npm run build`

## Run another NPM command

1. Build the docker image locally in the Dockerfile folder  
   `docker build -t node-runner .`
2. Run the image with the wanted NPM command  
   - Under Linux: `docker run --rm -it -v "$PWD:/app" -w /app --entrypoint npm node-runner run dev`
   - Under PowerShell: `docker run --rm -it -v "${PWD}:/app" -w /app --entrypoint npm node-runner run dev`

## NPM cheat-sheet

- `npm install` - Install dependencies defined in package.json or a new one if specified
- `npm run <script>` - Run a script defined in package.json. Common scripts are:
  - `dev`
  - `build`
