
<!-- 网站的头部组件 -->

<template>
  <header class="site-head">
    <div class="inner-c clearfix">
      <div class="logo">
        <router-link to="/">电商网</router-link>
      </div>
      <div class="search-box clearfix">
        <input
          class="search-text"
          spellcheck="false"
          type="text"
          placeholder="女神的衣柜必备"
          v-model="keyWord"
          v-on:keyup="getSearchResult()">
        <input class="search-btn" type="button" value="搜索" @click="searchData()">
        <ul class="result-list"
            v-show="arrayResult.length > 0"
            v-bind:style="{height: arrayResult.length * 26 + 'px'}"
            @mouseleave="arrayResult = []">
          <li class="clearfix"
              v-for="(result, index) in arrayResult"
              v-bind:value="index"
              @click="setKeyWord($event)">
            <!-- 如果搜索结果中不存在用户输入的关键字 s -->
            <p class="product-name" v-if="result[0].indexOf(keyWord) == -1">
              {{ result[0] }}
            </p>
            <!-- 如果搜索结果中不存在用户输入的关键字 e -->
            <!-- 如果关键字位于搜索结果的起始位置 s -->
            <p class="product-name" v-else-if="result[0].indexOf(keyWord) == 0">
              <em>{{ keyWord }}</em>{{ result[0].substring(keyWord.length) }}
            </p>
            <!-- 如果关键字位于搜索结果的起始位置 e -->
            <!-- 如果关键字位于搜索结果的结束位置 s -->
            <p class="product-name" v-else-if="result[0].indexOf(keyWord) == result[0].length - keyWord.length">
              {{ result[0].substring(0, result[0].length - keyWord.length) }}<em>{{ keyWord }}</em>
            </p>
            <!-- 如果关键字位于搜索结果的结束位置 e -->
            <!-- 关键字位于搜索结果的中间 s -->
            <p class="product-name" v-else>
              {{ result[0].split(keyWord)[0] }}<em>{{ keyWord }}</em>{{ result[0].split(keyWord)[1] }}
            </p>
            <!-- 关键字位于搜索结果的中间 e -->
            <p class="result-num">约{{ result[1] }}个商品</p>
          </li>
        </ul>
      </div>
      <div class="button-cart clearfix">
        <!-- 如果用户点击购物车按钮时，用户登录了，直接跳转到购物车页 s -->
        <router-link to="/cart" v-if="isLogin">
          <span class="cart-text">购物车</span>
          <span class="product-num">{{ proNum }}</span>
        </router-link>
        <!-- 如果用户点击购物车按钮时，用户登录了，直接跳转到购物车页 e -->

        <!-- 如果用户点击购物车按钮时，用户没有登录，先跳转到登录页登录 s -->
        <router-link to="/login/1" v-else>
          <span class="cart-text">购物车</span>
          <span class="product-num">{{ proNum }}</span>
        </router-link>
        <!-- 如果用户点击购物车按钮时，用户没有登录， 先跳转到登录页登录 e -->
      </div>
    </div>
  </header>
</template>

<script>
  import {mapState} from 'vuex';

  export default {

    //组件名称
    name: 'SiteHead',

    data() {
      return {

        //关键字
        keyWord: '',

        //保存搜索结果
        arrayResult: []
      };
    },

    computed: {

      ...mapState([
        'productNum',
        'isLogin'
      ]),

      proNum() {

        //如果用户登录了
        if (this.isLogin) {
          return this.productNum;

          //如果用户没登录
        } else {
          return 0;
        }
      }
    },

    methods: {

      //获取搜索结果
      getSearchResult() {

        //发送get请求，搜索商品
        this.jsonp(this.taobaoUrl + this.keyWord, null, (err, data) => {
          if (err) {
            console.error("error:", err.message);
          } else {
            this.arrayResult = data.result;
            console.log(this.arrayResult);
          }
        });
      },

      //设置关键字
      setKeyWord(event) {

        //获得当前选中的标签的value属性值
        var currentIndex = event.currentTarget.getAttribute('value');

        //重置关键字的值
        this.keyWord = this.arrayResult[currentIndex][0];
        this.arrayResult = [];
      },

      //搜索数据
      searchData() {
        window.location = this.baiduUrl + "?wd=" + this.keyWord;
      }
    }
  };
</script>

<style scoped>
  .site-head {
    width: 100%;
    height: 87px;
    background-color: #1d7ad9;
  }

  .site-head .logo {
    padding-top: 14px;
  }

  .site-head .logo a {
    width: 112px;
    height: 59px;
    background: url(../../static/images/logo.png) no-repeat;
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

  .result-list li {
    height: 26px;
    padding: 0px 6px 0px 5px;
    font: bold 14px/26px 微软雅黑, "Microsoft yahei";
    cursor: pointer;
  }

  .result-list li:hover {
    background-color: #1d7ad9;
    color: #fff;
  }

  .result-list .product-name {
    float: left;
  }

  .result-list em {
    font-weight: normal;
  }

  .result-list .result-num {
    font-size: 12px;
    font-weight: normal;
    color: #999;
    float: right;
  }

  .button-cart {
    width: 145px;
    height: 35px;
    margin: 23px 0px 0px 31px;
    background-color: rgb(255, 136, 0);
    font: 14px/35px 微软雅黑, "microsoft yahei";
    float: left;
  }

  .button-cart a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: inline-block;
  }

  .button-cart .cart-text {
    width: 47px;
    height: 100%;
    padding-left: 40px;
    border-right: solid 1px #e27a00;
    background: url(../../static/images/icon/shopcart.jpg) 10px center no-repeat;
    float: left;
  }

  .button-cart .product-num {
    width: 27px;
    height: 100%;
    padding-right: 29px;
    text-align: right;
    border-left: solid 1px #ff9c01;
    background: url(../../static/images/icon/arrow.jpg) 33px center no-repeat;
    float: left;
  }
</style>
