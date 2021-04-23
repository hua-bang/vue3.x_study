<template>
  <div @click="backTop" class="backTop">UP</div>
</template>

<script>
export default {
  name: "BackTop",
  setup(props, {emit}) {
    console.log(props);
    const backTop = () => {
      emit('backTop')
    }
    return {
      backTop
    }
  }
}
</script>

<style scoped>
.backTop {
  width: 40px;
  height: 40px;
  position: fixed;
  right: 30px;
  bottom: 80px;
  border-radius: 50%;
  z-index: 20;
  box-shadow: 5px 5px 5px #888888;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  opacity: 0.8;
  color: #41b07c;
  font-weight: bold;
}
</style>