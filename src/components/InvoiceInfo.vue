
<!-- 发票信息组件 -->

<template>
  <section class="invoice-info">
    <div class="title">发票信息</div>
    <transition name="fade">
      <div class="show-result" v-if="isShowResult">发票信息已保存</div>
    </transition>
    <div class="invoice-content">
      <form>
        <div class="use">
          <input id="use-invoice" type="checkbox" value="isUseInvoice" v-model="isUseInvoice">
          <label for="use-invoice">需要发票</label>
        </div>
        <div class="row clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">发票类型：</span>
          </div>
          <!-- 选择发票的类型 s -->
          <div class="select invoice-type" @mouseenter="isShowInvoiceType = true" @mouseleave="isShowInvoiceType = false">
            <h3 class="select-name">{{ invoiceType }}</h3>
            <span class="select-triangle"></span>
            <ul class="select-options" v-if="isShowInvoiceType">
              <li v-for="(invoice, index) in invoiceTypeData" @click="selectInvoiceType(index)">{{ invoice }}</li>
            </ul>
          </div>
          <!-- 选择发票的类型 e -->
        </div>
        <div class="row clearfix">
          <div class="content clearfix">
            <span class="xing">*</span>
            <span class="name">发票抬头：</span>
          </div>
          <!-- 选择发票抬头 s -->
          <div class="select invoice-header" @mouseenter="isShowInvoiceHeader = true" @mouseleave="isShowInvoiceHeader = false">
            <h3 class="select-name">{{ invoiceHeader }}</h3>
            <span class="select-triangle"></span>
            <ul class="select-options" v-if="isShowInvoiceHeader">
              <li v-for="(invoice, index) in invoiceHeaderData" @click="selectInvoiceHeader(index)">{{ invoice }}</li>
            </ul>
          </div>
          <!-- 选择发票抬头 e -->
          <input class="invoice-name" v-model="invoiceName">
        </div>
        <div class="button">
          <input type="button" class="save" value="保存" @click="saveInvoiceInfo()">
          <input type="button" class="cancel" value="取消" @click="cancelUseInvoice()">
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {

    //组件名称
    name: "InvoiceInfo",

    data() {
      return {

        //发票类型数据
        invoiceTypeData: ["商业零售发票", "个人所得税发票"],

        //发票抬头数据
        invoiceHeaderData: ["个人", "企业"],

        //用户选择的发票类型
        invoiceType: "商业零售发票",

        //用户选择的发票抬头
        invoiceHeader: "个人",

        //是否显示发票类型
        isShowInvoiceType: false,

        //是否显示发票抬头
        isShowInvoiceHeader: false,

        //开发票人的姓名
        invoiceName: "",

        //标记是否需要发票
        isUseInvoice: false,

        isShowResult: false
      };
    },

    methods: {

      //选择发票的类型
      selectInvoiceType(index) {
        this.invoiceType = this.invoiceTypeData[index];
        this.isShowInvoiceType = false;
      },

      //选择发票抬头
      selectInvoiceHeader(index) {
        this.invoiceHeader = this.invoiceHeaderData[index];
        this.isShowInvoiceHeader = false;
      },

      //保存发票信息
      saveInvoiceInfo() {
        this.isShowResult = true;

        setTimeout(() => {
          this.isShowResult = false;
        }, 3000);
      },

      //取消使用发票
      cancelUseInvoice() {
        this.invoiceType = "商业零售发票";
        this.invoiceHeader = "个人";
        this.invoiceName = "";
      }
    }
  };
</script>

<style scoped>
  .invoice-info {
    border: solid 1px #CCCCCC;
  }

  .invoice-info .title {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    background-color: #F3F3F3;
    color: #444444;
    border-top: solid 1px #fff;
  }

  .invoice-content .use {
    margin: 14px 0 30px 30px;
  }

  .invoice-content .use label {
    position: relative;
    top: -2px;
  }

  .invoice-content .row {
    margin-left: 37px;
    margin-bottom: 16px;
  }

  .row .content {
    float: left;
    position: relative;
    top: 2px;
  }

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

  .invoice-content .invoice-name {
    width: 127px;
    height: 22px;
    line-height: 22px;
    padding-left: 10px;
    margin-left: 5px;
    border: solid 1px #ccc;
  }

  .invoice-content .button {
    margin-left: 47px;
    margin-bottom: 25px;
  }

  .invoice-content .button input {
    width: 64px;
    height: 22px;
    line-height: 22px;
    margin-right: 10px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
  }

  /* 保存按钮 */
  .invoice-content .button .save {
    border: solid 1px #3784ED;
    background-color: #4391FC;
    color: #ffffff;
  }

  /* 取消按钮 */
  .invoice-content .button .cancel {
    border: solid 1px #CCCCCC;
    background-color: #F6F6F6;
    color: #000;
  }

  .invoice-content .notice-text {
    font-size: 16px;
    color: #e4393c;
    display: none;
  }

  .select {
    border:solid 1px #ccc;
    background-color: #fff;
    cursor: pointer;
    float: left;
    position: relative;
  }

  .select-name {
    height: 24px;
    line-height: 24px;
    padding: 0 24px 0 7px;
    font-size: 12px;
    font-weight: normal;
  }

  .select-triangle {
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid dashed dashed;
    border-color: rgb(80, 174, 248) transparent transparent;
    overflow: hidden;
    position: absolute;
    top: 10px;
    right: 8px;
  }

  .select .select-options {
    width: 100%;
    border: solid 1px #ccc;
    background-color: #fff;
    font-size: 12px;
    position: absolute;
    left: -1px;
    top: 23px;
  }

  .select-options li {
    height: 24px;
    line-height: 24px;
    padding-left: 7px;
  }

  .select-options li:hover {
    background-color: green;
    color: #fff;
  }

  .invoice-type {
    width: 115px;
    z-index: 2;
  }

  .invoice-header {
    width: 55px;
  }

  .show-result {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ff6d28;
    text-align: center;
    font-size: 16px;
    color: #fff;
    position: relative;
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
























