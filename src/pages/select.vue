<!-- 商品筛选页 -->

<template>
  <div class="select">
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
        <div class="add-info">
          全部商品
          <div class="show-page">
            <span class="now-page">{{ curPage }}</span>
            <span class="slash">/</span>
            <span class="total-page">{{ totalPage }}</span>
          </div>
          <div class="show-data">
            共&nbsp;<span class="product-num">{{ totalProduct }}</span>&nbsp;件商品
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import myHead from '../components/myHead';
  import navBar from '../components/navBar';
  import userPosition from '../components/userPosition';
  import productCate from '../components/productCate';
  import selectProductList from '../components/selectProductList';
  import productFilter from '../components/productFilter';

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
      productFilter
    },

    data() {
      return {

        //商品总数
        totalProduct: 54,

        //一共有多少页商品
        totalPage: 9,

        //当前展示的第几页商品
        curPage: 1
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '商品选择页';
        document.body.style.backgroundColor = '#f0f0f0';
      });
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

  .add-info .show-data {
    margin-right: 10px;
    color: #999;
    font-weight: normal;
    float: right;
  }

  .show-data .product-num {
    color: #e4393c;
  }

  .add-info .show-page {
    margin-right: 50px;
    font-weight: normal;
    float: right;
  }

  .show-page .now-page {
    color: #e4393c;
  }

  .show-page .slash {
    color: #999;
  }
</style>
