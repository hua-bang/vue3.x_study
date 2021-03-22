<template>
  <div>params.id: {{$route.params.id}}</div>
  <router-link :to="{path:'/page', query: {id:2, name:'hug'}}">goPage</router-link>
  <button @click="goPage">goPage</button>
  <button @click="goLesson">goLesson</button>
</template>

<script>
export default {
  name: "Lesson",
  data() {
    return {

    }
  },
  created() {
    console.log("lesson")
  },
  methods: {
    goPage() {
      this.$router.push({path: "/page", query: {id: 3, name: "hug"}});
    },
    goLesson() {
      this.$router.push("/lesson/" + Math.round(Math.random()*99))
    }
  }
}
</script>

<style scoped>

</style>