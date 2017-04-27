import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Movie from '@/views/Movie/Movie';
import MovieSubject from '@/views/Movie/Subject';
import MovieSearch from '@/views/Movie/Search';
import Music from '@/views/Music/Music';
import Books from '@/views/Books/Books';
import About from '@/views/About/About';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/movie/home',
    name: 'Home',
    component: Home
  },{
    path: '/movie/home',
    name: 'Movie',
    component: Movie
  },{
    path: '/movie/subject/:id',
    name: 'MovieSubject',
    component: MovieSubject
  },{
    path: '/movie/search',
    name: 'MovieSearch',
    component: MovieSearch
  },{
    path: '/music',
    name: 'Music',
    component: Music
  },{
    path: '/books',
    name: 'Books',
    component: Books
  },{
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/vueapp',
    redirect: '/movie/home'
  }]
})
