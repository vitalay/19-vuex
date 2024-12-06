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
        incrementAsinc(commit, payload) {
            setTimeout(() => {
                commit.commit('add', payload);
            }, 2000);
        }
    },
    getters: {
/*************  ✨ Codeium Command ⭐  *************/
        /**
         * Return the counter value.
         * If the counter exceeds 50, return 0.
         * @param {Object} state - The Vuex state.
         * @returns {Number} The counter value, or 0 if it exceeds 50.
         */
/******  8274f12a-ec35-4a66-bdfd-c76277815afb  *******/
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
