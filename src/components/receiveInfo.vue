<!-- 收货信息组件 -->

<template>
  <section class="receive-info inner-c">
    <div class="title">收货信息</div>
    <div class="show-result">收货信息已保存</div>
    <div class="receive-content">
      <form>
        <div class="row place clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">收货地址：</span>
          </div>
          <!-- 地址选择组件 s -->
          <selectAddress></selectAddress>
          <!-- 地址选择组件 e -->
          <span class="notice-info">
                        <s class="notice-icon"></s>
                        <s class="notice-content"></s>
                    </span>
        </div>
        <div class="row address clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">详细地址：</span>
          </div>
          <input type="text" class="input-address" maxlength="26" placeholder="长度只能在4-26个字符之间" data-class="address"
                 style="border-color: rgb(194, 194, 194);">
          <span class="notice-info" style="display: none;">
                        <s class="notice-icon"></s>
                        <s class="notice-content"></s>
                    </span>
        </div>
        <div class="row receiver clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">收&nbsp;货&nbsp;&nbsp;人：</span>
          </div>
          <input type="text" class="input-receiver" maxlength="10" placeholder="长度只能在2-10个字符之间" data-class="receiver"
                 style="border-color: rgb(194, 194, 194);">
          <span class="notice-info" style="display: none;">
                        <s class="notice-icon"></s>
                        <s class="notice-content"></s>
                    </span>
        </div>
        <div class="row phone clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</span>
          </div>
          <input type="text" maxlength="11" class="input-phone" placeholder="如13452525625" data-class="phone"
                 style="border-color: rgb(194, 194, 194);">
          <span class="notice-info" style="display: none;">
                        <s class="notice-icon"></s>
                        <s class="notice-content"></s>
                    </span>
        </div>
        <div class="row tel-phone clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">固定电话：</span>
          </div>
          <input type="text" class="input-area" placeholder="区号" data-class="tel-phone"
                 style="border-color: rgb(194, 194, 194);">
          <s>-</s>
          <input type="text" class="input-tel" placeholder="电话号码" data-class="tel-phone"
                 style="border-color: rgb(194, 194, 194);">
          <s>-</s>
          <input type="text" class="input-extension" placeholder="分机号（可选）" data-class="tel-phone"
                 style="border-color: rgb(194, 194, 194);">
          <span class="notice-info" style="display: none;">
                        <s class="notice-icon"></s>
                        <s class="notice-content"></s>
                    </span>
        </div>
        <div class="row clearfix">
          <input type="button" class="button-submit" value="确认收货地址">
          <p class="info-text">收货信息填写正确</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  import selectAddress from '../components/selectAddress';

  export default {

    name: 'receiveInfo',

    components: {
      selectAddress
    },

    //初始化
    mounted: function () {
      this.$nextTick(() => {
        document.title = '购物车和结算页';
        document.body.style.backgroundColor = '#fff';
      });
    }
  };
</script>

<style scoped>
  /* 收货信息 */
  .receive-info {
    border: solid 1px #CCCCCC;
  }

  .receive-info .title {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    background-color: #F2F2F2;
    border-top: solid 1px #fff;
    border-bottom: solid 1px #E3E3E3;
    font-size: 14px;
    color: #444444;
  }

  .receive-content {
    padding-top: 5px;
    padding-left: 30px;
  }

  .row {
    margin-bottom: 16px;
  }

  .row .content {
    position: relative;
    top: 2px;
    float: left;
  }

  /* 星号 */
  .row .xing {
    margin-top: 3px;
    margin-right: 8px;
    font-size: 14px;
    color: #FF0000;
    float: left;
  }

  .row .name {
    margin-right: 5px;
    font-size: 14px;
    color: #444444;
    float: left;
  }

  /* 收货人地址输入框 */
  .input-address {
    width: 373px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    border: solid 1px #C2C2C2;
  }

  .notice-info {
    height: 16px;
    line-height: 16px;
    color: #e22;
    display: none;
  }

  .notice-info .notice-icon {
    width: 16px;
    height: 16px;
    vertical-align: top;
    background: url("../../static/images/icon/warning-icon.png") -17px -100px no-repeat;
    display: inline-block;
  }

  .place .notice-icon {
    display: none;
    background-position: 0px -117px;
    display: inline-block;
    position: relative;
    left: -9px;
    top: 5px;
  }

  /* 收货人姓名输入框 */
  .input-receiver {
    width: 373px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    border: solid 1px #C2C2C2;
    position: relative;
    left: 2px;
  }

  /* 手机号码输入框 */
  .input-phone {
    width: 373px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    border: solid 1px #C2C2C2;
    position: relative;
    left: 2px;
  }

  .row i {
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin-left: 10px;
    font-style: normal;
    font-size: 14px;
  }

  /* 区号输入框 */
  .input-area {
    width: 52px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    border: solid 1px #C2C2C2;
    color: #000;
    position: relative;
    left: 1px;
  }

  /* 电话号码输入框 */
  .input-tel {
    width: 87px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    border: solid 1px #C2C2C2;
    color: #000;
    position: relative;
    left: 1px;
  }

  /* 分机号输入框 */
  .input-extension {
    width: 90px;
    height: 22px;
    line-height: 22px;
    padding: 0 10px;
    border: solid 1px #C2C2C2;
    color: #000;
    position: relative;
    left: 1px;
  }

  /* 确认收货地址按钮 */
  .button-submit {
    width: 112px;
    height: 27px;
    line-height: 27px;
    text-align: center;
    background-color: #4492FC;
    border: solid 1px #3784ED;
    border-bottom: none;
    color: #fff;
    cursor: pointer;
    float: left;
  }

  .info-text {
    height: 27px;
    line-height: 27px;
    padding-left: 10px;
    font-size: 16px;
    color: #e4393c;
    display: none;
    float: left;
  }

  .show-result {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #ff6d28;
    display: none;
    position: relative;
  }
</style>
