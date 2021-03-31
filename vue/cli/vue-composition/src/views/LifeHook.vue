<template>
  <div>lifeHook</div>
</template>

<script>
import {onMounted} from "vue"

export default {
  name: "LifeHook",
  setup() {
    console.log("setUp")

    onMounted(() => {
      console.log("mounted")
    })
  }
}
</script>

<style scoped>

</style>