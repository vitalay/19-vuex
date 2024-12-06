import { createStore } from "vuex";

export default createStore({
    state: {
        counter: 1,
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        add(state, payload) {
            state.counter += payload.value;
        },
    },
});