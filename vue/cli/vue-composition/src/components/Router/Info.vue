<template>
  <div>{{$route.params.id}}</div>
  <div>{{id}}</div>
  <div>
    <button @click="goNext">next</button>
    <button @click="goNextTest">goTest</button>
  </div>
</template>

<script>
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router"
import {computed} from "vue";
export default {
  name: "Info",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const id = computed(() => route.params.id);

    onBeforeRouteLeave(() => {
      console.log("will leave")
    })

    onBeforeRouteUpdate(() => {
      console.log("router will update")
    })

    const goNext = () => {
      let id = parseInt(Math.random() * 1000) % 10;
      router.push(`/router/${id}/info`);
    }

    const goNextTest = () => {
      let id = parseInt(Math.random() * 1000) % 10;
      router.push(`/test/${id}`);
    }
    return {
      id,
      goNext,
      goNextTest
    }
  }
}
</script>

<style scoped>

</style>