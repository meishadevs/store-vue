<!-- 商品选择页的商品展示组件 -->

<template>
  <div class="select-show-product">
    <ul class="brick-list clearfix">
      <li class="brick-item" v-for="product in productListData">
        <a href="proinfo.html">
          <div class="p-image">
            <img v-bind:src="product.productimage" width="150" height="150" alt="">
          </div>
          <div class="p-name">{{ product.productname }}</div>
          <div class="p-price"><span class="num">{{ product.productprice }}</span>元</div>
          <p class="p-comment">{{ product.commentnum }}人评价</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'selectShowProduct',

    data() {
      return {

        //商品列表数据
        productListData: [],

        //每页第一条商品信息的下标
        productStartIndex: 0,

        //每页展示的商品信息的条数
        productAmount: 6,

        //当前展示的是第几页商品
        curPage: 1
      };
    },

    //初始化
    mounted: function () {
      this.$nextTick(function () {

        //获得商品信息
        this.getProductInfo();
      });
    },

    methods: {

      //获得商品信息
      getProductInfo: function () {

        //计算每页展示的第一条商品信息的下标
        this.productStartIndex = (this.curPage - 1) * this.productAmount;

        //发送get请求，获得商品信息
        this.jsonp(this.productInfoUrl + this.productAmount + '&startIndex=' + this.productStartIndex, null, (err, data) => {
          if (err) {
            console.error("error:", err.message);
          } else {

            //获得商品列表数据
            this.productListData = data;
          }
        });
      }
    }
  };
</script>

<style scoped>
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
