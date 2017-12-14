
<!-- 支付方式组件 -->

<template>
  <section class="pay-method inner-c">
    <div class="title">支付方式</div>
    <div class="pay-content">
      <div class="row clearfix">
        <input class="weixin-radio" name="pay" id="weixin" type="radio" value="1" v-model="pay">
        <label class="weixin-label" for="weixin">微信支付</label>
        <div class="image">
          <img src="/static/images/icon/weixin.jpg" alt="">
        </div>
        <p class="info">用微信扫一扫就能支付!</p>
      </div>
      <div class="row clearfix">
        <input class="cash-radio" name="pay" id="cash" type="radio" value="2" v-model="pay">
        <label class="cash-label" for="cash">货到付款</label>
        <p class="info">送货上门后再付款，使用现金或刷银行卡。</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'payMethod',

    data() {
      return {

        //标记用户选择的支付方式，1表示微信支付，2表示现金支付
        pay: null
      };
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
    padding-left: 30px;
    padding-top: 15px;
    height: 90px;
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
