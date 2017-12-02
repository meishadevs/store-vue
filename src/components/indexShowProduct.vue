
<!-- 网站首页的商品展示组件 -->

<template>
  <section class="product inner-c">
    <div class="product-title">
      <div class="product-icon fl">
        <img v-bind:src="productInfo.icon" alt="">
      </div>
      <h3 class="fl">{{ productInfo.title }}</h3>
      <div class="more fr">
        <a href="javascript:;">{{ productInfo.more }}&gt;&gt;</a>
      </div>
    </div>
    <div class="product-content clearfix">
      <div class="left-area fl">
        <a href="javascript:;">
          <img v-bind:src="productInfo.leftImage" alt="">
        </a>
      </div>
      <div class="right-area">
        <ul class="productList-top">
          <li class="product-item" v-for="product in productInfo.topProduct">
            <a href="javascript:;">
              <img v-bind:src="product.image" alt="手机">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="price">{{ product.price }}元</p>
            </a>
          </li>
        </ul>
        <ol class="productList-bottom">
          <li class="product-item" v-for="product in productInfo.bottomProduct">
            <a class="fl" href="javascript:;">
              <img v-bind:src="product.image" alt="三星手机">
              <div class="product-info fl">
                <p class="name">{{ product.name }}</p>
                <p class="price">￥<span>{{ product.price }}</span></p>
              </div>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
  export default {

    //组件名称
    name: 'indexShowProduct',

    //传递给组件中的数据
    props: ['productInfo'],

    //初始化
    mounted: function () {
      this.$nextTick(function () {
      });
    }
  };
</script>

<style scoped>
  .product .product-title {
    width: 100%;
    height: 75px;
  }

  .product .product-icon {
    margin: 15px 14px 0 0;
  }

  .product .product-title h3 {
    height: 75px;
    line-height: 75px;
    font: 24px/75px "微软雅黑", "microsoft yahei";
  }

  .product .more {
    margin: 48px 21px 0 0;
    font-family: "新宋体";
    font-size: 12px;
  }

  .product .more a {
    color: #000;
  }

  .product .more a:hover {
    text-decoration: underline;
  }

  .product-content .right-area {
    width: 810px;
    border-bottom: solid 3px #ff7201;
    float: left;
  }

  .productList-top .product-item {
    width: 199px;
    height: 280px;
    margin-left: -1px;
    border: solid 1px #ccc;

    /* 清除display:inline-block属性产生的空隙 */
    font-size: 0;

    float: left;
  }

  .productList-top .product-item a {
    width: 199px;
    height: 279px;
    text-align: center;
    display: inline-block;
  }

  .productList-top .product-item img {
    padding: 45px 0 24px 0;
  }

  .productList-top  .product-item .product-name {
    margin-bottom: 8px;
    font-size: 16px;
    text-align: center;
    color: #000;
  }

  .productList-top .product-item .price {
    font-size: 14px;
    text-align: center;
    color: #ff7300;
  }

  .productList-bottom .product-item {
    width: 199px;
    height: 114px;
    margin: -1px 0 0 -1px;
    border: solid 1px #ccc;
    float: left;
  }

  .productList-bottom .product-item a {
    width: 199px;
    height: 116px;
    display: inline-block;
  }

  .productList-bottom .product-item img {
    padding: 20px 22px 0 31px;
    float: left;
  }

  .productList-bottom .product-item .product-info {
    width: 83px;
    padding-top: 44px;
  }

  .product-item .product-info .name {
    font-family: "新宋体";
  }

  /* ￥符号 */
  .product-item .product-info .price {
    font-size: 16px;
    color: #666666;
  }

  .product-item .product-info .price span {
    color: #000;
  }

  .right-area li:nth-child(1) {
    margin-left: 0;
  }

  .right-area li:nth-last-child(1) {
    width: 208px;
  }

  .product-item:hover {
    border-color: #c81623;
    z-index: 1;
    position: relative;
  }

  .right-area .product-item:hover h3,
  .right-area .product-item:hover p,
  .right-area .product-item:hover span {
    color: #c81623;
  }
</style>
