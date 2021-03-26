<template>
  <div class="home">
    {{$store.state.num}}
  </div>
  <div>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
  <div>
    <button @click="addVal">+</button>
    <button @click="supVal">-</button>
  </div>
  <div>
    <button @click="addValArr">+</button>
    <button @click="supValArr">-</button>
  </div>
  <div>
    <button @click="actionTest">action按钮</button>
    <button @click="asyncActionTest">asyncAction按钮</button>
  </div>
  <div>
    <Sup></Sup>
  </div>
</template>

<script>
// @ is an alias to /src
import Sup from "../components/Sup";
export default {
  name: "Home",
  components: {
    Sup
  },
  methods: {
    add() {
      this.$store.commit("add");
    },
    sub() {
      this.$store.commit("sup");
    },
    addVal() {
      this.$store.commit("addVal", 3);
    },
    supVal() {
      this.$store.commit("supVal", 2);
    },
    addValArr() {
      this.$store.commit("addValArr",[2,6,10]);
    },
    supValArr() {
      this.$store.commit("supValArr",[2,6,10]);
    },
    actionTest() {
      this.$store.dispatch("actionA");
    },
    asyncActionTest() {
      this.$store.dispatch("asyncAction").then(() => {
        console.log("asyncActionTest");
      })
    }
  }
};
</script>
