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
    <TabControl @tabClick="tabClick" :title="['畅销', '新书', '精选']"></TabControl>
    <GoodList :goods="showGoods"></GoodList>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/common/navbar/NavBar";
import RecommendView from "./home/ChildComps/RecommendView";
import TabControl from "../components/contect/tabControl/TabControl";
import GoodList from "../components/contect/goods/GoodList";

import {getHomeData, getHomeGoods} from "../api/shop";
import {computed, onMounted, reactive, ref} from "vue";

export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodList
  },
  setup() {
    const recommends = ref([]);

    const goods = reactive({
      sales: {page:0, list: []},
      new: {page:0, list: []},
      recommend: {page:0, list: []}
    })

    let currentType = ref('sales');

    const showGoods = computed(() => {
      return goods[currentType.value].list;
    })

    onMounted(() => {
      getHomeData().then((res) => {
        recommends.value = res.goods.data;
      })

      getHomeGoods().then(res => {
        goods.sales.list = res.goods.data;
      });

      getHomeGoods('recommend').then(res => {
        goods.recommend.list = res.goods.data;
      });

      getHomeGoods('new').then(res => {
        goods.new.list = res.goods.data;
      });
    });

    const tabClick = (val) => {
      let types = ['sales', 'new', 'recommend'];
      currentType.value = types[val];
    }

    return {
      recommends,
      tabClick,
      goods,
      showGoods
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
