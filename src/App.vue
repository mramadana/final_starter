<template>
  <nav-bar></nav-bar>
  <router-view />
  <!-- <my-footer></my-footer> -->
  <My-footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MyFooter from "@/components/MyFooter.vue"


export default {
  components: {
    NavBar,
    MyFooter,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
