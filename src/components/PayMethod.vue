
<!-- 支付方式组件 -->

<template>
  <section class="pay-method">
    <div class="title">支付方式</div>
    <div class="pay-content">
      <div class="row clearfix">
        <input class="weixin-radio"
               name="pay"
               id="weixin"
               type="radio"
               value="1"
               v-model="pay"
                @click="changePayMethod(1)">
        <label class="weixin-label" for="weixin">微信支付</label>
        <div class="image">
          <img v-bind:src="wxIcon" alt="">
        </div>
        <p class="info">用微信扫一扫就能支付!</p>
      </div>
      <div class="row clearfix">
        <input class="cash-radio"
               name="pay"
               id="cash"
               type="radio"
               value="2"
               v-model="pay"
                @click="changePayMethod(2)">
        <label class="cash-label" for="cash">货到付款</label>
        <p class="info">送货上门后再付款，使用现金或刷银行卡。</p>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {

    //组件名称
    name: 'PayMethod',

    data() {
      return {

        pay: 0,

        //微信图标
        wxIcon: './static/images/icon/weixin.jpg'
      };
    },

    computed: mapState([
      'payMethod'
    ]),

    methods: {

      ...mapActions([
        'setPayMethod'
      ]),

      //改变支付方式
      changePayMethod(pay) {
        this.setPayMethod(pay);
      }
    }
  };
</script>

<style scoped>
  .pay-method {
    border: solid 1px #CCCCCC;
  }

  .pay-method .title {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    background-color: #F4F4F4;
    border-bottom: solid 1px #E3E3E3;
  }

  .pay-method .pay-content {
    height: 90px;
    padding-left: 30px;
    padding-top: 15px;
  }

  .pay-content .row {
    height: 20px;
    line-height: 20px;
    margin-bottom: 26px;
  }

  /* 微信支付 */
  .pay-content .row input {
    float: left;
  }

  .pay-content .row label {
    margin-left: 8px;
    margin-top: -4px;
    font-size: 14px;
    color: #444444;
    float: left;
  }

  .pay-content .image {
    margin-left: 20px;
    margin-top: -4px;
    float: left;
  }

  .pay-content .info {
    margin-left: 7px;
    margin-top: -4px;
    font-size: 14px;
    float: left;
  }

  /* 货到付款 */
  .cash-label {
    margin-right: 18px;
  }
</style>
