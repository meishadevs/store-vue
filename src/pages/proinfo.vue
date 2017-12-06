
<!-- 商品信息展示页 -->

<template>
  <div id="proinfo">
    <collSite></collSite>
    <topBar></topBar>
    <myHead></myHead>
    <navBar></navBar>
    <productPosition></productPosition>
    <foot></foot>
    <goTop></goTop>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import myHead from '../components/myHead';
  import navBar from '../components/navBar';
  import productPosition from '../components/productPosition';
  import foot from '../components/foot';
  import goTop from '../components/goTop';

  export default {

    //设置组件名称
    name: 'proinfo',

    components: {
      collSite,
      topBar,
      myHead,
      navBar,
      productPosition,
      foot,
      goTop
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {
        document.title = '商品信息展示页';
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.scrollTop = '0px';
      });
    }
  };
</script>

<style scoped>

</style>
