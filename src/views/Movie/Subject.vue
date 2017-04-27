<template lang="html">
  <div class="movie-subject">
    <div class="subject-head">
      <mu-appbar :title='movie.title'>
        <mu-icon-button class='icon-back' icon='arrow_back' slot="left" @click='goBack()' />
        <mu-icon-button slot="right"/>
      </mu-appbar>
    </div>

    <div class="movie-subject-iamge">
      <mu-paper class="demo-paper" :zDepth="4" style="width:35%;height:200px;">
        <img :src="movie.images.large" style="width:100%;">
      </mu-paper>
    </div>

    <div class="movie-subject-text">
      <div class="text-left">
        <h3>{{movie.title}}</h3>
        <p>
          <span>{{movie.year}}/</span>
          <span>{{movie.countries | addPath}}/</span>
          <span>{{movie.genres | addPath}}</span>
        </p>
        <p>原名：{{movie.original_title}}</p>
      </div>
      <div class="text-right">
        <mu-paper class="demo-paper" :zDepth="4">
          <div class="movie-star-box">
            <h3>{{movie.rating.average | fixNum}}</h3>
            <p class="movie-card-star" v-if="movie.rating.average > 0">
              <mu-icon class='movie-star-icon' value="star" v-for="n in ratingStar(movie.rating.average).star"
              :key="Math.random()"/>
              <mu-icon class='movie-star-icon' value="star_half" v-for="n in ratingStar(movie.rating.average).half"
              :key="Math.random()"/>
              <mu-icon class='movie-star-icon' value="star_border" v-for="n in ratingStar(movie.rating.average).left"
              :key="Math.random()"/>
            </p>
            <p class="collect_count">{{movie.collect_count}}人</p>
          </div>
        </mu-paper>
      </div>
    </div>

    <mu-divider />
    <div class="movie-summary">
      <mu-sub-header>剧情简介</mu-sub-header>
      <p>{{movie.summary}}</p>
    </div>

    <mu-divider />
    <div class="movie-author">
      <mu-sub-header>影人</mu-sub-header>
      <mu-grid-list class="movie-author-list" style="margin: 0 10px;">
        <mu-grid-tile v-for="subject in movie.directors" :key="Math.random()">
          <img :src="subject.avatars && subject.avatars.large || ''"/>
          <span slot="title"><b>导演</b></span>
          <span slot="subTitle"><b>{{subject.name}}</b></span>
        </mu-grid-tile>
        <mu-grid-tile v-for="subject in movie.casts" :key="Math.random()">
          <img :src="subject.avatars && subject.avatars.large || ''"/>
          <!-- <span slot="title"><b>主演</b></span> -->
          <span slot="subTitle"><b>{{subject.name}}</b></span>
        </mu-grid-tile>
      </mu-grid-list>
    </div>

  </div>
</template>

<script>
import router from './../../router';
import {
  fetchMovieSubject
} from './../../store/movies/api';

export default {
  name: 'movieSubject',
  data() {
    return {
      movie: {
        rating: {},
        images: {},
        countries: [],
        genres: [],
        casts: [],
        directors: [],
        aka: [],
      }
    }
  },
  watch:{
    $route(to){
      this.getSubjectID(to.params.id);
    }
  },
  mounted() {
    this.getSubjectID(this.$route.params.id);
  },
  methods:{
    getSubjectID(id) {
      fetchMovieSubject(id).then((res) => {
        this.movie = res;
        console.log(res);
      })
    },
    ratingStar(item) {
      if (!item) {
        return {
          star: 0,
          half: 0,
          left: 0,
        };
      }
      const intNum = Math.round(item);
      const star = Math.floor(intNum / 2);
      const half = intNum % 2;
      const left = 5 - star - half;
      return {
        star,
        half,
        left,
      };
    },
    goBack(){
      router.go(-1);
    }
  }
}
</script>

<style lang="css">
.subject-head{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
.subject-head>.mu-appbar{
  background-color: rgba(71, 74, 79, .4);
}
.movie-subject-iamge{
  padding-top: 60px;
  background: #e0e0e0;
}
.movie-subject-text::before,.movie-subject-text::after{
  content: '';
  display: table;
  clear: both;
}
.movie-subject-text .text-left{
  width: 60%;
  float: left;
  margin: 10px;
}
.movie-subject-text .text-right{
  float: right;
  margin-top: 10px;
}
.movie-star-box>h3{
  margin: 10px 0;
}
.movie-card-star{
  color:#ffa700;
  margin-top: 0;
}
.movie-card-star::before,.movie-card-star::after{
  content: '';
  display: table;
  clear: both;
}
.movie-star-icon{
  font-size: 16px;
  margin-right: 4px;
  float: left;
}
.collect_count{
  margin: 0;
}
.movie-summary,.movie-author{
  text-align: left;
}
.movie-summary>p{
  padding: 0 10px;
}
.movie-author{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.movie-author-list{
  display: flex;
  text-align: center;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.mu-grid-tile > img{
  width: 127px;
}
.mu-grid-tile-title-container{
  margin-left: 0;
}
</style>
