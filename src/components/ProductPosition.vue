
<!-- 商品位置组件 -->

<template>
  <section class="product-position">
    <div class="inner-c">
      <strong>
        <router-link to="/">首页</router-link>
      </strong>
      <span>&nbsp;&gt;&nbsp;</span>
      <router-link to="/choose">平板电脑</router-link>
      <span>&nbsp;&gt;&nbsp;</span>
      <router-link to="/choose">Apple</router-link>
      <span>&nbsp;&gt;&nbsp;</span>
      <router-link to="/choose">iPad</router-link>
      <span>&nbsp;&gt;&nbsp;</span>
      <em>iPad mini</em>
    </div>
  </section>
</template>

<script>
export default {

  // 组件名称
  name: 'ProductPosition'
};
</script>

<style lang="less" scoped>
  .product-position {
    margin: 25px 0 15px 0;
    font-size: 0;
  }

  .product-position em,
  .product-position a,
  .product-position span,
  .product-position strong {
    font-size: 12px;
    color: #000;
  }

  .product-position a:hover {
    text-decoration: underline;
  }
</style>
