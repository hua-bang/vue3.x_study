<template>
  <div @click="count++">a-{{count}}</div>
</template>

<script>
export default {
  name: "A",
  data() {
    return {
      count: 0
    }
  },
  methods: {

  },
  created() {
    console.log(this.count);
  }
}
</script>

<style scoped>

</style>