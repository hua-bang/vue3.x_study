<template>
  <div>
    双向
    <div>
      <input type="text" v-model.lazy="msg">
      <div>{{msg}}</div>
    </div>
    <hr>
    单向
    <div>
      <input type="text" :value="msg">
      <div>{{msg}}</div>
    </div>
    <hr>
    模拟双向绑定
    <div>
      <input type="text" :value="msg" @input="changeMsgValue">
      <div>{{msg}}</div>
    </div>

    <hr>
    多选
    <div>
      <input type="checkbox" v-model="tags" value="python">Python
      <input type="checkbox" v-model="tags" value="java">Java
      <input type="checkbox" v-model="tags" value="php">PHP
    </div>
    {{tags}}
    <hr>
    选择框
    <div>
      <select v-model="lesson">
        <option value="php">PHP</option>
        <option value="python">Python</option>
      </select>
      {{lesson}}
    </div>
  </div>
</template>

<script>
export default {
  name: "App7",
  data() {
    return {
      msg: "",
      tags: [],
      lesson: ""
    }
  },
  methods: {
    changeMsgValue(event) {
      this.msg = event.target.value;
    }
  }
}
</script>

<style scoped>

</style>
