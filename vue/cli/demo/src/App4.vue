<template>
  <div>
    <button @click="isShow = !isShow">{{!isShow?"显示":"关闭"}}</button>

    <div v-if="isShow">
      <div>{{msg}}</div>
    </div>
    <div v-else>
      123456
    </div>

<!--    v-show将display改成none-->
    <div v-show="isShow">
      <div>{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App4",
  data() {
    return {
      msg: "123",
      isShow: true
    }
  }
}
</script>

<style scoped>

</style>
