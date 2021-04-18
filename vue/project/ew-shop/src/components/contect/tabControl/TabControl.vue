<template>
  <div class="tab-control">
    <div class="tab-control-item" :class="currentIndex === index ? 'active' : ''" v-for="(item, index) in title" v-bind:key="index" @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(props, {emit}) {
    console.log(props);
    let currentIndex = ref(0);

    const changeIndex = (index) => {
        currentIndex.value = index;
        emit("tabClick", index);
    }

    return {
      currentIndex,
      changeIndex
    };
  }
}
</script>

<style scoped lang="scss">
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  background-color: #ffffff;
  width: 100%;

  position: sticky;
  top:45px;
  z-index: 6;

  .tab-control-item {
    flex: 1;
    span {
      padding: 6px;
    }
  }
  .active{
    color: var(--color-tint);
    span {
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>