
<!-- 购物车页上的头部组件 -->

<template>
  <section class="cart-head">

    <!-- 版心 s -->
    <div class="inner-c clearfix">

      <!-- 网站logo s-->
      <div class="logo">
        <router-link to="/">电商网</router-link>
      </div>
      <!-- 网站logo e -->

      <!-- 购物进度 s -->
      <div class="shop-progress">
        <div class="progress-icon clearfix">
          <span class="circle">1</span>
          <span class="line"></span>
          <span class="circle">2</span>
          <span class="line"></span>
          <span class="circle current">3</span>
        </div>
        <div class="progress-text clearfix">
          <span class="text">我的购物车</span>
          <span class="text">填写核对订单 </span>
          <span class="text">订单提交成功</span>
        </div>
      </div>
      <!-- 购物进度 e -->

    </div>
    <!-- 版心 e -->

  </section>
</template>

<script>
export default {

  // 组件名称
  name: 'CartHead'
};
</script>

<style lang="less" scoped>
  .cart-head {
    width: 100%;
    height: 87px;
    background-color: #1d7ad9;
  }

  .cart-head .logo {
    padding-top: 14px;
  }

  .cart-head .logo a {
    width: 112px;
    height: 59px;
    background: url("~@/assets/images/logo.png") no-repeat;
    text-indent: -1000px;
    float: left;
  }

  .shop-progress {
    margin-top: 25px;
    margin-right: 32px;
    float: right;
  }

  .shop-progress .progress-icon {
    margin-left: 22px;
  }

  .shop-progress .circle {
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    background-color: #FFF001;
    color: #1D7AD9;
    border-radius: 9px;
    float: left;
  }

  .shop-progress .current {
    background-color: #8DBDEB;
  }

  .shop-progress .line {
    width: 150px;
    height: 3px;
    margin-top: 7px;
    background-color: #FEF001;
    float: left;
  }

  .progress-text .text {
    margin-top: 8px;
    margin-right: 100px;
    font-size: 14px;
    color: #FEF001;
    font-weight: bold;
    float: left;
  }

  .progress-text span:nth-child(3) {
    margin-right: 0;
    margin-left: -20px;
    color: #fff;
  }
</style>
