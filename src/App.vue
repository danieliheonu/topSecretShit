<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from './components/NavbarComponent.vue'
import Section from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Section,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  background-color: rgba(244, 255, 255, 0.4);
}
</style>
