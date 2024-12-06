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
    getters: {
        counter(state) {
            if (state.counter > 50) {
                return 0;
            }
            return state.counter;
        },
        doubleCounter(state, getters) {
            return getters.counter * 2;
        }
    }
});
