<template>
  <div>
    <h2>reactive</h2>
    <div>
      <div>{{name}}</div>
    </div>
    <div>{{user}}</div>
    <div>{{user.name}}</div>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from "vue";

export default {
  name: "CompositionReactive",
  setup() {
    const count = ref(0);

    const user = reactive({
      name: "hug",
      age: 18
    })
    return {
      count,
      // ...user  注意 直接解构的话不是响应式
      ...toRefs(user),  //toRefs得到响应式的，会和user自动绑定
      user
    }
  }
}
</script>

<style scoped>

</style>