
<!-- 商品信息展示组件 -->

<template>
  <div class="show-proinfo">
    <h3 class="title">{{ productInfo.productName }}</h3>
    <div class="dl clearfix">
      <div class="dt">价格</div>
      <div class="dd">
        <span class="des-money">
          <em>￥</em>{{ productInfo.productPrice | formateMoney }}
        </span>
      </div>
    </div>
    <div class="dl clearfix">
      <div class="dt">优惠</div>
      <div class="dd">
        <span class="hg">
          <i class="hg-icon">满换购</i>购ipad加价优惠够配件或USB充电插座
        </span>
      </div>
    </div>

    <!-- 选择手机的属性 s -->
    <div class="des-position">
      <div class="dl clearfix">
        <div class="dt">送到</div>
        <div class="dd">
          <!-- 地址选择组件 s -->
          <select-address></select-address>
          <!-- 地址选择组件 e -->
          <span class="the-god">有货，可当日出货</span>
        </div>
      </div>
      <div class="dl clearfix">
        <div class="dt select-color">选择颜色</div>
        <div class="dd">
          <!-- 颜色选择组件 s -->
          <select-color></select-color>
          <!-- 颜色选择组件 e -->
        </div>
      </div>
      <div class="dl clearfix">
        <div class="dt des-select-more">选择款式</div>
        <div class="dd">
          <!-- 手机款式选择组件 s -->
          <select-style></select-style>
          <!-- 手机款式选择组件 e -->
        </div>
      </div>
      <div class="dl">
        <div class="dt">数量</div>
        <div class="dd clearfix">
          <!-- 改变商品数量的组件 s -->
          <change-product-num :limitProductNum="productInfo.limitProductNum"></change-product-num>
          <!-- 改变商品数量的组件 e -->
          <span class="buy-number">限购<em>{{ productInfo.limitProductNum }}</em>件</span>
        </div>
      </div>
    </div>
    <!-- 选择手机的属性 e -->

    <!-- 显示已经选好的手机的属性 -->
    <div class="show-style clearfix">
      <div class="name">已选择</div>
      <div class="style">
        “
        <span class="product-color">{{ productInfo.productColor }}</span>
        <span class="line"></span>
        <span class="product-style">{{ productInfo.productStyle }}</span>
        ”
      </div>
    </div>
    <!-- 显示已经选好的手机的属性 e -->

    <!-- 如果用户已经登录了，直接进入购物车 s -->
    <div class="des-button clearfix" v-if="isLogin">
      <router-link to="/cart"  class="buy">加入购物车</router-link>
      <span class="line"></span>
      <router-link to="/cart" class="buy">立即购买</router-link>
    </div>
    <!-- 如果用户已经登录了，直接进入购物车 e -->

    <!-- 如果用户没有登录，先登录 s -->
    <div class="des-button clearfix" v-else>
      <router-link to="/login/1"  class="buy">加入购物车</router-link>
      <span class="line"></span>
      <router-link to="/login/1" class="buy">立即购买</router-link>
    </div>
    <!-- 如果用户没有登录，先登录 e -->

    <p class="notice">注意：此商品可提供普通发票，不提供增值税发票。</p>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import SelectAddress from './SelectAddress';
import SelectColor from './SelectColor';
import SelectStyle from './SelectStyle';
import ChangeProductNum from './ChangeProductNum';

