<template>
  <div>store</div>
  <div>{{$store.state.num}}</div>
  <div>{{store.state.num}}</div>
  <div>double:{{store.getters.double}}</div>
  <div>
    <button @click="addNum">+</button>
    <button @click="addNumByAction">+</button>
  </div>
</template>

<script>
import {useStore} from "vuex"
export default {
  name: "Store",
  setup() {
    const store = useStore();
    const addNum = () => {
      store.commit("ADD_NUM");
    }
    const addNumByAction = () => {
      store.dispatch("addNum")
    }
    return {
      addNum,
      store,
      addNumByAction
    }
  }
}
</script>

<style scoped>

</style>