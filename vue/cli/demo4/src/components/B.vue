<template>
  <div @click="count++">b-{{count}}</div>
</template>

<script>
export default {
  name: "B",
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>

</style>