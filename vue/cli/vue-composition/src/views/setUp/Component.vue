<template>
  <h3>Component(to test props of setup)</h3>
  <div>
    <SupComponent :val="0" :a="1"></SupComponent>
  </div>
  <div>
    <SupSlotComponent>
      <div>456</div>
    </SupSlotComponent>
  </div>
  <div>
    <div>
      {{num}}
    </div>
    <SupEmitComponent @add="addNum"></SupEmitComponent>
  </div>
</template>

<script>
import SupComponent from "../../components/setUp/SupComponent";
import SupSlotComponent from "../../components/setUp/SupSlotComponent";
import SupEmitComponent from "../../components/setUp/SupEmitComponent";
import {ref} from "vue"

export default {
  name: "Component",
  components: {
    SupEmitComponent,
    SupSlotComponent,
    SupComponent
  },
  setup() {
    const num = ref(0);
    const addNum = () => {
      num.value++;
    }
    return {
      num,
      addNum
    }
  }
}
</script>

<style scoped>

</style>