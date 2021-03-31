<template>
  <div>router</div>
  <div class="main">
    <div class="left">
      <div class="nav">
        <div class="nav-item">
          <router-link to="/router/index">index</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/router/home">home</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/router/about">about</router-link>
        </div>
        <div class="nav-item">
          <div @click="toInfo">info</div>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"

export default {
  name: "Router",
  setup() {
    const router = useRouter();
    const toInfo = () => {
      router.push("/router/2/info")
    }
    return {
      toInfo
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  height: 400px;
  background: #dac0f1;
  display: flex;
}
.left{
  width: 20%;
  height: 100%;
  background: #42b983;
  display: flex;
  justify-content: center;
}
.nav{
  width: 50%;
  height: 100%;
}
.nav-item{
  cursor: pointer;
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 24px;
  color: white;
}
</style>