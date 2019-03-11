<template>
  <div class="myApp">
    <NavBar></NavBar>
    <div id="content">
      <!--<router-view></router-view>-->
      Home Page
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from './../components/NavBar.vue';
import Footer from './../components/Footer.vue';
export default {
    components: {
        NavBar,
        Footer
    }
};
</script>

<style lang="scss" scoped>
  .myApp {
    font-family: Montserrat-bold, sans-serif;
    min-height: 100vh;
  }
  #content {
    max-width: 1920px;
    margin: 0 auto;
  }
</style>
