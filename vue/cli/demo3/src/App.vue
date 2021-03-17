<template>
  <div>
    <HelloVue></HelloVue>
  </div>
  <div class="box">123</div>
</template>

<script>
import HelloVue from "./components/HelloVue";

export  default {
  name: "App",
  components: {
    // key value
    HelloVue
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
