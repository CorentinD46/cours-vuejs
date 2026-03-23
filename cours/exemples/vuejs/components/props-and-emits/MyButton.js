export default {
    props: ['text'],
    emits: ['onClick'],
    template: `<button @click="$emit('onClick')">{{ text }}</button>`
}