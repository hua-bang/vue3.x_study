<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div @click="add">{{count}}</div>
  <div v-if="isShow">
    <keep-alive>
      <A></A>
    </keep-alive>
  </div>
  <button @click="isShow = !isShow">btn</button>
</template>

<script>
import A from "./components/A"

export default {
  name: 'App',
  data() {
    return {
      count: 0,
      isShow: true
    }
  },
  components: {
    A
  },
  methods: {
    add() {
      this.count++;
    },
    sup() {
      this.count--;
    }
  },
  beforeCreate() {
    console.log("实例被创建之前");
  },
  created() {
    console.log("实例创建完成");
  },
  beforeMount() {
    console.log("挂载之前");
  },
  mounted() {
    console.log("挂载")
  },
  beforeUpdate() {
    console.log("数据更新之前")
  },
  updated() {
    console.log("数据更新完成")
  },
  activated() {
    console.log("keep-alive缓存组件激活调用")
  },
  deactivated() {
    console.log("keep-alive缓存组件停用时调用")
  },
  beforeUnmount() {
    console.log("实例销毁之前")
  },
  unmounted() {
    console.log("实例销毁")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
