<template lang="html">
  <div id='music'>

    <div class="music-head">
      <mu-appbar title="音乐">
      </mu-appbar>
    </div>

    <div>
      <mu-paper class="demo-paper" circle :zDepth="3">
        <img src='./../../assets/images/icebear.jpg' />
      </mu-paper>
    </div>

    <div>
      <p class='building'>施工中...</p>
      <mu-circular-progress :size="40"/>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.music-head{

}
.demo-paper {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 20px;
  text-align: center;
  overflow: hidden;
}
</style>
