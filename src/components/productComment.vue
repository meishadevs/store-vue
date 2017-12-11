
<!-- 商品评价组件 -->

<template>
  <div class="comment-box">
    <div class="comment-top">
      <h3 class="title">商品评价</h3>
      <div class="comment-content clearfix">

        <!-- 商品评价的分数 s -->
        <div class="score">4.7<em>分</em></div>
        <!-- 商品评价的分数 -->

        <!-- 商品评价描述 s -->
        <div class="des-comment">
          <div class="show-score">
            4.7
            <span class="triangle"></span>
          </div>
          <ul>
            <li class="comment-1">非常不满意</li>
            <li class="comment-2">不满意</li>
            <li class="comment-3">一般</li>
            <li class="comment-4">满意</li>
            <li class="comment-5">非常满意</li>
          </ul>
          <p class="comment-text">共18939位慕课网友参与评分</p>
        </div>
        <!-- 商品评价描述 e -->

      </div>
    </div>
    <!-- 商品咨询 s -->
    <div class="advisory-box clearfix">
      <div class="advisory-title clearfix">
        <div class="all">
          <a href="javascript:;">全部咨询(<i class="appra-num">{{ totalAdvisory }}</i>)</a>
        </div>
        <div class="send">
          <a href="javascript:;">发表咨询</a>
        </div>
      </div>
      <div class="notice">
        提示:因厂家更改产品包装、产地或者更换随机附件等没有任何提前通知，且每位咨询者购买情况、提问时间等不同，为此以下回复信息仅供参考！若由此给您带来不便请多多谅解，谢谢！
      </div>

      <!-- 商品咨询列表组件 s -->
      <advisoryList v-bind:curPage="curPage" v-bind:numAdvisory="numAdvisory"></advisoryList>
      <!-- 商品咨询列表组件 e -->

      <div class="rate-page-box">
        <!-- 翻页组件 s -->
        <ratePage v-bind:totalPage="totalPage" v-bind:curPage="curPage"></ratePage>
        <!-- 翻页组件 e -->
      </div>

    </div>
    <!-- 商品咨询 e -->
  </div>
</template>

<script>
  import advisoryList from '../components/advisoryList';
  import ratePage from '../components/ratePage';

  export default {
    name: 'productComment',

    components: {
      advisoryList,
      ratePage
    },

    data() {
      return {

        //商品咨询的总数
        totalAdvisory: 0,

        //每页展示的商品咨询数
        numAdvisory: 5,

        //一共有多少页商品咨询
        totalPage: 0,

        //当前展示的第几页商品咨询
        curPage: 1
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {

        //获得商品咨询的数量
        this.getAdvisoryNum();

        //监听翻页组件中传递过来的事件
        this.bus.$on('change-page', (page) => {
          this.curPage = page;
        });

      });
    },

    methods: {

      //获得商品咨询的数量
      getAdvisoryNum: function () {

        //发送get请求，获得商品咨询的数量
        this.jsonp(this.advisoryNumUrl, null, (err, data) => {
          if (err) {
            console.error("error:", err.message);
          } else {

            //获得商品咨询的数量
            this.totalAdvisory = data;

            //计算一共有多少页
            this.totalPage = this.totalAdvisory / this.numAdvisory;
          }
        });
      }
    }
  };
</script>

<style scoped>

  /* 商品评价 */
  .comment-box {
    background-color: #fff;
  }

  .comment-top {
    height: 160px;
    padding-left: 10px;
  }

  /* 商品评价的标题 */
  .comment-top .title {
    margin-bottom: 22px;
    font: bold 14px/38px "新宋体";
  }

  /* 商品评价得分 */
  .comment-top .score {
    font: bold 50px/25px "微软雅黑", "microsoft yahei";
    color: #FF8F00;
    float: left;
  }

  .comment-top .score em {
    font: bold 18px/25px "微软雅黑", "microsoft yahei";
    color: #65657D;
  }

  .comment-top .des-comment li {
    float: left;
  }

  .des-comment {
    width: 450px;
    margin-left: 100px;
    position: relative;
  }

  .des-comment .show-score {
    width: 25px;
    height: 14px;
    line-height: 14px;
    text-align: center;
    background-color: #7F7F7F;
    color: #fff;
    position: absolute;
    right: 17px;
    top: -22px;
  }

  /* 小三角 */
  .des-comment .show-score .triangle {
    width: 0;
    height: 0;
    border-color: #7F7F7F transparent transparent transparent;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    position: absolute;
    left: 10px;
    top: 14px;
  }

  .des-comment ul {
    width: 450px;
    height: 16px;
    line-height: 16px;
    background-color: #BDBDBD;
    color: #fff;
  }

  .des-comment .comment-1 {
    padding: 0 29px 0 26px;
  }

  .des-comment .comment-2 {
    width: 82px;
  }

  .des-comment .comment-3 {
    width: 76px;
  }

  .des-comment .comment-4 {
    width: 65px;
  }

  .des-comment .comment-5 {
    width: 112px;
  }

  .des-comment .comment-text {
    padding-top: 7px;
    font-family: "新宋体";
    font-size: 12px;
    color: #65657D;
  }

  /* 商品咨询 */
  .advisory-box {
    width: 785px;
    margin-top: 15px;
    padding-bottom: 20px;
    background-color: #fff;
  }

  .advisory-title {
    width: 100%;
    height: 33px;
    margin-bottom: 10px;
    border-bottom: solid 1px #0688BA;
  }

  .advisory-title .all, .advisory-title .send {
    width: 132px;
    height: 32px;
    font: 12px/32px "微软雅黑", "microsoft yahei";
    text-align: center;
    border: solid 1px #0688BA;
    border-bottom: solid 1px #fff;
    float: left;
  }

  .advisory-title a {
    color: #0688BA;
  }

  /* 发表咨询 */
  .advisory-title .send {
    margin-right: 26px;
    border: none;
    text-align: right;
    float: right;
  }

  .advisory-box .notice {
    width: 734px;
    line-height: 24px;
    padding: 5px 0 5px 20px;
    margin: 0 0 20px 22px;
    background-color: #F3F3F3;
    color: #777777;
  }

  .rate-page-box {
    margin-left: 130px;
  }
</style>
