<template>
  <div>
    <h2>ref的用法</h2>
    <div>
      <div>{{count}}</div>
      <div><button @click="addCount">add</button></div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
  name: "CompositionRef",
  setup() {
    let count = ref(0);
    let addCount = () => {
      count.value++;
    }
    return {
      count,
      addCount
    }
  }
}
</script>

<style scoped>

</style>