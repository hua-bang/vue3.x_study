<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends.slice(0,4)" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.cover_url" alt="item.title">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>

import {useRouter} from "vue-router";

export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup() {
    const router = useRouter();
    const goDetail = (id) => {
        router.push({
          path: "/detail",
          query: {
            id
          }
        })
    };

    return {
      goDetail
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
  border-bottom: 6px solid #eee;
  .recommend-item {
    flex: 1;
    width: 25%;
    img {
      width: 70px;
    }
  }

}
</style>