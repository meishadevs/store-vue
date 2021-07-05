
<!-- 商品选择页 -->

<template>
  <div id="choose">
    <coll-site></coll-site>
    <top-bar></top-bar>
    <site-head></site-head>
    <nav-bar></nav-bar>
    <user-position></user-position>
    <section class="wrapper clearfix">
      <div class="left-area">
        <product-cate></product-cate>
        <select-product-list></select-product-list>
      </div>
      <div class="right-area">
        <product-filter></product-filter>
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
        <select-show-product v-bind:curPage="curPage" v-bind:numProduct="numProduct"></select-show-product>
        <change-page v-bind:totalPage="totalPage" v-bind:curPage="curPage" v-if="totalPage > 0"></change-page>
      </div>
    </section>
    <div class="hr-40"></div>
    <site-foot></site-foot>
    <go-top></go-top>
  </div>
</template>

<script>
import Vue from 'vue'
import CollSite from '../components/CollSite'
import TopBar from '../components/TopBar'
import SiteHead from '../components/SiteHead'
import NavBar from '../components/NavBar'
import UserPosition from '../components/UserPosition'
import ProductCate from '../components/ProductCate'
import SelectProductList from '../components/SelectProductList'
import ProductFilter from '../components/ProductFilter'
import SelectShowProduct from '../components/SelectShowProduct'
import ChangePage from '../components/ChangePage'
import SiteFoot from '../components/SiteFoot'
import GoTop from '../components/GoTop'

export default {

  // 组件名称
  name: 'choose',

  // 引入的外部组件
  components: {
    CollSite,
    TopBar,
    SiteHead,
    NavBar,
    UserPosition,
    ProductCate,
    SelectProductList,
    ProductFilter,
    SelectShowProduct,
    ChangePage,
    SiteFoot,
    GoTop
  },

  data() {
    return {

      // 商品总数
      totalProduct: 0,

      // 每页展示的商品数量
      numProduct: 6,

      // 一共有多少页商品
      totalPage: 0,

      // 当前展示的第几页商品
      curPage: 1
    }
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      document.title = '商品选择页'
      document.body.style.backgroundColor = '#f0f0f0'
      window.scrollTo(0, 0)

      // 获得商品的数量
      this.getProductNum()

      // 监听翻页组件中传递过来的事件
      this.bus.$on('change-page', (page) => {
        this.curPage = page
      })
    })
  },

  methods: {

    // 获得商品的数量
    getProductNum() {
      // 发送get请求，获得商品数量
      this.jsonp(this.productNumUrl, null, (err, data) => {
        if (err) {
          console.error('error:', err.message)
        } else {
          // 获得商品的总数
          this.totalProduct = data

          // 计算一共有多少页
          this.totalPage = this.totalProduct / this.numProduct
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
