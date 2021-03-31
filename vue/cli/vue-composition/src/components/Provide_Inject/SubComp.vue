<template>
  <div>{{name}}</div>
  <input v-model="name">
</template>

<script>
import {inject} from "vue"
export default {
  name: "SubComp",
  setup() {
    let name = inject("name")
    return {
      name
    }
  }
}
</script>

<style scoped>

</style>