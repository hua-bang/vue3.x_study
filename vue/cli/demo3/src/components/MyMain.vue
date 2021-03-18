<template>
  <MyCoon></MyCoon>
  <MyCoon></MyCoon>
  {{msg}}
  {{title}}
  {{myTitle}}
  <template v-for="item in arr" :key="item">
    {{item + 1}}
  </template>
</template>

<script>
import MyCoon from "./childCompoents/MyCoon";
export default {
  name: "MyMain",
  components: {
    MyCoon
  },
  // 数组写法
  // props: ["msg", "title"]
  // 对象声明简写
  // props: {
  //   msg: String,
  //   title: String,
  //   arr: Array
  // },
  // 对象声明具体
  props: {
    msg: {
      type: String,
      default: "",
      require: false
    },
    title: {
      type: String,
      default: ""
    },
    arr: {
      type: Array,
      default: () => [] //对象或数组默认值必须从一个工厂函数获取
    },
    myTitle: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
