
<!-- 订单结算组件 -->

<template>
  <section class="order-sett">
    <div class="title">订单结算</div>
    <div class="order-content clearfix">
      <div class="right">
        <div class="total">
          总计
          <em>￥{{ productPrice * productNum | formateMoney }}</em>
        </div>
        <button class="commit" @click="commitOrder()">提交订单</button>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';

export default {

  // 组件名称
  name: 'OrderSett',

  data() {
    return {
      formateMoney: null
    };
  },

  computed: {
    ...mapState({
      productNum: state => state.user.productNum,
      productPrice: state => state.user.productPrice,
      isReceive: state => state.user.isReceive,
      payMethod: state => state.user.payMethod,
      checkStatus: state => state.user.checkStatus,
      checkContent: state => state.user.checkContent
    })
  },

  mounted() {
    this.$nextTick(() => {
      this.formateMoney = Vue.filter('formateMoney');
      this.changeCheckStatus(0);
      this.setCheckContent('');
    });
  },

  methods: {

    ...mapMutations([
      'changeCheckStatus',
      'setCheckContent'
    ]),

    // 提交订单
    commitOrder() {
      window.scrollTo(0, 872);

      // 如果用户没有填写收货信息
      if (!this.isReceive) {
        this.changeCheckStatus(2);
        this.setCheckContent('请填写收货信息');
        return;
      }

      // 如果用户没有选择支付方式
      if (this.payMethod === 0) {
        this.changeCheckStatus(2);
        this.setCheckContent('请选择支付方式');
        return;
      }

      this.changeCheckStatus(1);
      this.setCheckContent('订单已提交');

      setTimeout(() => {
        this.changeCheckStatus(0);
        this.setCheckContent('');
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
  .order-sett {
    margin-top: 20px;
    border: solid 1px #ccc;
  }

  .order-sett .title {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    background-color: #F4F4F4;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #ccc;
    font-size: 14px;
  }

  .order-sett .order-content {
    padding-top: 40px;
  }

  .order-content .right {
    margin-right: 30px;
    float: right;
  }

  /* 价格总计 */
  .order-sett .total {
    margin-bottom: 16px;
    color: #929292;
  }

  .order-sett .total em {
    color: #EE0000;
    font-weight: bold;
    font-size: 20px;
  }

  /* 提交订单按钮 */
  .order-sett .commit {
    width: 165px;
    height: 33px;
    line-height: 33px;
    margin-right: 10px;
    margin-bottom: 30px;
    background-color: #E50007;
    color: #ffffff;
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    outline-style: none;
    border: none;
    float: right;
  }
</style>
