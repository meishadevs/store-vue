<!-- 头部通栏组件 -->

<template>
  <div class="headerBar">
    <div class="inner-c clearfix">
      <div class="logo">
        <a href="index.html">
          慕课网
        </a>
      </div>
      <div class="search-box clearfix">
        <input
          class="search-text"
          type="text"
          placeholder="女神的衣柜必备"
          v-model="keyWord"
          v-on:keyup="getSearchResultList()">
        <input class="search-btn" type="button" value="搜索">
        <ul class="result-list" v-show="isShowResultList"></ul>
      </div>
      <div class="shopCar clearfix">
        <a href="javascript:;">
          <span class="shopText">购物车</span>
          <span class="shopNum">{{ productNum }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {

    //组件名称
    name: 'headerBar',

    data() {
      return {
        //标记是否显示搜索结果列表
        isShowResultList: false,

        //关键字
        keyWord: ''
      };
    },

    //计算属性
    computed: mapState([

      //商品的数量
      //映射 this.productNum 为 store.state.productNum
      'productNum'
    ]),

    methods: {

      //获取搜索结果列表
      getSearchResultList: function () {

        //发送get请求，搜索商品
        this.jsonp(this.taobaoUrl + this.keyWord, null, function (err, data) {
          if (err) {
            console.error(err.message);
          } else {
            console.log(data.result);
          }
        });
      }
    }
  };
</script>

<style scoped>
  .headerBar {
    width: 100%;
    height: 87px;
    background-color: #1d7ad9;
    display: table;
  }

  .headerBar .logo {
    padding-top: 14px;
  }

  .headerBar .logo a {
    width: 112px;
    height: 59px;
    background: url(../assets/images/logo.png) no-repeat;
    text-indent: -1000px;
    float: left;
  }

  .search-box {
    height: 35px;
    line-height: 35px;
    margin: 23px 0 0 185px;
    position: relative;
    float: left;
  }

  .search-box .search-text {
    width: 350px;
    height: 100%;
    padding: 0 5px 0 5px;
    font-size: 14px;
    font-weight: bold;
    background-color: #fff;
    float: left;
  }

  .search-box .search-btn {
    width: 69px;
    height: 35px;
    font: 14px/35px 微软雅黑, "microsoft yahei";
    color: rgb(255, 255, 255);
    background-color: rgb(255, 140, 0);
    cursor: pointer;
    position: relative;
    float: left;
  }

  .result-list {
    width: 358px;
    height: 260px;
    background-color: #fff;
    border: solid 1px #BEBEBE;
    z-index: 5;
    position: absolute;
    left: 0;
    top: 35px;
  }

  .shopCar {
    width: 145px;
    height: 35px;
    margin: 23px 0px 0px 31px;
    background-color: rgb(255, 136, 0);
    font: 14px/35px 微软雅黑, "microsoft yahei";
    float: left;
  }

  .shopCar a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: inline-block;
  }

  .shopCar .shopText {
    width: 47px;
    height: 100%;
    padding-left: 40px;
    border-right: solid 1px #e27a00;
    background: url(../assets/images/icon/shopcar.jpg) 10px center no-repeat;
    float: left;
  }

  .shopCar .shopNum {
    width: 27px;
    height: 100%;
    padding-right: 29px;
    text-align: right;
    border-left: solid 1px #ff9c01;
    background: url(../assets/images/icon/arrow.jpg) 33px center no-repeat;
    float: left;
  }
</style>
