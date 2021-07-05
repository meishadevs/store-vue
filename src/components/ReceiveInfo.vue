
<!-- 收货信息组件 -->

<template>
  <section class="receive-info" @click="recoverStatus()">
    <div class="title">收货信息</div>
    <transition name="fade">
      <div class="show-result" v-if="isShowResult">收货信息已保存</div>
    </transition>
    <div class="receive-content">
      <form>
        <div class="row place clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">收货地址：</span>
          </div>
          <!-- 地址选择组件 s -->
          <select-address></select-address>
          <!-- 地址选择组件 e -->
          <span class="right-icon" v-if="noticeStatus1 == 1"></span>
        </div>
        <div class="row address clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">详细地址：</span>
          </div>
          <!-- 如果收货地址验证失败输入框上显示一个红色的边框 s -->
          <input
class="input-address"
                 maxlength="26"
                 placeholder="长度只能在4-26个字符之间"
                 v-model="address"
                 v-bind:class="{border: noticeStatus2 == 2}">
          <!-- 如果收货地址验证失败输入框上显示一个红色的边框 e -->
          <!-- 如果收货地址验证成功，显示一个蓝色的小圆圈 s -->
          <span class="right-icon" v-if="noticeStatus2 == 1"></span>
          <!-- 如果收货地址验证成功，显示一个蓝色的小圆圈 e -->
          <!-- 如果收货地址验证失败，显示一个红色的小圆圈 s -->
          <div class="notice-info" v-if="noticeStatus2 == 2">
            <span class="error-icon"></span>
            <span class="notice-text">{{ noticeContent2 }}</span>
          </div>
          <!-- 如果收货地址验证失败，显示一个红色的小圆圈 e -->
        </div>
        <div class="row receiver clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">收&nbsp;货&nbsp;&nbsp;人：</span>
          </div>
          <!-- 如果收货人的姓名验证失败，输入框上显示一个红色的边框 s -->
          <input
class="input-receiver"
                 maxlength="10"
                 placeholder="长度只能在2-10个字符之间"
                 v-model="receiver"
                v-bind:class="{border: noticeStatus3 == 2}">
          <!-- 如果收货人的姓名验证失败，输入框上显示一个红色的边框 e -->
          <!-- 如果收货人的姓名验证成功，显示一个蓝色的小圆圈 s -->
          <span class="right-icon" v-if="noticeStatus3 == 1"></span>
          <!-- 如果收货人的姓名验证成功，显示一个蓝色的小圆圈 e -->
          <!-- 如果收货人的姓名验证失败，显示一个红色的小圆圈 s -->
          <div class="notice-info" v-if="noticeStatus3 == 2">
            <span class="error-icon"></span>
            <span class="notice-text">{{ noticeContent3 }}</span>
          </div>
          <!-- 如果收货人的姓名验证失败，显示一个红色的小圆圈 e -->
        </div>
        <div class="row phone clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</span>
          </div>
          <!-- 如果用户输入的手机号码的格式不正确，会显示一个红色的边框 s -->
          <input
maxlength="11"
                 class="input-phone"
                 placeholder="如13452525625"
                 v-model="phoneNum"
                  v-bind:class="{border: noticeStatus4 == 2}">
          <!-- 如果用户输入的手机号码的格式不正确，会显示一个红色的边框 e -->
          <!-- 如果用户输入的手机号码验证成功，显示一个蓝色的小圆圈 s -->
          <span class="right-icon" v-if="noticeStatus4 == 1"></span>
          <!-- 如果用户输入的手机号码验证成功，显示一个蓝色的小圆圈 e -->
          <!-- 如果用户输入的手机号码验证失败，显示一个红色的小圆圈 s -->
          <div class="notice-info" v-if="noticeStatus4 == 2">
            <span class="error-icon"></span>
            <span class="notice-text">{{ noticeContent4 }}</span>
          </div>
          <!-- 如果用户输入的手机号码验证失败，显示一个红色的小圆圈 e -->
        </div>
        <div class="row tel-phone clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">固定电话：</span>
          </div>
          <input
class="input-tel"
                 placeholder="只能是7位或者8位数字(可不填)"
                 maxlength="8"
                 v-model="telNum"
                v-bind:class="{border: noticeStatus5 == 2}">
          <span class="right-icon" v-if="noticeStatus5 == 1"></span>
          <div class="notice-info" v-if="noticeStatus5 == 2">
            <span class="error-icon"></span>
            <span class="notice-text">{{ noticeContent5 }}</span>
          </div>
        </div>
        <div class="row clearfix">
          <input type="button" class="button-submit" value="确认收货信息" @click.stop="submitReceiveInfo()">
          <p class="info-text">收货信息填写正确</p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SelectAddress from './SelectAddress'

