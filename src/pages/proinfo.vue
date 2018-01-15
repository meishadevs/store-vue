
<!-- 商品信息展示页 -->

<template>
  <div id="proinfo">
    <collSite></collSite>
    <topBar></topBar>
    <siteHead></siteHead>
    <navBar></navBar>
    <productPosition></productPosition>
    <section class="description-info inner-c clearfix">
      <div class="left-area">
        <productImage></productImage>
      </div>
      <div class="right-area">
        <showProinfo></showProinfo>
      </div>
    </section>
    <section class="product-info inner-c clearfix">
      <div class="left-area">
        <proinfoProductList v-bind:productList="productList[0]" v-bind:isAddBold="true"></proinfoProductList>
        <proinfoProductList v-bind:productList="productList[1]"></proinfoProductList>
      </div>
      <div class="right-area">
        <proinfoNavBar v-bind:selectIndex="selectIndex"></proinfoNavBar>
        <div class="table">
          <productIntro v-if="selectIndex == 1"></productIntro>
          <productComment v-if="selectIndex == 2"></productComment>
        </div>
      </div>
    </section>
    <div class="hr-40"></div>
    <siteFoot></siteFoot>
    <goTop></goTop>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import siteHead from '../components/siteHead';
  import navBar from '../components/navBar';
  import productPosition from '../components/productPosition';
  import productImage from '../components/productImage';
  import showProinfo from '../components/showProinfo';
  import proinfoProductList from '../components/proinfoProductList';
  import proinfoNavBar from '../components/proinfoNavBar';
  import productIntro from '../components/productIntro';
  import productComment from '../components/productComment';
  import siteFoot from '../components/siteFoot';
  import goTop from '../components/goTop';

  export default {

    //设置组件名称
    name: 'proinfo',

    components: {
      collSite,
      topBar,
      siteHead,
      navBar,
      productPosition,
      productImage,
      showProinfo,
      proinfoProductList,
      proinfoNavBar,
      productIntro,
      productComment,
      siteFoot,
      goTop
    },

    data() {
      return {

        //商品列表
        productList: [
          {
            "title": '同价位',
            "content": [
              {
                "productImage": './static/images/product1.png',
                "productName": 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
                "productPrice": '3578.00'
              },
              {
                "productImage": './static/images/product2.png',
                "productName": 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
                "productPrice": '3588.00'
              },
              {
                "productImage": './static/images/product3.png',
                "productName": 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
                "productPrice": '3588.00'
              },
              {
                "productImage": './static/images/product4.png',
                "productName": 'Samsung 三星 GALAXY Tab 3 8.0 WLAN版本 T310平板电话',
                "productPrice": '3588.00'
              }
            ]
          },
          {
            "title": '看了最终买',
            "content": [
              {
                "productImage": './static/images/product5.png',
                "productName": 'Apple 苹果 iPaad mini 配备 Retina 显示屏 ME280CH/A',
                "productPrice": '3578.00'
              },
              {
                "productImage": './static/images/product6.png',
                "productName": '某某品牌 配备 Retina 显示屏 IPS',
                "productPrice": '3588.00'
              },
              {
                "productImage": './static/images/product7.png',
                "productName": '某某品牌 配备 Retina 显示屏 IPS',
                "productPrice": '3588.00'
              }
            ]
          }
        ],

        //导航的索引
        selectIndex: 1
      };
    },

    //初始化
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

<style scoped>
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
