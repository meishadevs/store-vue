
<!-- 回到顶部按钮组件 -->

<template>
  <a class="go-top" href="javascript:;" v-if="isShow" @click="goTop()">
  </a>
</template>

<script>
  export default {
    name: 'goTop',

    data() {
      return {
        leader: 0,
        target: 0,
        timer: null,
        isShow: false
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {

        //监听浏览器的滚动事件
        window.onscroll = () => {

          //获得竖直方向上的滚动条到浏览器顶部的距离
          var scrollTop = this.getScrollTop();

          //如果在竖直方向上滚动了网页，显示回到顶部按钮
          this.isShow = scrollTop > 0;

          //记录网页在竖直方向上滚动的距离
          this.leader = scrollTop;
        };
      });
    },

    methods: {

      //实现回到顶部的逻辑
      goTop: function () {

        //关闭定时器
        clearInterval(this.timer);

        this.target = 0;

        this.timer = setInterval(() => {

          this.leader = this.leader + (this.target - this.leader) / 10;

          //去往页面的某个位置
          window.scrollTo(0, this.leader);

          if (this.leader === this.target) {
            clearInterval(this.timer);
          }
        }, 10);
      },

      //获取滚动条到浏览器顶部的距离
      getScrollTop: function () {

        var scrollPos;

        if (window.pageYOffset) {

          scrollPos = window.pageYOffset;

        } else if (document.compatMode && document.compatMode !== 'BackCompat') {

          scrollPos = document.documentElement.scrollTop;

        } else if (document.body) {

          scrollPos = document.body.scrollTop;
        }

        return scrollPos;
      }
    }
  };
</script>

<style scoped>
  .go-top {
    width: 68px;
    height: 29px;
    background: url(../../static/images/top.png) no-repeat left bottom;
    cursor: pointer;
    position: fixed;
    right: 15px;
    bottom: 75px;
  }

  .go-top:hover {
    background-position: left top;
  }
</style>
