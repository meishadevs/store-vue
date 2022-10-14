<template>
  <div class="product">
    <ul class="brick-list clearfix">
      <li
        class="brick-item"
        v-for="(product, index) in productList"
        :key="index"
      >
        <router-link to="/proinfo">
          <div class="p-image">
            <img :src="product.productImage" alt="商品图片" />
          </div>
          <div class="p-name">{{ product.productName }}</div>
          <div class="p-price">
            <span class="num">{{ product.productPrice }}</span
            >元
          </div>
          <p class="p-comment">{{ product.commentNum }}人评价</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',

  props: {
    productList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.product {
  width: 100%;
  height: 536px;
}

.brick-list {
  width: 751px;
}

.brick-item {
  width: 241px;
  margin-right: 14px;
  margin-bottom: 14px;
  background: #fff;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  float: left;
  position: relative;
}

.brick-list li:nth-of-type(3n) {
  margin-right: 0;
}

.brick-item:hover {
  box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.5);
}

.p-image {
  padding-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    display: inline-block;
  }
}

.p-name {
  padding-bottom: 3px;
  font-size: 14px;
  text-align: center;
  color: #333;
}

.p-price {
  margin-bottom: 5px;
  text-align: center;
  color: #ff6700;
}

.p-comment {
  padding-bottom: 10px;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
}
</style>
