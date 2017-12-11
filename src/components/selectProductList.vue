
<!-- 商品选择页的商品列表组件 -->

<template>
  <div class="selecct-product-list">
    <ul>
      <li class="product-item clearfix" v-for="product in productListData">
        <div class="product-image fl">
          <router-link to="/proinfo">
            <img v-bind:src="product.productImage" alt="商品图片">
          </router-link>
        </div>
        <div class="product-info fl">
          <p class="product-name">
            <router-link to="/proinfo">{{ product.productName }}</router-link>
          </p>
          <p class="product-price">
            ￥{{ product.productPrice }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'selectProductList',

    data() {
      return {
        productListData: [
          {
            'productImage': './static/images/shop17.jpg',
            'productName': '全网底价 Apple 苹果 iPad mini 1',
            'productPrice': '2088.00'
          },
          {
            'productImage': './static/images/shop18.jpg',
            'productName': 'Haier 海尔燃气热水器',
            'productPrice': '1689.00'
          },
          {
            'productImage': './static/images/shop19.jpg',
            'productName': 'Apple 苹果 iPhone 5s 16G',
            'productPrice': '4979.00'
          },
          {
            'productImage': './static/images/shop20.jpg',
            'productName': 'AKG 爱科技 K420 头戴耳机',
            'productPrice': '205.00'
          },
          {
            'productImage': './static/images/shop21.jpg',
            'productName': 'TAMRON 腾龙 SP 90mm F/2.8',
            'productPrice': '205.00'
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .selecct-product-list {
    width: 100%;
    padding-top: 10px;
  }

  .selecct-product-list .product-item {
    margin-bottom: 20px;
  }

  .selecct-product-list .product-info {
    width: 110px;
    padding-top: 5px;
    margin-left: 10px;
    font-size: 14px;
  }

  .selecct-product-list .product-name a {
    color: #999;
  }

  .selecct-product-list .product-name a:hover {
    color: #C81623;
  }

  .selecct-product-list .product-price {
    color: #e4393c;
    font-weight: 400;
    font-family: Verdana;
  }
</style>
