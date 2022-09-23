
<!-- 商品信息展示页的商品列表组件 -->

<template>
  <dl class="proinfo-product-list" :class="{bold: isAddBold}">
    <dt>{{ productList.title }}</dt>
    <dd>
      <ul>
        <li v-for="(product, index) in productList.content" :key="index">
          <div class="product-image">
            <a href="javascript:;" @click="GoTop()">
              <img :src="require(`@/assets/images/${product.productImage}`)" alt="产品">
            </a>
          </div>
          <p class="product-name">
            <a href="javascript:;" @click="goTop()">{{ product.productName }}</a>
          </p>
          <p class="product-price">￥{{ product.productPrice }}</p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {

  // 组件名称
  name: 'ProinfoProductList',

  // 获取从父组件中传递过来的数据
  props: ['productList', 'isAddBold'],

  methods: {
    goTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="less" scoped>
  .proinfo-product-list {
    margin-bottom: 10px;
    border: solid 1px #CCCCCC;
  }

  .proinfo-product-list dt {
    height: 39px;
    padding-left: 16px;
    font: bold 14px/39px "新宋体", "NSimSun";
    border-bottom: solid 1px #ccc;
  }

  .proinfo-product-list dd {
    background-color: #fff;
  }

  .proinfo-product-list li {
    padding-bottom: 22px;
  }

  .proinfo-product-list .product-image {
    padding: 18px 0 15px 0;
    text-align: center;
  }

  /* 产品名称 */
  .proinfo-product-list .product-name {
    line-height: 18px;
    padding-left: 22px;
    font-family: "新宋体", "NSimSun";
  }

  .proinfo-product-list .product-name a {
    color: #999;
  }

  /* 产品价格 */
  .proinfo-product-list .product-price {
    padding-left: 22px;
    font: 12px/18px "微软雅黑", "microsoft yahei";
    color: #DD0000;
  }

  .proinfo-product-list a:hover {
    color: #d70057;
  }

  .bold {
    border-top: solid 3px #1D86CF;
  }
</style>
