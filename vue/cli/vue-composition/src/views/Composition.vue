<template>
  <div>Composition</div>
  <CompositionRef></CompositionRef>
  <CompositionReactive></CompositionReactive>
</template>

<script>
// import { ref } from "vue"

import CompositionRef from "../components/Composition/CompositionRef";
import CompositionReactive from "../components/Composition/CompositionReactive";
export default {
  name: "Composition",
  components: {CompositionReactive, CompositionRef},
  setup() {

  }
}
</script>

<style scoped>

</style>