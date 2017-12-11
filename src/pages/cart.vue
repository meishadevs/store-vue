
<!-- 购物车页 -->

<template>
  <div id="cart">
    <collSite></collSite>
    <topBar></topBar>
    <cartHeader></cartHeader>
    <div class="hr-12"></div>
    <receiveInfo></receiveInfo>
    <goTop></goTop>
    <foot></foot>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import cartHeader from '../components/cartHeader';
  import receiveInfo from '../components/receiveInfo';
  import goTop from '../components/goTop';
  import foot from '../components/foot';

  export default {

    name: 'cart',

    components: {
      collSite,
      topBar,
      cartHeader,
      receiveInfo,
      goTop,
      foot
    }
  };
</script>

<style scoped>

</style>
