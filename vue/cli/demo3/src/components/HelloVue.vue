<template>
  <div>
    {{message}}
  </div>
  <OneComp></OneComp>
</template>

<script>
import OneComp from "./OneComp";
export default {
  name: "HelloVue",
  components: {
    OneComp
  },
  data() {
    return {
      message: "HelloVue"
    }
  }
}
</script>

<style>
.box{
  color: red;
}
</style>
