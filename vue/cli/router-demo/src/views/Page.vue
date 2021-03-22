<template>
  <div>{{ $route.query.id }}--{{ $route.query.name }}</div>
  <router-link :to="'/lesson/2'">goLesson</router-link>
  <button @click="goLesson">goLesson</button>
</template>

<script>
export default {
  name: "Page",
  methods: {
    goLesson() {
      this.$router.push("/lesson/5");
    }
  }
}
</script>

<style scoped>

</style>