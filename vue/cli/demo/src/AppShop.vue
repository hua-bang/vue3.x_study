<template>
  <div>
    <table>
      <caption><h1>购物车</h1></caption>
      <tr>
        <th></th>
        <th>编号</th>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in cartList" :key="item.id">
        <td><input type="checkbox" v-model="item.checkbox"></td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="item.count--" :disabled="item.count<=1">-</button>
          {{item.count}}
          <button @click="item.count++">+</button>
        </td>
        <td>
          <a href="#" @click.prevent="del(index)">删除</a>
        </td>
      </tr>
      <tr>
        <td colspan="6" style="text-align: center">总价：{{totalPrice}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppShop",
  data() {
    return {
      cartList: [
        {id:1, checkbox: true, name:"《细说php》", price:30, count: 1},
        {id:1, checkbox: true, name:"《细说js》", price:40, count: 1},
        {id:1, checkbox: true, name:"《细说dom,bom》", price:20, count: 1}
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartList.filter(v => v.checkbox).reduce((total, book) => total += book.price * book.count,0)
    }
  },
  methods: {
    del(index) {
      this.cartList.splice(index,1);
    }
  }
}
</script>

<style scoped>
table {
  width: 600px;
  border: 1px solid #888888;
  border-collapse: collapse;
}
td, th {
  border: 1px solid #888888;
  padding: 10px;
}
th {
  background: #ccc;
}
</style>
