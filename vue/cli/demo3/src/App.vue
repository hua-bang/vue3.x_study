<template>
  <div class="conn">
    <header class="header">
      <MyHeader></MyHeader>
    </header>
    <div class="main">
      <div class="content">
        <MyMain msg="hello world" :title="title" :arr="arr" my-title="my title"></MyMain>
      </div>
      <div class="sidebar">
        <MySideBar></MySideBar>
      </div>
    </div>
    <footer class="footer">
      <MyFooter ref="footer"></MyFooter>
    </footer>
  </div>
  <button @click="childMethod">child method</button>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MySideBar from "./components/MySideBar";
import MyFooter from "./components/MyFooter";

export  default {
  name: "App",
  components: {
    // key value
    MyFooter,
    MyMain,
    MySideBar,
    MyHeader
  },
  data() {
    return {
      title: "this is title",
      arr: [1,2,3,4]
    }
  },
  methods: {
    appMethod() {
      console.log("App method");
    },
    childMethod() {
      this.$refs.footer.changeCount(10);
    }
  }
}
</script>

<style scoped lang="scss">
$width: 600px;
* {
  padding: 0;
  margin: 0;
}
.conn {
  width: $width;
  height: 500px;
  background: #ccc;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 100px;
  background: #888;
}

.main{
  width: 100%;
  height: 300px;
  background: yellow;
  display: flex;
}
.content{
  width: 60%;
  height: 100%;
  background: #ccc;
}
.sidebar{
  width: 40%;
  height: 100%;
  background: #f0fff0;
}
.footer {
  width: 100%;
  height: 100px;
  background: green;
}
</style>
