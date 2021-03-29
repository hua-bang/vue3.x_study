<template>
  <div>supComponent</div>
</template>

<script>
export default {
  name: "SupComponent",
  props: {
    val: {
      type: Number
    }
  },
  setup(props, context) {
    // 父组件传过来的值，props中访问到的属性需要在上方props属性先定义
    console.log(props);

    // 父组件传过来的值，attrs中访问到的属性是不在上方props属性定义
    console.log(context.attrs.a);
  }
}
</script>

<style scoped>

</style>