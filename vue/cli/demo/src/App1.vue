<template>
  <div>
    <h1>{{msg}} {{str}}</h1>

    <div v-pre>{{test}}</div>

    <div v-once>{{count}}</div>
    <div>{{count}}</div>
    <button @click="count++">+</button>

    <h2 v-text="count*2"></h2>
    <div v-html="`<div style='color: red'>123</div>`"></div>

<!--    v-bind-->
    <a :href="link">baidu</a>
    <a v-bind:href="link">baidu</a>
  </div>
</template>

<script>
export default {
  name: "App1",
  data() {
    return {
      msg: "message",
      str: "hello vue",
      count: 0,
      link: "https://www.baidu.com"
    }
  }
}
</script>

<style scoped>

</style>
