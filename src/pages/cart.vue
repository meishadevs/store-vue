
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
  import CollSite from "../components/CollSite";
  import TopBar from "../components/TopBar";
  import CartHead from "../components/CartHead";
  import ReceiveInfo from "../components/ReceiveInfo";
  import PayMethod from "../components/PayMethod";
  import InvoiceInfo from "../components/InvoiceInfo";
  import DeliveryInfo from "../components/DeliveryInfo";
  import OrderSett from "../components/OrderSett";
  import GoTop from "../components/GoTop";
  import SiteFoot from "../components/SiteFoot";
  import {mapState} from "vuex";

  export default {

    //组件名称
    name: "cart",

    //引入的外部组件
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

    //计算属性
    computed: mapState([

      //用户是否登录
      //映射 this.isLogin 为 srore.state.isLogin
      "isLogin"
    ]),

    //初始化
    mounted() {

      //如果用户没有登录
      if (!this.isLogin) {

        //进入登录页
        this.$router.push("/login");
        return;
      }

      this.$nextTick(() => {
        document.title = "购物车和结算页";
        document.body.style.backgroundColor = "#fff";
        window.scrollTo(0, 0);
      });
    }
  };
</script>

<style scoped>
</style>
