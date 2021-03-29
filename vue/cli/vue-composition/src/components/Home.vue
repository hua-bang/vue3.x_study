<template>
  <div>home</div>
  <div>{{data.count}}</div>
  <div>{{data.double}}</div>
  <div>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
import {reactive, computed} from "vue"

export default {
  name: "Home",
  setup() {
    const data = reactive({
      count: 0,
      double: computed(() => {
        return data.count * 2;
      })
    });
    const addCount = () => {
      data.count++;
    }
    return {
      data,
      addCount
    }
  }
}
</script>

<style scoped>

</style>