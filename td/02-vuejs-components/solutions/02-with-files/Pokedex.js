import Card from "./Card.js";
import pokemonList from '../../pokemons.json' with {type: 'json'};

export default {
    components: {Card},
    data() {
        return {
            /* Ici, le nom du champ est le même
               que le nom de la variable,
               du coup pas besoin de mettre le
               même deux fois.
             */
            pokemonList
        }
    },
    template: `
          <div>
            <h2>Pokedex</h2>
            <div class="list">
              <Card v-for="pokemon in pokemonList"
                    :key="pokemon.id"
                    :id="pokemon.id"
                    :name="pokemon.name"
                    :imageUrl="pokemon.sprite"
              />
            </div>
          </div>`,
};