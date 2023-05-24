
<!-- 购物车和商品结算页 -->

<template>
  <div id="cart">
    <coll-site></coll-site>
    <top-bar></top-bar>
    <cart-head></cart-head>
    <div class="inner-c">
      <div class="hr-12"></div>
      <receive-info></receive-info>
      <div class="hr-20"></div>
      <pay-method></pay-method>
      <div class="hr-20"></div>
      <invoice-info></invoice-info>
      <delivery-info></delivery-info>
      <div class="hr-20"></div>
      <order-sett></order-sett>
      <div class="hr-40"></div>
    </div>
    <site-foot></site-foot>
    <go-top></go-top>
  </div>
</template>

<script>
import CollSite from '_c/CollSite';
import TopBar from '_c/TopBar';
import CartHead from '_c/CartHead';
import ReceiveInfo from '_c/ReceiveInfo';
import PayMethod from '_c/PayMethod';
import InvoiceInfo from '_c/InvoiceInfo';
import DeliveryInfo from '_c/DeliveryInfo';
import OrderSett from '_c/OrderSett';
import GoTop from '_c/GoTop';
import SiteFoot from '_c/SiteFoot';
import { mapState } from 'vuex';

export default {

  // 组件名称
  name: 'cart',

  // 引入的外部组件
  components: {
    CollSite,
    TopBar,
    CartHead,
    ReceiveInfo,
    PayMethod,
    InvoiceInfo,
    DeliveryInfo,
    OrderSett,
    GoTop,
    SiteFoot
  },

  computed: {
    ...mapState({
      isLogin: state => state.user.isLogin
    })
  },

  // 初始化
  mounted() {
    // 如果用户没有登录
    if (!this.isLogin) {
      // 进入登录页
      this.$router.push('/login');
      return;
    }

    this.$nextTick(() => {
      document.body.style.backgroundColor = '#fff';
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style lang="less" scoped>
</style>
