<template>
  <div>
    <div>Slot</div>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "SupSlotComponent",
  setup(props, context) {
    console.log("props", props);
    console.log(context.slots.default());
  }
}
</script>

<style scoped>

</style>