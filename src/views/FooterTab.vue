<template lang="html">
  <div id='footer'>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="Home" title="电影" icon="ondemand_video" />
        <mu-bottom-nav-item value="Music" title="音乐" icon="music_note" />
        <mu-bottom-nav-item value="Books" title="图书" icon="books" />
        <mu-bottom-nav-item value="About" title="关于" icon="info" />
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex';
import * as type from './../store/movies/type';

export default {
  data() {
    return {
      bottomNav: 'Home',
      bottomNavColor: 'Home'
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
      this.$router.push({ name: val });
    }
  }
}
</script>

<style lang="css">
#footer{
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
