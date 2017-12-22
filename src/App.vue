<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <background/>
  </div>
</template>

<script>
import Background from "@/components/Background"
export default {
  name: 'app',
  components: {
    Background
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 23%;
}
</style>
