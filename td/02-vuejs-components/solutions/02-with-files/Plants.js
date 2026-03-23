import Card from './Card.js';
import plantList from '../../plants.json' with {type: 'json'};

export default {
    components: {Card},
    data() {
        return {
            /* Ici, le nom du champ est le même
               que le nom de la variable,
               du coup pas besoin de mettre le
               même deux fois.
             */
            plantList
        }
    },
    template: `
          <div>
            <h2>Plants</h2>
            <div class="list">
              <Card v-for="plant in plantList"
                    :key="plant.id"
                    :id="plant.id"
                    :name="plant.common_name"
                    :imageUrl="plant.image_url">
            </div>
          </div>`,
}
