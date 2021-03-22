<template>
  <div id="nav">
    <div>
      <!--      渲染成a标签-->
      <router-link to="/">首页</router-link>
    </div>
  <div>
    <router-link to="/about">关于</router-link>
  </div>

  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
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
