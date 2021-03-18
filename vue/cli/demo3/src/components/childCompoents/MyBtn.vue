<template>
  <div>
    <button @click="add(2,3,4)">+</button>
    <slot></slot>
    <button @click="sub(2,3)">-</button>
    <button @click="parentAdd(5)">parent's add</button>
    <button @click="rootMethod">root methods</button>
  </div>
</template>

<script>
export default {
  name: "MyBtn",
  methods: {
    add(...val) {
      this.$emit("addCount", ...val);
    },
    sub(...val) {
      this.$emit("subCount", ...val);
    },
    parentAdd(num) {
      this.$parent.changeCount(num);
    },
    rootMethod() {
      this.$root.appMethod();
    }
  }
}
</script>

<style scoped>

</style>
