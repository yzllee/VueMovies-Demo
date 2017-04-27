<template>
<div id="app">
  <router-view></router-view>
  <FooterTab></FooterTab>
</div>
</template>

<script>
import Home from './views/Home';
import FooterTab from './views/FooterTab';

export default {
  name: 'app',
  components: {
    Home,
    FooterTab,
  }
}
</script>

<style lang="css">
@import "./assets/style.css";
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212121;
  background:#f5f5f5;
  position: relative;
  min-height: 100%;
  padding-bottom: 60px;
  flex: 1;
}
.trans-opacity-enter-active, .trans-opacity-leave-active{
  transition: opacity 0.5s;
}
.trans-opacity-enter, .trans-opacity-leave-active{
  opacity: 0;
}
</style>
