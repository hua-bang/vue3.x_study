<template>
  <div class="about">
    <h1>This is an about page</h1>
    <img src="~assets/logo.png" />
  </div>
</template>

<script>
import {getHomeData} from "../api/shop";

export default {
  name: "About",
  setup() {
    getHomeData().then(res => {
      console.log(res);
    })
  }
}

</script>
