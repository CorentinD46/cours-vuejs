import MyButton from './MyButton.js';

export default {
    components: {
        MyButton
    },
    data() {
        return { counter: 0 };
    },
    methods: {
        increment() {
            this.counter++;
        }
    },
    template: `<div>
            <p>{{ counter }}</p>
            <MyButton text="Click me" v-on:onClick="increment"></MyButton>
        </div>`,
}