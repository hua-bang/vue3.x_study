<template>
  <router-view/>
  <div id="nav">
    <router-link to="/" class="tab-bar-item">
      <div class="icon">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div>首页</div>
    </router-link>
    <router-link to="/category" class="tab-bar-item">
      <div class="icon">
        <i class="iconfont icon-fenlei"></i>
      </div>
      <div>分类</div>
    </router-link>
    <router-link to="/shopCart" class="tab-bar-item">
      <div class="icon">
        <i class="iconfont icon-huaban5"></i>
      </div>
      <div>购物车</div>
    </router-link>
    <router-link to="/profile" class="tab-bar-item">
      <div class="icon">
        <i class="iconfont icon-yonghu"></i>
      </div>
      <div>我的</div>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "~assets/css/base.css";
@import "~assets/css/iconfont/iconfont.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: fixed;
  bottom:0;
  width: 100vw;
  background: #F6F6F6;
  display: flex;
  box-shadow: 0 -3px 1px rgba(100,100,100,0.1);

  a {
    color: var(--color-text);

    &.router-link-exact-active {
      color: var(--color-high-text);
    }
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 60px;
    font-size: var(--font-size);
  }
  .tab-bar-item .icon {
    width: 24px;
    height: 24px;
    margin-top: 10px;
    display: inline-block;
    vertical-align: center;
  }
}
</style>
