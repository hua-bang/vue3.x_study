<template>
  <div>
    <nav-bar>
      <template v-slot:default>
        图书兄弟
      </template>
    </nav-bar>
    
    <div class="banners">
      <img src="~assets/images/resource/20210406sxj_750x315.jpg" alt="">
    </div>
    <div class="recommend">
      <RecommendView :recommends="recommends"></RecommendView>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/common/navbar/NavBar";
import RecommendView from "./home/ChildComps/RecommendView";

import {getHomeData} from "../api/shop";
import {onMounted, ref} from "vue";

export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView
  },
  setup() {
    const recommends = ref([]);

    onMounted(() => {
      getHomeData().then((res) => {
        recommends.value = res.goods.data;
      })
    });

    return {
      recommends
    }
  }
}
</script>

<style scoped>
.banners img {
  width: 100%;
  height: auto;
  margin-top: 45px;
}
</style>
