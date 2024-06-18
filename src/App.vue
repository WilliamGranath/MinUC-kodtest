<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
    <ContentComponent />
  </div>
</template>

<script>
import ContentComponent from "./components/ContentComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    ContentComponent,
    MainComponent,
    HeaderComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #fff;
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
