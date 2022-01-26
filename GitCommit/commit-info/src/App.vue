<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="This is sample vue js app"/> -->
    <!-- <CommitInfo msg="This is sample vue js app"/> -->
    <router-view />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import CommitInfo from './components/CommitInfo.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    //CommitInfo
  }
}
</script>

<style>
#app {
 /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  */
}
</style>
