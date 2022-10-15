<template>
  <div id="choose">
    <coll-site />
    <top-bar />
    <site-head />
    <nav-bar />
    <user-position />
    <section class="wrapper clearfix">
      <div class="left-area">
        <product-cate />
        <select-product-list />
      </div>
      <div class="right-area">
        <product-filter />
        <div class="hr-15"></div>
        <div class="add-info clearfix">
          <p class="left-title">全部商品</p>
          <div class="right-content">
            <div class="show-data">
              共&nbsp;<span class="product-num">{{ totalProduct }}</span
              >&nbsp;件商品
            </div>
            <div class="show-page">
              <span class="now-page">{{ listQuery.pageNumber }}</span>
              <span class="slash">/</span>
              <span class="total-page">{{ totalPage }}</span>
            </div>
          </div>
        </div>
        <product-list :productList="list" />
        <change-page
          :total="totalProduct"
          :pageSize="listQuery.pageSize"
          :currentPage.sync="listQuery.pageNumber"
          @prev-click="getProductList"
          @next-click="getProductList"
          @current-change="getProductList"
          v-if="totalProduct > 0"
        />
      </div>
    </section>
    <div class="hr-40"></div>
    <site-foot />
    <go-top />
  </div>
</template>

<script>
import CollSite from '@/components/CollSite';
import TopBar from '@/components/TopBar';
import SiteHead from '@/components/SiteHead';
import NavBar from '@/components/NavBar';
import UserPosition from '@/components/UserPosition';
import ProductCate from '@/components/ProductCate';
import SelectProductList from '@/components/SelectProductList';
import ProductFilter from '@/components/ProductFilter';
import ProductList from '@/components/ProductList';
import ChangePage from '@/components/ChangePage';
import SiteFoot from '@/components/SiteFoot';
import GoTop from '@/components/GoTop';
import { productList } from '@/api/product';

export default {
  name: 'choose',

  // 引入的外部组件
  components: {
    CollSite,
    TopBar,
    SiteHead,
    NavBar,
    UserPosition,
    ProductCate,
    SelectProductList,
    ProductFilter,
    ProductList,
    ChangePage,
    SiteFoot,
    GoTop
  },

  data() {
    return {
      // 商品总数
      totalProduct: 0,

      // 一共有多少页商品
      totalPage: 0,

      // 商品列表
      list: [],

      listQuery: {
        pageNumber: 1,
        pageSize: 6
      }
    };
  },

  created() {
    this.getProductList();
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      document.title = '商品选择页';
      document.body.style.backgroundColor = '#f0f0f0';
      window.scrollTo(0, 0);
    });
  },

  methods: {
    // 获得商品列表
    getProductList() {
      window.scrollTo(0, 0);

      productList(this.listQuery)
        .then((res) => {
          this.list = res.data.list;

          this.totalProduct = res.data.count;

          // 计算一共有多少页
          this.totalPage = Math.ceil(
            this.totalProduct / this.listQuery.pageSize
          );
        })
        .catch((error) => {
          this.$message.error(error.message);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 959px;
  margin: 0 auto;

  .left-area {
    width: 188px;
    margin-right: 15px;
    background-color: #fff;
    border: solid 1px #d7d7d7;
    float: left;
  }

  .right-area {
    float: left;
  }
}

.add-info {
  width: 742px;
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: #fff;
  border: solid 1px #d9d9d9;

  .left-title {
    float: left;
  }

  .right-content {
    float: right;

    .show-data {
      margin-right: 10px;
      font-weight: normal;
      color: #999;
      float: left;

      .product-num {
        color: #e4393c;
      }
    }

    .show-page {
      margin-right: 50px;
      font-weight: normal;
      float: left;

      .now-page {
        color: #e4393c;
      }
    }
  }
}

.slash {
  margin-left: 5px;
  margin-right: 5px;
  color: #999;
}
</style>
