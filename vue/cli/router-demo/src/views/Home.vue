<template>
  <div>this is home</div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log("Home --- 创建")
  },
  unmounted() {
    console.log("Home --- 销毁")
  },
  activated() {
    console.log("home - keep-alive激活");
  },
  deactivated() {
    console.log("home - keep-alive注销")
  }
}
</script>

<style scoped>

</style>