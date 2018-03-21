
<!-- 轮播图组件 -->

<template>
  <div class="banner" @mouseenter="stopPlay()" @mouseleave="play()">
    <ul class="banner-list">
      <li v-for="(item, index) in bannerData" v-bind:class="{ fadeIn: currentIndex == index + 1 }">
        <router-link v-bind:to="item.url">
          <img v-bind:src="item.imageUrl" alt="轮播图">
        </router-link>
      </li>
    </ul>
    <ol class="circle-list">
      <li v-for="(item, index) in bannerData" v-bind:class="{ current: currentIndex == index + 1 }" @click="currentIndex = index + 1"></li>
    </ol>
  </div>
</template>

<script>
  export default {

    //组件名称
    name: "Banner",

    props: ["bannerData"],

    data() {
      return {

        //当前选中的轮播图索引
        currentIndex: 1,

        //定时器
        timer: null
      };
    },

    //初始化
    mounted() {
      this.$nextTick(() => {
        this.play();
      });
    },

    methods: {

      //播放轮播图
      play() {
        this.timer = setInterval(() => {

          this.currentIndex++;

          if (this.currentIndex > this.bannerData.length) {
            this.currentIndex = 1;
          }
        }, 3000);
      },

      //停止播放轮播图
      stopPlay() {
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
