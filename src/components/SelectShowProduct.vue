<template>
  <div class="select-show-product">
    <ul class="brick-list clearfix">
      <li class="brick-item" v-for="(product, index) in productList" :key="index">
        <router-link to="/proinfo">
          <div class="p-image">
            <img :src="product.productImage" alt="商品图片">
          </div>
          <div class="p-name">{{ product.productName }}</div>
          <div class="p-price"><span class="num">{{ product.productPrice }}</span>元</div>
          <p class="p-comment">{{ product.commentNum }}人评价</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { productList } from '@/api/product';

export default {
  name: 'SelectShowProduct',

  // 获取从父组件中传递过来的数据
  props: ['curPage', 'numProduct'],

  data() {
    return {
      // 商品列表数据
      productList: [],

      // 每页第一条商品信息的下标
      productFirstIndex: 0,

      // 当前展示的是第indexPage页商品信息
      indexPage: 0,

      listQuery: {
        pageNumber: 1,
        pageSize: 9
      }
    };
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      // 获得当前展示的是第几页商品信息
      this.indexPage = this.curPage;

      // 获得商品列表
      this.getProductList();

      // 监听翻页组件中传递过来的事件
      this.bus.$on('change-page', (data) => {
        window.scrollTo(0, 459);
        this.indexPage = data;
      });
    });
  },

  // 监听器
  watch: {
    // 如果indexPage发生改变，这个函数就会调用
    indexPage() {
      // 获得商品信息
      this.getProductList();
    }
  },

  methods: {
    // 获得商品列表
    getProductList() {
      productList(this.listQuery)
        .then(res => {
          this.productList = res.data.list;
        })
        .catch(error => {
          this.$message.error(error.message);
        });
    }
  }
};
</script>

<style lang="less" scoped>
  .select-show-product {
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
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
    float: left;
    position: relative;
  }

  .brick-list li:nth-of-type(3n) {
    margin-right: 0;
  }

  .brick-item:hover {
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .5);
  }

  .p-image {
    padding-top: 10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .p-image img {
    width: 150px;
    height: 150px;
    display: inline-block;
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
