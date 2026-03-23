export default {
    props: ['id', 'name', 'imageUrl'],
    template: `
          <div :id="id" class="card">
            <h3>{{ name }}</h3>
            <img :src="imageUrl" :alt="\`Image of ${name}\`"/>
          </div>`
}