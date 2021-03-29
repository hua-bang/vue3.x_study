<template>
  <div>Watch</div>
  <div>
    {{a}}
  </div>
  <div>
    {{b}}
  </div>
  <div>
    <input type="text" v-model="age">
  </div>
  <div>
    <button @click="a++">a++</button>
    <button @click="b++">b++</button>
  </div>
</template>

<script>
import {reactive, ref, toRefs, watch, watchEffect} from "vue";

export default {
  name: "Watch",
  setup() {
    let a = ref(1);
    let b = ref(2);

    let user = reactive({
      age: 18
    })

    watchEffect(() => {
      console.log(a.value);
    })

    watch(a, (newValue, oldValue) => {
      console.log("single watch:"+a.value);
      console.log(newValue, oldValue);
    })
    watch([a,b], ([aNewValue, bNewValue],[aOldValue, bOldValue]) => {
      console.log("both watch:"+a.value);
      console.log("both watch:"+aNewValue,bNewValue);
      console.log("both watch:"+aOldValue,bOldValue);
    })

    watch(() => user.age, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    })

    return {
      a,b,...toRefs(user)
    }
  }
}
</script>

<style scoped>

</style>