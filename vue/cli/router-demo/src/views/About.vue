<template>
  <div>this is about page</div>
</template>

<script>
export default {
  name: "About",
  created() {
    console.log("About --- 创建")
  },
  unmounted() {
    console.log("About --- 销毁")
  }
}
</script>

<style scoped>

</style>