<template>
  <div>
    <div>
      {{`${title} - ${desc}`}}
      {{title}} - {{desc}}
      {{getTitle()}}
      {{tTitle}}
      <button @click="changeTitle">change</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App2",
  data() {
    return {
      title: "hug",
      desc: "go head!"
    }
  },
  methods: {
    getTitle() {
      console.log("getTitle");  //每次都会调用一次
      return `${this.title} - ${this.desc}`
    },
    changeTitle() {
      this.title = "hua cheerUp";
    }
  },
  computed: {
    tTitle: {
      get() {
        console.log("tTitle");  //改变值才会调用一次
        return `${this.title} - ${this.desc}`
      },
      set(val) {
        let arr = val.split(" ");
        this.title = arr[0];
        this.desc = arr[1];
      }
    }
  }
}
</script>

<style scoped>

</style>
