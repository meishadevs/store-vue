<!-- 网站首页 -->

<template>
  <div id="index">
    <collSite></collSite>
    <topBar></topBar>
    <headerBar></headerBar>
    <navBar></navBar>
    <section class="shopclass-banner inner-c clearfix">
      <div class="shopclass-box">
        <shopClassBar></shopClassBar>
      </div>
      <div class="banner-box">
        <banner></banner>
      </div>
    </section>
    <indexShowProduct v-bind:productInfo="indexProductList[0]"></indexShowProduct>
    <indexShowProduct v-bind:productInfo="indexProductList[1]"></indexShowProduct>
    <footerBar></footerBar>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import headerBar from '../components/headerBar';
  import navBar from '../components/navBar';
  import shopClassBar from '../components/shopClassBar';
  import banner from '../components/banner';
  import indexShowProduct from '../components/indexShowProduct';
  import footerBar from '../components/footerBar';
  import {mapState, mapActions} from 'vuex';

  export default {

    //设置当前组件名称为index
    name: 'index',

    //设置index组件中引入的组件
    components: {
      collSite,
      topBar,
      headerBar,
      navBar,
      shopClassBar,
      banner,
      indexShowProduct,
      footerBar
    },

    //计算属性
    computed: mapState([

      //网站首页的商品列表
      //映射 this.indexProductList 为 store.state.indexProductList
      'indexProductList',

      //当前选中的导航项的索引
      //映射 this.currentNavIndex 为 srore.state.currentNavIndex
      'currentNavIndex'
    ]),

    methods: {

      //使用对象展开运算符将此对象混入到外部对象中
      ...mapActions([

        //改变当前选中的导航项的索引
        'changeNavIndex'
      ])
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '电商网站首页';
        this.changeNavIndex(1);
      });
    }
  };
</script>

<style scoped>
  .shopclass-banner .shopclass-box {
    float: left;
  }

  .shopclass-banner .banner-box {
    float: left;
  }
</style>
