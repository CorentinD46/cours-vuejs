
const games = document.getElementById('games');
const content = document.getElementById('content');

document.addEventListener('DOMContentLoaded', async () => {
    const gamesList = await fetch('https://pokeapi.co/api/v2/version-group')
        .then(response => response.json());
    for (let game of gamesList.results) {
        const gameDom = document.createElement('li');
        gameDom.innerText = game.name;
        games.appendChild(gameDom);
    }
})
