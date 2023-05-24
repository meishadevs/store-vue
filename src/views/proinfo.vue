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
import CollSite from '_c/CollSite';
import TopBar from '_c/TopBar';
import SiteHead from '_c/SiteHead';
import NavBar from '_c/NavBar';
import ProductPosition from '_c/ProductPosition';
import ProductImage from '_c/ProductImage';
import ShowProinfo from '_c/showProinfo';
import ProinfoProductList from '_c/ProinfoProductList';
import ProinfoNavBar from '_c/ProinfoNavBar';
import ProductIntro from '_c/ProductIntro';
import ProductComment from '_c/ProductComment';
import SiteFoot from '_c/SiteFoot';
import GoTop from '_c/GoTop';

export default {
  name: 'proinfo',

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
              'productImage': 'product1.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3578.00'
            },
            {
              'productImage': 'product2.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            },
            {
              'productImage': 'product3.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            },
            {
              'productImage': 'product4.png',
              'productName': 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
              'productPrice': '3588.00'
            }
          ]
        },
        {
          'title': '看了最终买',
          'content': [
            {
              'productImage': 'product5.png',
              'productName': 'Apple 苹果 iPaad mini 配备 Retina 显示屏 ME280CH/A',
              'productPrice': '3578.00'
            },
            {
              'productImage': 'product6.png',
              'productName': '某某品牌 配备 Retina 显示屏 IPS',
              'productPrice': '3588.00'
            },
            {
              'productImage': 'product7.png',
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
