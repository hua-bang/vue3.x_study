<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="item">{{index}}--{{item}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(item,key) in obj" :key="item">{{key}}--{{item}}</li>
    </ul>
    <hr>
    <div>
      <div v-for="(item) in books" :key="item">
        <div v-for="(v,k) in item" :key="k">
          {{k}} ---- {{v}}
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App5",
  data() {
    return {
      list: ["java", "python", "vue", "react"],
      obj: {name:"学习园地",url: "https://www.baidu.com"},
      books: [
        {id:1, name: "细说php", price:135},
        {id:2, name: "细说java", price:240},
        {id:3, name: "细说vue", price:360},
        {id:4, name: "细说react", price:195}
      ]
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
