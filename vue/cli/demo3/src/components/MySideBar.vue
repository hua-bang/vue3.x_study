<template>
  <MyBar>
    <template v-slot:one>
      123
    </template>
    <template v-slot:two="two">
      {{two.two.name}}
    </template>
    <template v-slot:three="data">
      {{data.user.name}}
    </template>
  </MyBar>
</template>

<script>
import MyBar from "./childCompoents/MyBar";
export default {
name: "MySideBar",
  components: {MyBar}
}
</script>

<style scoped>

</style>
