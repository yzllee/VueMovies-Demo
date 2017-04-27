<template>
<div class="wrap">

  <mu-row class='card-row'>
    <mu-col class='card-elem' width="33" tablet="25" desktop="20" v-for="subject in subjects" :key="subject.id">
      <router-link :to="{name: 'MovieSubject', params:{id: subject.id}}">
        <mu-paper>
          <div class='card-border'>
            <div class='card-img' :style="'background-image: url('+subject.images.large+')'"></div>
          </div>
          <div class="card-text">
            <p>{{subject.title}}</p>
            <p class="card-star-box">
              <span class="card-star" v-if="subject.rating.average > 0">
                <mu-icon class='star-icon' value="star" v-for="n in ratingStar(subject.rating.average).star"
                :key="subject.id + ratingStar(subject.rating.average).star"/>
                <mu-icon class='star-icon' value="star_half" v-for="n in ratingStar(subject.rating.average).half"
                :key="subject.id + ratingStar(subject.rating.average).half"/>
                <mu-icon class='star-icon' value="star_border" v-for="n in ratingStar(subject.rating.average).left"
                :key="subject.id + ratingStar(subject.rating.average).left"/>
              </span>
              <span class='card-rating'>{{subject.rating.average | fixNum}}</span>
            </p>
          </div>
        </mu-paper>
      </router-link>
    </mu-col>
  </mu-row>

  <!-- <div v-if='isLoading'>
    <p class='building'>加载中...</p>
    <mu-circular-progress :size="40"/>
  </div> -->
</div>
</template>
<script>
import {
  mapState
} from 'vuex';
import * as type from './../../store/movies/type';

export default {
  props: ['tabName'],
  data(){
    return{
    }
  },
  methods:{
    ratingStar(item) {
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
    fetchData() {
      if (!(this.$store.state.movie.movies[this.tabName].subjects
        && this.$store.state.movie.movies[this.tabName].subjects.length > 0)) {
        this.$store.dispatch(type.FETCH_MOVIES, {
          type: this.tabName
        });
      };
    }
  },
  computed: mapState({
    subjects(state) {
      return state.movie.movies[this.tabName].subjects;
    }
  }),
  mounted() {
    this.fetchData();
  },
  beforeUpdate(){
    this.fetchData();
  },
  destroyed() {
    console.log('des');
  }
}
</script>

<style lang='css' scoped>
.wrap{
  padding: 6px;
  padding-top: 110px
}
.wrap>.card-row{
  justify-content: flex-start;
  flex-flow: row wrap;
}
.card-elem{
  padding: 6px;
}
.card-border{
  position: relative;
  border-radius: 2px 2px 0 0;
  overflow: hidden;
}
.card-img{
  position: relative;
  width: 100%;
  padding-top:141%;
  background-size: cover;
  -moz-background-size: cover;
}
.card-img-wrap{
  top:0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 2px 2px 0px 0px;
  box-sizing: border-box;
}
.card-img-wrap>img{
  width: 100%;
}
.card-text{
  padding-top: 6px;
}
.card-text>p{
  margin: 0;
  padding: 0 6px;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.star-icon{
  font-size: 14px;
  margin-right: -4px;
  float: left;
}
.card-star-box{
  color: #f44336;
}
.card-star{
  margin-right: 4px;
  font-size: 12px;
}
.card-rating{
  position: relative;
  top: -2px;
}
</style>
