
<!-- 网站首页的商品展示组件 -->

<template>
  <section class="index-show-product inner-c">
    <div class="product-title">
      <div class="product-icon fl">
        <img v-bind:src="productInfo.icon" alt="">
      </div>
      <h3 class="fl">{{ productInfo.title }}</h3>
      <div class="more fr">
        <router-link to="/select">{{ productInfo.more }}&gt;&gt;</router-link>
      </div>
    </div>
    <div class="product-content clearfix">
      <div class="left-area fl">
        <router-link to="/proinfo">
          <img v-bind:src="productInfo.leftImage" alt="">
        </router-link>
      </div>
      <div class="right-area">
        <ul class="product-list-top">
          <li class="product-item" v-for="product in productInfo.topProduct">
            <router-link to="/proinfo">
              <img v-bind:src="product.image" alt="手机">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="price">{{ product.price }}元</p>
            </router-link>
          </li>
        </ul>
        <ol class="product-list-bottom">
          <li class="product-item" v-for="product in productInfo.bottomProduct">
            <router-link class="fl" to="/proinfo">
              <img v-bind:src="product.image" alt="三星手机">
              <div class="product-info fl">
                <p class="name">{{ product.name }}</p>
                <p class="price">￥<span>{{ product.price }}</span></p>
              </div>
            </router-link>
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
    props: ['productInfo']
  };
</script>

<style scoped>
  .index-show-product .product-title {
    width: 100%;
    height: 75px;
  }

  .index-show-product .product-icon {
    margin: 15px 14px 0 0;
  }

  .index-show-product .product-title h3 {
    height: 75px;
    line-height: 75px;
    font: 24px/75px "微软雅黑", "microsoft yahei";
  }

  .index-show-product .more {
    margin: 48px 21px 0 0;
    font-family: "新宋体", "NSimSun";
    font-size: 12px;
  }

  .index-show-product .more a {
    color: #000;
  }

  .index-show-product .more a:hover {
    text-decoration: underline;
  }

  .product-content .left-area a {
    height: 400px;
    display: block;
  }

  .product-content .right-area {
    width: 810px;
    border-bottom: solid 3px #ff7201;
    float: left;
  }

  .product-list-top .product-item {
    width: 199px;
    height: 280px;
    margin-left: -1px;
    border: solid 1px #ccc;

    /* 清除display:inline-block属性产生的空隙 */
    font-size: 0;

    float: left;
  }

  .product-list-top .product-item a {
    width: 199px;
    height: 279px;
    text-align: center;
    display: inline-block;
  }

  .product-list-top .product-item img {
    padding: 45px 0 24px 0;
  }

  .product-list-top  .product-item .product-name {
    margin-bottom: 8px;
    font-size: 16px;
    text-align: center;
    color: #000;
  }

  .product-list-top .product-item .price {
    font-size: 14px;
    text-align: center;
    color: #ff7300;
  }

  .product-list-bottom .product-item {
    width: 199px;
    height: 114px;
    margin: -1px 0 0 -1px;
    border: solid 1px #ccc;
    float: left;
  }

  .product-list-bottom .product-item a {
    width: 199px;
    height: 116px;
    display: inline-block;
  }

  .product-list-bottom .product-item img {
    padding: 20px 22px 0 31px;
    float: left;
  }

  .product-list-bottom .product-item .product-info {
    width: 83px;
    padding-top: 44px;
  }

  .product-item .product-info .name {
    font-family: "新宋体", "NSimSun";
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
