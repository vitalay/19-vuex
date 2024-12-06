import { createStore } from "vuex";

export default createStore({
    state: {
        counter: 1,
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        addFive(state) {
            state.counter += 5;
        },
    },
});