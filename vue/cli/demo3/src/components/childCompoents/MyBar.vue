<template>
  <div class="myBar">
    <slot name="one"></slot>
    <slot name="two" :two="user"></slot>
    <slot name="three" :user="user"></slot>
  </div>
</template>

<script>
export default {
  name: "MyBar",
  data() {
    return {
      user: {name: "hug"}
    }
  }
}
</script>

<style scoped>
.myBar {
  width: 80%;
  height: 28.333%;
  margin: 5% 10%;
  background: yellow;
}
</style>
