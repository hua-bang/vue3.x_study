<template>
  <div id="home">
    <nav-bar>
      <template v-slot:default>
        图书兄弟
      </template>
    </nav-bar>

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div ref="banRef">
          <div class="banners">
            <img src="~assets/images/resource/20210406sxj_750x315.jpg" alt="">
          </div>
          <div class="recommend">
            <RecommendView :recommends="recommends"></RecommendView>
          </div>
        </div>
        <TabControl @tabClick="tabClick" :title="['畅销', '新书', '精选']"></TabControl>
        <GoodList :goods="showGoods"></GoodList>
      </div>
    </div>
    <BackTop @backTop="backTop"></BackTop>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/common/navbar/NavBar";
import RecommendView from "./home/ChildComps/RecommendView";
import TabControl from "../components/contect/tabControl/TabControl";
import GoodList from "../components/contect/goods/GoodList";
import BackTop from "../components/common/backTop/BackTop";
import {getHomeData, getHomeGoods} from "../api/shop";
import {computed, onMounted, reactive, ref, watchEffect, nextTick} from "vue";
import BetterScroll from 'better-scroll'


export default {
  name: 'Home',
  components: {
    NavBar,
    RecommendView,
    TabControl,
    GoodList,
    BackTop
  },
  setup() {

    let isTabFixed = ref(true);
    const recommends = ref([]);
    let banRef= ref(null);

    const goods = reactive({
      sales: {page: 1, list: []},
      new: {page: 1, list: []},
      recommend: {page: 1, list: []}
    })

    let currentType = ref('sales');

    const showGoods = computed(() => {
      return goods[currentType.value].list;
    })

    let bsScroll = reactive({});

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

      bsScroll = new BetterScroll(document.querySelector(".wrapper"), {
        probeType: 3,
        click: true,
        pullUpLoad: true
      });

      bsScroll.on("scroll", (position) => {
        isTabFixed.value = (-position.y) > banRef.value.offsetHeight;
      })

      bsScroll.on("pullingUp", () => {
        const page = goods[currentType.value].page + 1;
        getHomeGoods(currentType.value, page).then(res => {
          goods[currentType.value].list.push(...res.goods.data);
          goods[currentType.value].page += 1;
        })

        bsScroll.finishPullUp();

        bsScroll.refresh();
      })

    });

    watchEffect(() => {
      nextTick(() => {
        bsScroll && bsScroll.refresh();
      })
    })

    const tabClick = (val) => {
      let types = ['sales', 'new', 'recommend'];
      currentType.value = types[val];

      nextTick(() => {
        bsScroll && bsScroll.refresh();
      })
    }

    const backTop = () => {
      bsScroll.scrollTo(0,0,500)
    }

    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      isTabFixed,
      banRef,
      backTop
    }
  }
}
</script>

<style scoped>
.banners img {
  width: 100%;
  height: auto;
}
#home {
  height: 100vh;
  position: relative;
}
.wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.content {

}
</style>
