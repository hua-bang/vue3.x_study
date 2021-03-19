<template>
  <div>
    <div v-for="(item, index) in data" :key="item.id">
      {{index}} ---- {{item.id}} ---- {{item.age}}
    </div>
  </div>
</template>

<script>
import {getAsyncData} from "./api/static";
import {get} from "./network/request";

export default {
  name: 'App',
  data() {
    return {
      data: ""
    }
  },
  methods() {

  },
  mounted() {
    getAsyncData().then(res => {
      console.log("getAsync",res);
    })
    get("https://json.tewx.cn/user/API_kdd531mytfdzm06i?sdAS1dsnuUa3sd=32&Jsdh4bajs99dii=gnnvkeaux1fhyhvm").then(res => {
      console.log("get",res);
    })
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
