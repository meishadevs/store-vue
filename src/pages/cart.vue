
<!-- 购物车和商品结算页 -->

<template>
  <div id="cart">
    <collSite></collSite>
    <topBar></topBar>
    <cartHeader></cartHeader>
    <div class="hr-12"></div>
    <receiveInfo></receiveInfo>
    <div class="hr-20"></div>
    <payMethod></payMethod>
    <div class="hr-20"></div>
    <invoiceInfo></invoiceInfo>
    <deliveryInfo></deliveryInfo>
    <div class="hr-20"></div>
    <orderSett></orderSett>
    <goTop></goTop>
    <div class="hr-40"></div>
    <siteFoot></siteFoot>
  </div>
</template>

<script>
  import collSite from '../components/collSite';
  import topBar from '../components/topBar';
  import cartHeader from '../components/cartHeader';
  import receiveInfo from '../components/receiveInfo';
  import payMethod from '../components/payMethod';
  import invoiceInfo from '../components/invoiceInfo';
  import deliveryInfo from '../components/deliveryInfo';
  import orderSett from '../components/orderSett';
  import goTop from '../components/goTop';
  import siteFoot from '../components/siteFoot';

  export default {

    name: 'cart',

    components: {
      collSite,
      topBar,
      cartHeader,
      receiveInfo,
      payMethod,
      invoiceInfo,
      deliveryInfo,
      orderSett,
      goTop,
      siteFoot
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {
        document.title = '购物车和结算页';
        document.body.style.backgroundColor = '#fff';
        window.scrollTo(0, 0);
      });
    }
  };
</script>

<style scoped>

</style>
