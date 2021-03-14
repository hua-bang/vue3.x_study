<template>
  <div>
    <div>
      <button v-on:click="num--">-</button>
      <input type="text" v-model="num" size="2">
      <button @click="num++">+</button>
    </div>


    <div>
      <button v-on:click="sub()">-</button>
      <input type="text" v-model="num2" size="2">
      <button @click="add()">+</button>
    </div>

    <div>
      <button @click="btnClick">123</button>
    </div>

    <!--    .stop防止冒泡问题-->
    <div @click.stop="one()" class="box1">
      <div @click.stop="two()" class="box2">
        <button @click.stop="three()">click</button>
      </div>
    </div>

    <!--    self点击自己才生效-->
    <div @click="one()" class="box1">
      <div @click.self="two()" class="box2">
        <button @click="three()">click</button>
      </div>
    </div>

    <!--    串行用法-->
    <div @click="one()" class="box1">
      <div @click.self.stop="two()" class="box2">
        <button @click="three()">click</button>
      </div>
    </div>

    <!--    事情捕获-->
    <div @click.capture="one()" class="box1">
      <div @click="two()" class="box2">
        <button @click="three()">click</button>
      </div>
    </div>

    <!--    .prevent阻止默认事件-->
    <div>
      <a href="https://www.baidu.com" @click.prevent="prevent()">百度</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App3",
  data() {
    return {
      num: 0,
      num2: 0
    }
  },
  methods: {
    add() {
      this.num2++;
    },
    sub() {
      this.num2--;
    },
    btnClick(e) {
      console.log(e);
    },
    one() {
      console.log("one");
    },
    two() {
      console.log("two");
    },
    three() {
      console.log("three");
    },
    prevent() {
      console.log("prevent");
    }
  }
}
</script>

<style scoped>
.box1{
  width: 300px;
  height: 300px;
  background: red;
  margin-bottom: 50px;
}
.box2{
  width: 100px;
  height: 100px;
  background: white;
}
</style>
