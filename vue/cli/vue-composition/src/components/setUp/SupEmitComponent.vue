<template>
  <div>
    <button @click="parentAdd">
      add
    </button>
  </div>
</template>

<script>
export default {
  name: "SupEmitComponent",
  setup(props, context) {
    console.log(props);
    const parentAdd = () => {
      context.emit("add");
    }
    return {
      parentAdd
    }
  }
}
</script>

<style scoped>

</style>