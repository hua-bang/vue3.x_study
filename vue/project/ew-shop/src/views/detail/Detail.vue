<template>
  <nav-bar>
    <template v-slot:default>
      商品详情
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "Detail",
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>