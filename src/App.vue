<template>
  <div id="app">
    <!-- <NavBar /> -->
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MainPage,
  },
  methods: {
    ...mapActions(["setSession","setJWT"]),
  },
  async created() {
   await this.setJWT()
    await this.setSession();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
