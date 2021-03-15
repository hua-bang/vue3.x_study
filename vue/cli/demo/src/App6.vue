<template>
  <div>
    <div>
      书名：<input type="text" v-model="bookName" />
      价格：<input type="text" v-model="bookPrice" />
      <button @click="add">add</button>
    </div>
    <div>
      <div v-for="(item) in books">
          <input type="checkbox"> {{item.id}} ---- {{item.name}}
      </div>
    </div>
    <hr>
    <div>
      <div v-for="(item) in books" :key="item.id">
        <input type="checkbox"> {{item.id}} ---- {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App6",
  data() {
    return{
      books: [
        {id:1, name: "细说php", price:135},
        {id:2, name: "细说java", price:240},
        {id:3, name: "细说vue", price:360},
        {id:4, name: "细说react", price:195}
      ],
      bookName: "",
      bookPrice: 0
    }
  },
  computed: {
    newId() {
      return this.books.length;
    }
  },
  methods: {
    add() {
      let book = {
        id: this.newId,
        name: this.bookName,
        price: this.bookPrice
      }
      this.books.unshift(book);
      this.bookName = "";
      this.bookPrice = 0;
    }
  }
}
</script>

<style scoped>

</style>
