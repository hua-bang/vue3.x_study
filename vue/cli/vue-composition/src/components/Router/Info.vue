<template>
  <div>{{$route.params.id}}</div>
  <div>{{id}}</div>
</template>

<script>
import { useRoute } from "vue-router"
import {computed} from "vue";
export default {
  name: "Info",
  setup() {
    const route = useRoute();
    const id = computed(() => route.params.id);
    return {
      id
    }
  }
}
</script>

<style scoped>

</style>