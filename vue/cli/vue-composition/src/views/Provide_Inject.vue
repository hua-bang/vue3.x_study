<template>
  <div>
    <h2>Provide_Inject</h2>
    <div>
      <input type="text" v-model="name">
    </div>
    <SubComp></SubComp>
  </div>
</template>

<script>
import { ref, provide} from "vue"
import SubComp from "../components/Provide_Inject/SubComp";
export default {
  name: "Provide_Inject",
  components: {SubComp},
  setup() {
    const name = ref("hug");
    provide("name", name);
    return {
      name
    }
  }
}
</script>

<style scoped>

</style>