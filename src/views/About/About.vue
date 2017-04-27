<template lang="html">
  <div id='about'>
    <div class="about-head">
      <mu-appbar title="关于">
      </mu-appbar>
    </div>

    <mu-paper class="demo-paper" circle :zDepth="3">
      <img src='./../../assets/images/icebear.jpg' />
    </mu-paper>


    <div class='detial'>
      <p>基于豆瓣api的Vue Demo</p>
    </div>
    <mu-divider />
    <div class='links'>
      <mu-list>
        <mu-sub-header>访问github上的源码</mu-sub-header>
        <mu-paper>
          <mu-list-item title="GitHub">
            <mu-icon slot="left" value="link"/>
          </mu-list-item>
        </mu-paper>
        <mu-sub-header>联系我</mu-sub-header>
        <mu-paper>
          <mu-list-item :title="'\u0069\u0061\u006d\u0079\u0061\u007a\u006c\u0065\u0065\u0040\u0068\u006f\u0074\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d'">
            <mu-icon slot="left" value="email"/>
          </mu-list-item>
        </mu-paper>
      </mu-list>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.about-head{

}
.detial{
  font-size:24px;
}
.links{
  text-align: left;
}
</style>
