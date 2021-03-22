<template>
  <div style="background: #42b983;color: white">
    <div class="nav">
      app.vue
      <ul>
        <li><a href="" @click.prevent="$router.push('/home')">Home</a></li>
        <li><a href="" @click.prevent="$router.push('/about')">About</a></li>
      </ul>
    </div>
    <div class="area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
a{
  color: white;
}
.area{
  background: #edc089;
}
</style>
