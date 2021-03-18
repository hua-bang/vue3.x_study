<template>
  <div class="myFooter">
    <MyBtn @add-count="add" @subCount="sub"><input :value="count" size="5" /></MyBtn>
  </div>
</template>

<script>
import MyBtn from "./childCompoents/MyBtn";
export default {
  name: "MyFooter",
  components: {
    MyBtn
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add(...val) {
      val.forEach((v) => {
        this.count += v;
      })
    },
    sub(...val) {
      val.forEach((v) => {
        this.count -= v;
      })
    },
    changeCount(val) {
      this.count += val;
    }
  }
}
</script>

<style scoped>
.myFooter{
  color: white;
}
</style>
