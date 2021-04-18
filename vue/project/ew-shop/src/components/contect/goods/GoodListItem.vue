<template>
  <div class="good-item">
    <img :src="product.cover_url" alt="">
    <div class="good-info">
      <p>{{product.title}}</p>
      <span class="price"><small>￥</small>{{product.price}}</span>
      <span class="collect">{{product.collects_count}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.good-item {
  width: 46%;
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }

  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }

    .price {
      color: red;
      margin-right: 20px;
    }

    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      width: 14px;
      height: 14px;
      top: -1px;
      background: url("~assets/images/collect.png") 0 0/14px 14px;
    }
  }
}
</style>