export default {

  // 组件名称
  name: 'ShowProinfo',

  // 引入外部组件
  components: {
    SelectAddress,
    SelectColor,
    SelectStyle,
    ChangeProductNum
  },

  data() {
    return {

      // 商品信息
      productInfo: {

        // 商品的名称
        productName: '全网底价 Apple 苹果 iPad mini 16G wifi版 平板电脑 前白后银 MD531CH/A 银白两色生产批次不同混合发货',

        // 商品的价格
        productPrice: 1999,

        // 商品的数量
        productNum: 1,

        // 商品的颜色
        productColor: '白色',

        // 商品的规格
        productStyle: 'WIFI 16G',

        // 商品限制购买的数量
        limitProductNum: 200,

        formateMoney: null
      }
    };
  },

  // 计算属性
  computed: mapState([
    'productNum',
    'productPrice',
    'isLogin'
  ]),

  // 初始化
  mounted() {
    this.$nextTick(() => {
      // 在showProinfo组件创建的钩子函数中监听select-color事件
      this.bus.$on('select-color', color => {
        this.productInfo.productColor = color;
      });

      // 在showProinfo组件创建的钩子函数中监听select-style事件
      this.bus.$on('select-style', style => {
        this.productInfo.productStyle = style;
      });

      // 设置商品的数量
      this.setProductNum(this.productInfo.productNum);

      // 设置商品的价格
      this.setProductPrice(this.productInfo.productPrice);

      this.bus.$emit('change-num', this.productNum);

      // 获得已经注册的过滤器
      this.formateMoney = Vue.filter('formateMoney');
    });
  },

  methods: {
    ...mapActions([
      'setProductNum',
      'setProductPrice'
    ])
  }
};
</script>

<style lang="less" scoped>
  .show-proinfo {
    padding: 10px;
  }

  .show-proinfo .title {
    padding: 13px 25px;
    font: bold 16px/22px "微软雅黑", "microsoft yahei";
    color: #333;
  }

  .show-proinfo .dl {
    margin-bottom: 5px;
  }

  .show-proinfo .dt {
    width: 75px;
    line-height: 25px;
    color: #656;
    text-indent: 17px;
    float: left;
  }

  .show-proinfo .dd {
    padding-left: 75px;
  }

  .des-money {
    font-size: 18px;
    color: #D70000;
  }

  .des-money em {
    font-size: 12px;
  }

  /* 换购 */
  .hg {
    padding-top: 4px;
    display: inline-block;
  }

  .hg-icon {
    width: 55px;
    height: 18px;
    line-height: 18px;
    margin-right: 10px;
    background: url("~@/assets/images/icon/hg.jpg") left top no-repeat;
    font-style: normal;
    color: #fff;
    text-indent: 16px;
    display: inline-block;
  }

  .des-position {
    padding: 15px 0;
    background-color: #F2F2F2;
  }

  .the-god {
    line-height: 24px;
  }

  .show-proinfo .des-select-more {
    line-height: 55px;
  }

  .buy-number {
    margin-left: 12px;
    line-height: 34px;
    font-weight: bold;
    color: #666666;
    float: left;
  }

  .buy-number em {
    color: #FC7700;
  }

  .show-style {
    margin: 22px 0 0 17px;
  }

  .show-style .name {
    font-weight: bold;
    float: left;
  }

  .show-style .style {
    color: #0479CA;
    font-weight: bold;
    float: left;
  }

  .show-style .style .line {
    width: 2px;
    height: 12px;
    margin: 0 2px 0 4px;
    background-color: #0479CA;
    display: inline-block;
    position: relative;
    top: 2px;
  }

  .des-button {
    margin: 10px 0 0 74px;
  }

  .des-button a {
    width: 136px;
    height: 48px;
    padding: 0px 0 0 68px;
    background: url("~@/assets/images/icon/car1.jpg") 30px center no-repeat;
    font: 20px/48px "微软雅黑", "microsoft yahei";
    color: #fff;
    background-color: #F98700;
    cursor: pointer;
    float: left;
  }

  /* 立即购买按钮和加入购物车按钮之间的线段 */
  .des-button .line {
    width: 1px;
    height: 48px;
    margin: 0 40px;
    background-color: #E5E5E5;
    float: left;
  }

  /* 注意事项 */
  .show-proinfo .notice {
    margin: 20px 0 0 20px;
    font-family: "SimSun";
    font-size: 12px;
    color: #999999;
  }
</style>
