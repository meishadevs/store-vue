
<!-- 购物车页 -->

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
    <goTop></goTop>
    <foot></foot>
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
  import goTop from '../components/goTop';
  import foot from '../components/foot';

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
      goTop,
      foot
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {
        document.title = '购物车和结算页';
        document.body.style.backgroundColor = '#fff';
      });
    }
  };
</script>

<style scoped>

</style>
