<template>
  <div class="nav">
    home page
    <ul>
      <li><a href="" @click.prevent="$router.push('/home/home-1')">home-1</a></li>
      <li><a href="" @click.prevent="$router.push('/home/home-2')">home-2</a></li>
    </ul>
  </div>
  <div class="area">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "Home"
}
</script>

<style scoped>

</style>