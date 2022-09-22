
<!-- 商品信息展示页 -->

<template>
  <div id="proinfo">
    <coll-site></coll-site>
    <top-bar></top-bar>
    <site-head></site-head>
    <nav-bar></nav-bar>
    <product-position></product-position>
    <section class="description-info inner-c clearfix">
      <div class="left-area">
        <product-image></product-image>
      </div>
      <div class="right-area">
        <show-proinfo></show-proinfo>
      </div>
    </section>
    <section class="product-info inner-c clearfix">
      <div class="left-area">
        <proinfo-product-list :productList="productList[0]" :isAddBold="true"></proinfo-product-list>
        <proinfo-product-list :productList="productList[1]"></proinfo-product-list>
      </div>
      <div class="right-area">
        <proinfo-nav-bar :selectIndex="selectIndex"></proinfo-nav-bar>
        <div class="table">
          <product-intro v-if="selectIndex == 1"></product-intro>
          <product-comment v-if="selectIndex == 2"></product-comment>
        </div>
      </div>
    </section>
    <div class="hr-40"></div>
    <site-foot></site-foot>
    <go-top></go-top>
  </div>
</template>

<script>
import CollSite from '../components/CollSite';
import TopBar from '../components/TopBar';
import SiteHead from '../components/SiteHead';
import NavBar from '../components/NavBar';
import ProductPosition from '../components/ProductPosition';
import ProductImage from '../components/ProductImage';
import ShowProinfo from '../components/showProinfo';
import ProinfoProductList from '../components/ProinfoProductList';
import ProinfoNavBar from '../components/ProinfoNavBar';
import ProductIntro from '../components/ProductIntro';
import ProductComment from '../components/ProductComment';
import SiteFoot from '../components/SiteFoot';
import GoTop from '../components/GoTop';

export default {

  // 组件名称
  name: 'proinfo',

  // 引入的外部组件
  components: {
    CollSite,
    TopBar,
    SiteHead,
    NavBar,
    ProductPosition,
    ProductImage,
    ShowProinfo,
    ProinfoProductList,
    ProinfoNavBar,
    ProductIntro,
    ProductComment,
    SiteFoot,
    GoTop
  },

  data() {
    return {

      // 商品列表
      productList: [
        {
          'title': '同价位',
          'content': [
            {
              'productImage': './static/images/product1.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3578.00'
            },
            {
              'productImage': './static/images/product2.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            },
            {
              'productImage': './static/images/product3.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            },
            {
              'productImage': './static/images/product4.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            }
          ]
        },
        {
          'title': '看了最终买',
          'content': [
            {
              'productImage': './static/images/product5.png',
              'productName': 'Apple 苹果 iPaad mini 配备 Retina 显示屏 ME280CH/A',
              'productPrice': '3578.00'
            },
            {
              'productImage': './static/images/product6.png',
              'productName': '某某品牌 配备 Retina 显示屏 IPS',
              'productPrice': '3588.00'
            },
            {
              'productImage': './static/images/product7.png',
              'productName': '某某品牌 配备 Retina 显示屏 IPS',
              'productPrice': '3588.00'
            }
          ]
        }
      ],

      // 导航的索引
      selectIndex: 1
    };
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      document.title = '商品信息展示页';
      document.body.style.backgroundColor = '#f0f0f0';
      window.scrollTo(0, 0);

      this.bus.$on('select-nav', (index) => {
        this.selectIndex = index;
      });
    });
  }
};
</script>

<style lang="less" scoped>
  .description-info {
    background-color: #fff;
    border: solid 1px #ccc;
  }

  .description-info .left-area {
    float: left;
  }

  .description-info .right-area {
    width: 690px;
    border-left: solid 1px #ccc;
    float: left;
  }

  .product-info {
    margin-top: 21px;
  }

  .product-info .left-area {
    width: 188px;
    margin-right: 24px;
    float: left;
  }

  .product-info .right-area {
    width: 785px;
    border: solid 1px #ccc;
    background-color: #fff;
    overflow: hidden;
    float: left;
  }

  .right-area .table {
    width: 786px;
  }
</style>
