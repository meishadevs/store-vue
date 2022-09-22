
<!-- 商品咨询列表组件 -->

<template>
  <ul class="advisory-list">
    <li class="clearfix" v-for="(advisory, index) in advisoryListData" :key="index">
      <div class="member-info">
        <div class="member-image">
          <img :src="serverUrl + 'images/advisoryimages/' + advisory.memberimage" alt="">
        </div>
        <p class="member-name">{{ advisory.membernum }}</p>
        <p class="member-grade">{{ advisory.membergrade }}</p></div>
      <div class="shop-advisory">
        <div class="top clearfix">
          <div class="advisory-name">[商品咨询]</div>
          <div class="advisory-time">{{ advisory.time }}</div>
        </div>
        <div class="advisory-content">
          <div class="question">{{ advisory.question }}</div>
          <div class="answer">
            <span>电商网回复：</span>{{ advisory.answer }}
            <div class="triangle"></div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {

  // 组件名称
  name: 'AdvisoryList',

  // 获取从父组件中传递过来的数据
  props: ['curPage', 'numAdvisory'],

  data() {
    return {

      // 商品咨询列表
      advisoryListData: [],

      // 每页第一条商品咨询信息的下标
      advisoryFirstIndex: 0,

      // 当前展示的是第indexPage页商品咨询信息
      indexPage: 0
    };
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      // 获得当前展示的是第几页商品信息
      this.indexPage = this.curPage;

      // 获得商品咨询信息
      this.getAdvisoryInfo();

      // 监听翻页组件中传递过来的事件
      this.bus.$on('change-page', (page) => {
        window.scrollTo(0, 1050);
        this.indexPage = page;
      });
    });
  },

  // 监听器
  watch: {

    // 如果indexPage发生改变，这个函数就会调用
    indexPage() {
      // 获得商品咨询信息
      this.getAdvisoryInfo();
    }
  },

  methods: {

    // 获得商品咨询信息
    getAdvisoryInfo() {
      // 计算每页展示的第一条商品咨询信息的下标
      this.advisoryFirstIndex = (this.indexPage - 1) * this.numAdvisory;

      // 发送get请求，获得商品咨询信息
      this.jsonp(this.advisoryInfoUrl + this.numAdvisory + '&startIndex=' + this.advisoryFirstIndex, null, (err, data) => {
        if (err) {
          console.error('error:', err.message);
        } else {
          // 获得商品咨询列表数据
          this.advisoryListData = data;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>

  /* 咨询列表 */
  .advisory-list {
    margin-left: 67px;
  }

  .advisory-list li {
    margin-bottom: 38px;
  }

  /* 会员信息 */
  .member-info {
    text-align: center;
    float: left;
  }

  /* 会员名称 */
  .member-name, .member-grade {
    height: 18px;
    color: #777777;
  }

  /* 商品咨询 */
  .shop-advisory {
    margin-left: 34px;
    float: left;
  }

  .shop-advisory .top {
    width: 540px;
    height: 19px;
    line-height: 19px;
    margin-bottom: 15px;
  }

  .member-image img {
    width: 35px;
    height: 35px;
    border-radius: 15px;
    display: inline-block;
  }

  .advisory-name {
    font-size: 14px;
    color: #000;
    font-weight: bold;
    float: left;
  }

  /* 咨询的时间 */
  .advisory-time {
    font-family: "宋体", "SimSun";
    color: #ABABAB;
    float: right;
  }

  /* 提问 */
  .advisory-content .question {
    margin-bottom: 13px;
    font-family: "宋体", "SimSun";
    color: #777777;
  }

  /* 回答 */
  .answer {
    width: 576px;
    padding-left: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    line-height: 20px;
    font-family: "宋体", "SimSun";
    font-size: 12px;
    background-color: #F1F1F1;
    color: #777777;
    position: relative;
  }

  .answer span {
    color: #000000;
    font-weight: bold;
  }

  /* 小三角 */
  .answer .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent #F3F3F3 transparent;
    border-width: 0 5px 5px 5px;
    position: absolute;
    top: -5px;
    left: 30px;
  }
</style>
