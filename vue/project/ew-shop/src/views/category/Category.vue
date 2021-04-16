<template>
  <nav-bar>
    <template v-slot:default>
      商品分类
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "Category",
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>