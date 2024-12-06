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
    actions: {
        incrementAsinc(context) {
            setTimeout(() => {
                context.commit('add', {
                    value: 10
                });
            }, 2000);
        }
    },
    getters: {
        counter(state) {
            // if (state.counter > 50) {
            //     return 0;
            // }
            return state.counter;
        },
        doubleCounter(state, getters) {
            return getters.counter * 2;
        }
    }
});
