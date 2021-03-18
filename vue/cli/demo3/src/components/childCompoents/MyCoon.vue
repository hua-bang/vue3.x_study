<template>
  <div class="myConn">{{msg}}</div>
</template>

<script>
export default {
  name: "MyCoon",
  data() {
    return {
      msg: "this is a test message"
    }
  }
}
</script>

<style scoped>
.myConn{
  width: 90%;
  height: 30%;
  margin: 5%;
  background: #cc6767;
}
</style>
