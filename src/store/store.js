import Vue from 'vue';
import Vuex from 'vuex';
import movie from './movies/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    movie
  }
})
