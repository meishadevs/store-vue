
<!-- 商品分类页的商品展示组件 -->

<template>
  <div class="cate-show-product">
    <div class="cate-name">
      <h3>{{ productList.title }}</h3>
    </div>
    <ul class="product-list clearfix">
      <li class="product-item" v-for="product in productList.content">
        <div class="product-image">
          <a href="javascript:;">
            <img v-bind:src="product.image" alt="商品">
          </a>
        </div>
        <div class="product-name">
          <a href="javascript:;">{{ product.name }}</a>
        </div>
        <p class="product-price">￥{{ product.price }}</p>
        <p class="product-comment">
          评论:
          <span class="star" v-bind:style="{width: product.numStar * 13 + 'px'}"></span>
          <a class="comment-num" href="javascript:;">({{ product.numComment }}条)</a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    name: 'cateShowProduct',

    props: ['productList'],

    data() {
      return {
      };
    }
  };
</script>

<style scoped>
  .cate-show-product .cate-name {
    height: 34px;
    border-bottom: solid 2px #ccc;
  }

  .cate-name h3 {
    width: 180px;
    height: 34px;
    padding-left: 10px;
    border-bottom: solid 2px #096dba;
    font: bold 14px/34px "宋体", "SimSun";
  }

  .product-list {
    width: 790px;
    margin-left: 16px;
  }

  .product-item {
    margin: 18px 32px 30px 0;
    float: left;
  }

  .product-item .product-name {
    width: 162px;
    height: 50px;
  }

  .product-item .product-name a {
    color: #333333;
  }

  .product-item .product-name a:hover {
    color: #DD0000;
  }

  .product-item .product-price {
    height: 20px;
    color: #d4105a;
    font-weight: bold;
  }

  .product-item .product-comment .star {
    width: 13px;
    height: 12px;
    background: url("../../static/images/star.png");
    display: inline-block;
  }

  .product-item .product-comment .comment-num {
    color: #085c9b;
  }

  .product-item .product-comment .comment-num:hover {
    color: #DD0000;
  }
</style>
