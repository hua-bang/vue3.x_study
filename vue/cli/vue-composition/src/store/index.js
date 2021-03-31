import { createStore } from "vuex"

const store = createStore({
    state: {
        num: 0
    },
    getters: {
      double(state) {
          return state.num * 2;
      }
    },
    mutations: {
        ADD_NUM(state) {
            state.num++;
        }
    },
    actions: {
        addNum({commit}) {
            commit("ADD_NUM");
        }
    }
});

export default store;