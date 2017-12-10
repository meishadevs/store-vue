
<!-- 商品选择页 -->

<template>
  <div id="select">
    <collSite></collSite>
    <topBar></topBar>
    <myHead></myHead>
    <navBar></navBar>
    <userPosition></userPosition>
    <section class="wrapper clearfix">
      <div class="left-area">
        <productCate></productCate>
        <selectProductList></selectProductList>
      </div>
      <div class="right-area">
        <productFilter></productFilter>
        <div class="hr-15"></div>
        <div class="add-info clearfix">
          <p class="left-title">全部商品</p>
          <div class="right-content">
            <div class="show-data">
              共&nbsp;<span class="product-num">{{ totalProduct }}</span>&nbsp;件商品
            </div>
            <div class="show-page">
              <span class="now-page">{{ curPage }}</span>
              <span class="slash">/</span>
              <span class="total-page">{{ totalPage }}</span>
            </div>
          </div>
        </div>
        <selectShowProduct v-bind:curPage="curPage" v-bind:numProduct="numProduct"></selectShowProduct>
        <ratePage v-bind:totalPage="totalPage" v-bind:curPage="curPage"></ratePage>
      </div>
    </section>
    <foot></foot>
    <goTop></goTop>
  </div>
</template>

<script>
  import Vue from 'vue';
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import myHead from '../components/myHead';
  import navBar from '../components/navBar';
  import userPosition from '../components/userPosition';
  import productCate from '../components/productCate';
  import selectProductList from '../components/selectProductList';
  import productFilter from '../components/productFilter';
  import selectShowProduct from '../components/selectShowProduct';
  import ratePage from '../components/ratePage';
  import foot from '../components/foot';
  import goTop from '../components/goTop';

  export default {

    name: 'select',
    components: {
      collSite,
      topBar,
      myHead,
      navBar,
      userPosition,
      productCate,
      selectProductList,
      productFilter,
      selectShowProduct,
      ratePage,
      foot,
      goTop
    },

    data() {
      return {

        //商品总数
        totalProduct: 0,

        //每页展示的商品数量
        numProduct: 6,

        //一共有多少页商品
        totalPage: 0,

        //当前展示的第几页商品
        curPage: 1
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '商品选择页';
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.scrollTop = '0px';

        //获得商品的数量
        this.getProductNum();

        //监听翻页组件中传递过来的事件
        this.bus.$on('change-page', (page) => {
          this.curPage = page;
        });
      });
    },

    methods: {

      //获得商品的数量
      getProductNum: function () {

        //发送get请求，获得商品数量
        this.jsonp(this.productNumUrl, null, (err, data) => {
          if (err) {
            console.error("error:", err.message);
          } else {

            //获得商品的总数
            this.totalProduct = data;

            //计算一共有多少页
            this.totalPage = this.totalProduct / this.numProduct;
          }
        });
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    width: 959px;
    margin: 0 auto;
  }

  .wrapper .left-area {
    width: 188px;
    margin-right: 15px;
    background-color: #fff;
    border: solid 1px #d7d7d7;
    float: left;
  }

  .wrapper .right-area {
    float: left;
  }

  .add-info {
    width: 742px;
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    background-color: #fff;
    border: solid 1px #d9d9d9;
  }

  .add-info .left-title {
    float: left;
  }

  .add-info .right-content {
    float: right;
  }

  .right-content .show-data {
    margin-right: 10px;
    font-weight: normal;
    color: #999;
    float: left;
  }

  .show-data .product-num {
    color: #e4393c;
  }

  .right-content .show-page {
    margin-right: 50px;
    font-weight: normal;
    float: left;
  }

  .show-page .now-page {
    color: #e4393c;
  }

  .show-page .slash {
    color: #999;
  }
</style>
