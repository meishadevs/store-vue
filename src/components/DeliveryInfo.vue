
<!-- 送货信息组件 -->

<template>
  <section class="delivery-info">
    <div class="title clearfix">
      <div class="name">送货清单</div>
      <div class="return">
        <router-link to="/proinfo">返回商品详情页修改</router-link>
      </div>
    </div>
    <transition name="fade">
      <div class="show-result" v-if="checkStatus == 1">{{ checkContent }}</div>
      <div class="show-result" v-if="checkStatus == 2">
        <span class="text">{{ checkContent }}</span>
        <button class="close-btn" @click="closeDialog()">
          <i class="fa fa-times"></i>
        </button>
      </div>
    </transition>
    <div class="delivery-content">
      <div class="first-row clearfix">
        <div class="pro-name">商品名称</div>
        <div class="unit-price">单价</div>
        <div class="cashback">返现</div>
        <div class="pro-num">数量</div>
        <div class="subtotal">小计</div>
      </div>
      <div class="second-row clearfix">
        <div class="pro-image">
          <img :src="productImage[0]" width="50" alt="">
        </div>
        <div class="row-right">
          <div class="row-top clearfix">
            <div class="pro-name">Apple 苹果 iPad mini 16G wifi版 平板电脑</div>
            <div class="unit-price">￥{{ productPrice | formateMoney }}</div>
            <div class="cashback">￥0.00</div>
            <div class="pro-num">{{ productNum }}</div>
            <div class="subtotal">{{ productPrice * productNum | formateMoney }}</div>
          </div>
          <div class="row-bottom clearfix">
            <div class="pro-name">[赠品]保鲜盒抽真空保鲜盒-海信冰洗赠品</div>
            <div class="pro-num">1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="delivery-bottom">
      <div class="notice">诺您对包裹有特殊要求，请在此留言</div>
      <h3>
        <span></span>
        抱歉，以下商品暂时不能购买，已帮您自动在本次结算中剔除并扣减对应金额，您可以先购买其他商品：）
      </h3>
      <!-- 商品信息 s -->
      <div class="product-info clearfix">
        <!-- 商品图片 s -->
        <div class="product-image">
          <img :src="productImage[1]" alt="">
        </div>
        <!-- 商品图片 e -->
        <!-- 商品描述 s -->
        <div class="product-des">
          <p class="product-name">清风 欧院系列 清香型 100抽3...</p>
          <p class="product-num">数量：1件</p>
          <p class="product-price">￥4.9<em>(无货)</em></p>
        </div>
        <!-- 商品描述 e -->
      </div>
      <!-- 商品信息 e -->
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default {

  // 组件名称
  name: 'DeliveryInfo',

  computed: mapState([
    'productNum',
    'productPrice',
    'checkStatus',
    'checkContent'
  ]),

  data() {
    return {
      formateMoney: null,

      // 商品图片
      productImage: ['./static/images/pro.jpg', './static/images/pro1.jpg']
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.formateMoney = Vue.filter('formateMoney')
    })
  },

  methods: {
    ...mapActions([
      'changeCheckStatus',
      'setCheckContent'
    ]),

    closeDialog() {
      this.changeCheckStatus(0)
      this.setCheckContent('')
    }
  }
}
</script>

<style lang="less" scoped>
  /* 送货清单 */
  .delivery-info {
    margin-top: 20px;
    border: solid 1px #ccc;
  }

  .delivery-info .title {
    height: 30px;
    line-height: 30px;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #ccc;
    background-color: #F4F4F4;
  }

  .delivery-info .title .name {
    margin-left: 10px;
    font-size: 14px;
    float: left;
  }

  .delivery-info .title .return {
    margin-right: 34px;
    float: right;
  }

  .delivery-info .return a {
    color: #3377FF;
  }

  .delivery-info .delivery-content {
    border-bottom: solid 1px #ccc;
  }

  .first-row {
    height: 34px;
    line-height: 34px;
    padding-left: 30px;
    border-bottom: solid 1px #ccc;
  }

  .first-row div {
    font-size: 14px;
    color: #666666;
    float: left;
  }

  /* 单价 */
  .first-row .unit-price {
    margin-left: 393px;
  }

  /* 返现 */
  .first-row .cashback {
    margin-left: 112px;
  }

  /* 数量 */
  .first-row .pro-num {
    margin-left: 112px;
  }

  /* 小计 */
  .first-row .subtotal {
    margin-left: 112px;
  }

  .second-row .pro-image {
    margin: 10px 38px 10px 32px;
    float: left;
  }

  .second-row .row-right {
    float: left;
  }

  .second-row .row-top {
    margin-top: 14px;
    margin-bottom: 18px;
  }

  .row-top .pro-name {
    font-size: 14px;
    color: #666666;
    float: left;
  }

  .row-top .unit-price {
    width: 128px;
    font-size: 14px;
    text-align: right;
    color: #666;
    float: left;
  }

  .row-top .cashback {
    width: 136px;
    font-size: 14px;
    text-align: right;
    color: #666;
    float: left;
  }

  .row-top .pro-num {
    width: 122px;
    font-size: 14px;
    text-align: right;
    color: #666;
    float: left;
  }

  .row-top .subtotal {
    width: 175px;
    font-size: 14px;
    font-weight: bold;
    text-align: right;
    color: #D70000;
    float: left;
  }

  .row-bottom .pro-name {
    float: left;
  }

  .row-bottom .pro-num {
    margin-left: 432px;
    font-size: 14px;
    color: #666;
    float: left;
  }

  .delivery-bottom {
    padding-top: 14px;
    padding-left: 30px;
  }

  .delivery-bottom .notice {
    margin-bottom: 36px;
    color: #3377FF;
  }

  .delivery-bottom h3 {
    height: 14px;
    line-height: 14px;
    margin-bottom: 22px;
    color: #EE0000;
  }

  .delivery-bottom span {
    display: inline-block;
    width: 12px;
    height: 14px;
    background: url("~@/assets/images/icon/notice.jpg") center center no-repeat;
    position: relative;
    bottom: -2px;
  }

  /* 商品信息 */
  .delivery-bottom .product-info {
    margin-bottom: 12px;
  }

  /* 商品图片 */
  .product-info .product-image {
    float: left;
  }

  /* 商品描述 */
  .product-info .product-des {
    margin-left: 10px;
    font-size: 14px;
    color: #666666;
    float: left;
  }

  /* 商品名称 */
  .product-info .product-name {
    margin-bottom: 10px;
  }

  /* 商品数量 */
  .product-info .product-num {
    margin-bottom: 10px;
  }

  /* 商品价格 */
  .product-info .product-price {
    font-size: 12px;
  }

  .product-info .product-price em {
    color: #D70000;
  }

  .show-result {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #ff6d28;
    position: relative;
  }

  .show-result .close-btn {
    width: 26px;
    height: 26px;
    line-height: 24px;
    background: #f86621;
    border-radius: 2px;
    vertical-align: text-bottom;
    font-size: 18px;
    color: #ffcbb3;
    border: 0;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 7px;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .show-result .close-btn i::before {
    content: "\f00d";
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

