import { createStore } from "vuex";

export default createStore({
  state: {
    num: 12,
    cartList: [
      {name:"《细说php》", price: 50},
      {name:"《细说php》", price: 60},
      {name:"《细说php》", price: 40},
    ]
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
    getDetailById: (state) => (id) => {
      return `getDetailBy${id}`;
    },
    getNameById(state) {
      return (id) => {
        return `getNameBy${id}`
      }
    },
    totalPrice: (state) => state.cartList.reduce((total, prev) => total + prev.price, 0),
    doublePrice: (state, getters) => getters.totalPrice * 2
  },
  mutations: {
    add(state) {
      state.num++;
    },
    sup(state) {
      state.num--;
    },
    addVal(state, val) {
      state.num += val;
    },
    supVal(state, val) {
      state.num -= val;
    },
    addValArr(state, val) {
      let valSum = val.reduce((total, prev) => {
        return total + parseInt(prev);
      }, 0);
      state.num += valSum;
    },
    supValArr(state, val) {
      let valSum = val.reduce((total, prev) => {
        return total + prev;
      }, 0);
      state.num -= valSum;
    }
  },
  actions: {
    actionA({commit}) {
      setTimeout(() => {
        commit("add");
      }, 1000)
    },
    asyncAction({commit}) {
      return new Promise(resolve => {
        commit("add");
        resolve();
      })
    }
  },
  modules: {},
});
