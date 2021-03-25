<template>
  <div>
    {{$store.state.num}}
  </div>
  <div>
    {{$store.getters.doubleNum}}
  </div>
  <div>
    {{$store.getters.getDetailById(2)}}
  </div>
  <div>
    {{$store.getters.getNameById(2)}}
  </div>
  <div>
    {{$store.getters.totalPrice}}
  </div>
  <div>
    {{$store.getters.doublePrice}}
  </div>
</template>

<script>
export default {
name: "Sup"
}
</script>

<style scoped>

</style>