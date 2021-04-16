<template>
  <div class="nav-bar">
    <div class="left" @click="goBack">
      <slot name="left">
        <div class="left-icon">
          <img src="~assets/images/left.png" alt="">
        </div>
      </slot>
    </div>
    <div class="center">
      <slot>ewShop</slot>
    </div>
    <div class="right">
      <slot name="right">
        <div class="right-icon">
          <img src="~assets/images/right.png" alt="">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import {useRouter} from "vue-router"

export default {
  name: "NavBar",
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    }

    return {
      goBack
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 45px;
  line-height: 45px;
  z-index: 9;
  background-color: var(--color-tint);
  box-shadow: 0 2px 0 rgba(100, 100, 100, 0.1);
  color: #FFFFFF;
  text-align: center;
  display: flex;
}
.left, .right {
  width: 60px;
}
.left-icon, .right-icon{
  img{
    margin-top: 10px;
    width: 25px;
  }
}
.center{
  flex:1;
}
</style>