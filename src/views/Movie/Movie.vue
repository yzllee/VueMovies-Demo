<template>
<div id='movie'>

  <div class="movie-head">
    <mu-paper :zDepth="2">
      <mu-appbar title='电影'>
        <mu-icon value="home" :size="32" slot="left"/>
        <mu-icon-button icon='search' slot="right" @click="goSearch()"/>
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="in_theaters" title="正在热映" />
        <mu-tab value="coming_soon" title="即将上映" />
      </mu-tabs>
    </mu-paper>
  </div>

  <div v-if="activeTab === 'in_theaters'">
    <Card tab-name='in_theaters'></Card>
  </div>
  <div v-if="activeTab === 'coming_soon'">
    <Card tab-name='coming_soon'></Card>
  </div>

</div>
</template>

<script>
import {
  mapState
} from 'vuex';
import Card from './Card';
import * as type from './../../store/movies/type';

export default {
  data() {
    return {
    }
  },
  components: {
    Card,
  },
  computed: mapState({
    activeTab: state => state.movie.tab,
  }),
  methods: {
    handleTabChange(val) {
      this.$store.dispatch(type.CHANGE_MOVIES_TAB, val);
    },
    goSearch(){
      this.$router.push({ name: 'MovieSearch' });
    }
  }
}
</script>

<style lang="css">
#movie{
	width: 100%;
	height: 100%;
}
.movie-head{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
.drawer{
  color: #212121;
  background:#f5f5f5;
}
</style>
