<template>
  <div>Computed</div>
  <div>
    {{info}}
  </div>
  <input v-model="firstName" />
  <input v-model="age" />
</template>

<script>
import {computed, reactive, toRefs} from "vue";

export default {
  name: "Computed",
  setup() {
    const user = reactive({
      firstName: "hug",
      age: "18"
    });

    const info = computed(() => {
      return `${user.firstName}-${user.age}`
    })

    return {
      ...toRefs(user),
      info
    }
  }
}
</script>

<style scoped>

</style>