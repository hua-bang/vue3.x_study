<template>
  <div id="main">
<!--    <router-view class="left" name="left"></router-view>-->
<!--    <router-view class="right"></router-view>-->
    <div style="width: 100%">
      <router-link to="/">home</router-link>
      <router-link to="about">about</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
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
#main{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.left,.right {
  width: 50%;
  height: 100%;
}
.left{
  background: #42b983;
}
.right{
  background: #dac0f1;
}
</style>
