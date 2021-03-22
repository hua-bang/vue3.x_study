<template>
  <div class="nav">
    about page
    <ul>
      <li><a href="" @click.prevent="$router.push('/about/about-1')">about-1</a></li>
      <li><a href="" @click.prevent="$router.push('/about/about-2')">about-2</a></li>
    </ul>
  </div>
  <div class="about area">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "About"
}
</script>

<style scoped>
.about{
  background: #da61f7 !important;
}
</style>