<!-- 轮播图组件 -->

<template>
  <div class="banner" @mouseenter="stopPlay()" @mouseleave="play()">
    <ul class="banner-list">
      <li v-bind:class="{fadeIn: currentIndex == 1}">
        <a href="javascript:;">
          <img src="../assets/images/banner/banner1.jpg" alt="轮播图">
        </a>
      </li>
      <li v-bind:class="{fadeIn: currentIndex == 2}">
        <a href="javascript:;">
          <img src="../assets/images/banner/banner2.jpg" alt="轮播图">
        </a>
      </li>
      <li v-bind:class="{fadeIn: currentIndex == 3}">
        <a href="javascript:;">
          <img src="../assets/images/banner/banner3.jpg" alt="轮播图">
        </a>
      </li>
      <li v-bind:class="{fadeIn: currentIndex == 4}">
        <a href="javascript:;">
          <img src="../assets/images/banner/banner4.jpg" alt="轮播图">
        </a>
      </li>
    </ul>
    <ol class="circle-list">
      <li v-bind:class="{current: currentIndex == 1}" @click="currentIndex = 1"></li>
      <li v-bind:class="{current: currentIndex == 2}" @click="currentIndex = 2"></li>
      <li v-bind:class="{current: currentIndex == 3}" @click="currentIndex = 3"></li>
      <li v-bind:class="{current: currentIndex == 4}" @click="currentIndex = 4"></li>
    </ol>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: 'banner',

    data() {
      return {
        currentIndex: 1,
        timer: null
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        this.play();
      });
    },

    methods: {

      //播放轮播图
      play: function () {
        this.timer = setInterval(() => {

          this.currentIndex++;

          if (this.currentIndex > 4) {
            this.currentIndex = 1;
          }
        }, 3000);
      },

      //停止播放轮播图
      stopPlay: function () {
        clearInterval(this.timer);
      }
    }
  };
</script>

<style scoped>
  .banner {
    width: 811px;
    height: 320px;
    position: relative;
  }

  /* 轮播图 */
  .banner-list li {
    z-index: 2;
    opacity: 0;
    position: absolute;
  }

  /* 小圆圈 */
  .circle-list {
    margin-left: -70px;
    z-index: 3;
    position: absolute;
    left: 50%;
    bottom: 20px;
  }

  .circle-list li {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    float: left;
  }

  .circle-list li.current {
    background-color: #ff7700;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