export default {

  // 组件名称
  name: 'ReceiveInfo',

  components: {
    SelectAddress
  },

  data() {
    return {

      // 记录详细地址
      address: null,

      // 收货人
      receiver: null,

      // 手机号码
      phoneNum: '',

      // 电话号码
      telNum: '',

      // 提示信息的状态（0：隐藏提示信息，1：显示验证成功的提示信息，2：显示验证失败的提示信息）
      noticeStatus1: 0,
      noticeStatus2: 0,
      noticeStatus3: 0,
      noticeStatus4: 0,
      noticeStatus5: 0,

      // 提示信息的内容
      noticeContent1: null,
      noticeContent2: null,
      noticeContent3: null,
      noticeContent4: null,
      noticeContent5: null,

      isShowResult: false
    }
  },

  // 初始化
  mounted() {
    this.$nextTick(() => {
      document.title = '购物车和结算页'
      document.body.style.backgroundColor = '#fff'

      // 获得并且处理从SelectAddress组件传递过来的自定义事件
      this.bus.$on('select-address', () => {
        this.noticeStatus1 = 0
      })
    })
  },

  computed: mapState([
    'isReceive'
  ]),

  methods: {

    ...mapActions([
      'changeReceiveStatus'
    ]),

    // 提交收货信息
    submitReceiveInfo() {
      this.noticeStatus1 = 1

      // 检测用户输入的收货地址是否正确
      if (!this.checkAddress()) {
        return
      }

      // 检测用户输入的收货人的姓名是否正确
      if (!this.checkReceiver()) {
        return
      }

      // 检测用户输入的手机号码是否正确
      if (!this.checkPhoneNum()) {
        return
      }

      // 检测电话号码
      if (!this.checkTelNumber()) {
        return
      }

      this.isShowResult = true
      this.changeReceiveStatus(true)

      setTimeout(() => {
        this.isShowResult = false
      }, 3000)
    },

    // 恢复状态
    recoverStatus() {
      if (this.checkAddress() !== 1) {
        this.noticeStatus2 = 0
        this.noticeContent2 = ''
      }

      if (this.checkReceiver() !== 1) {
        this.noticeStatus3 = 0
        this.noticeContent3 = ''
      }

      if (this.checkPhoneNum() !== 1) {
        this.noticeStatus4 = 0
        this.noticeContent4 = ''
      }

      if (this.checkTelNumber() !== 1) {
        this.noticeStatus5 = 0
        this.noticeContent5 = ''
      }
    },

    // 检测收货地址
    checkAddress: function() {
      // 如果用户没有输入收货地址
      if (this.address === null || this.address === '') {
        this.noticeStatus2 = 2
        this.noticeContent2 = '请填写详细的收货地址'
        return 0
      }

      // 如果用户输入的收货地址不符合规则
      if (this.address.length < 4 || this.address.length > 26) {
        this.noticeStatus2 = 2
        this.noticeContent2 = '收货地址的长度应该为4~26个字符'
        return 0
      }

      this.noticeStatus2 = 1
      this.noticeContent2 = ''
      return 1
    },

    // 检测收货人
    checkReceiver: function() {
      // 如果用户没有输入收货人的姓名
      if (this.receiver === null || this.receiver === '') {
        this.noticeStatus3 = 2
        this.noticeContent3 = '请填写收货人的姓名'
        return 0
      }

      // 如果用户输入的收货人的姓名不符合规则
      if (this.receiver.length < 2 || this.receiver.length > 10) {
        this.noticeStatus3 = 2
        this.noticeContent3 = '收货人姓名的长度应该为2~10个字符'
        return 0
      }

      this.noticeStatus3 = 1
      this.noticeContent3 = ''
      return 1
    },

    // 检测手机号码
    checkPhoneNum() {
      // 如果用户没有输入手机号码
      if (this.phoneNum === null || this.phoneNum === '') {
        this.noticeStatus4 = 2
        this.noticeContent4 = '请输入您的手机号码'
        return 0
      }

      if (!(/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/.test(this.phoneNum))) {
        this.noticeStatus4 = 2
        this.noticeContent4 = '您输入的手机号码的格式不正确'
        return 0
      }

      this.noticeStatus4 = 1
      this.noticeContent4 = ''
      return 1
    },

    // 检测电话号码
    checkTelNumber() {
      if (this.telNum === null || this.telNum === '') {
        this.noticeStatus5 = 0
        this.noticeContent5 = ''
        return 1
      }

      if (this.telNum.length < 7 || isNaN(this.telNum)) {
        this.noticeStatus5 = 2
        this.noticeContent5 = '您输入的电话号码的格式不正确'
        return 0
      }

      this.noticeStatus5 = 1
      this.noticeContent5 = ''
      return 1
    }
  }
}
</script>

<style lang="less" scoped>
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
    position: relative;
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

  /* 验证正确显示的图标 */
  .right-icon {
    width: 16px;
    height: 16px;
    background: url("~@/assets/images/icon/warning-icon.png") no-repeat;
    background-position: 0px -117px;
    transform: translateY(-50%);
    position: absolute;
    left: 476px;
    top: 50%;
  }

  /* 验证错误显示的图标 */
  .error-icon {
    width: 18px;
    height: 16px;
    background: url("~@/assets/images/icon/warning-icon.png") no-repeat;
    background-position: -17px -100px;
    float: left;
  }

  .notice-info {
    height: 16px;
    line-height: 16px;
    color: #e22;
    transform: translateY(-50%);
    position: absolute;
    left: 476px;
    top: 50%;
  }

  .notice-info .notice-text {
    float: left;
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

  /* 电话号码输入框 */
  .input-tel {
    width: 373px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
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
    font-size: 16px;
    background-color: #ff6d28;
    color: #fff;
    position: relative;
  }

  .border {
    border-color: rgb(238, 34, 34);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
