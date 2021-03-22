<template>
  <div class="nav">
    <h3 @click="$router.push('./order')">order</h3>
    <h3 @click="$router.push('./setting')">setting</h3>
  </div>
  <router-view class="user-area"></router-view>
</template>

<script>
export default {
name: "User"
}
</script>

<style scoped>
.nav{
  width: 100%;
  height: 150px;
  background: #50c295;
  color: white;
}
.user-area{
  width: 100%;
  height: 300px;
  background: #edc296;
  color: white;
}
</style>