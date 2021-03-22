<template>
  <div class="nav">
    about-1 page
    <ul>
      <li><a href="" @click.prevent="$router.push('/about/about-1/about-1-1')">about-1-1</a></li>
      <li><a href="" @click.prevent="$router.push('/about/about-1/about-1-2')">about-1-2</a></li>
    </ul>
  </div>
  <div class="area">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "About-1"
}
</script>

<style scoped>
.area{
  background: aquamarine;
}
</style>