<template>
  <div>
    <div>
      <button @click="sub" :disabled="count<=min">-</button>
      <input type="text" size="3" v-model="count">
      <button @click="add" :disabled="count>=max">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello,vue",
      count: 0,
      max:10,
      min: 1
    }
  },
  methods: {
    sub() {
      this.count--;
    },
    add() {
      this.count++;
    }
  }
}
</script>

<style scoped>

</style>
