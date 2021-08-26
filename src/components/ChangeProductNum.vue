
<!-- 改变商品数量的组件 -->

<template>
  <div class="change-product-num clearfix">
    <div class="reduce" :class="{disabled: productNum <= 1}" @click="reduceProductNum">-</div>
    <div class="input-number">
      <input class="product-num" v-model="inputProductNum" v-on:keyup="changeNum()">
    </div>
    <div class="plus" :class="{disabled: productNum >= limitProductNum}" @click="addProductNum">+</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  // 组件名称
  name: 'ChangeProductNum',

  // 获取从父组件中传过来的数据
  props: ['limitProductNum'],

  data() {
    return {
      timer: null,

      // 用户在输入框中输入的商品数量
      inputProductNum: 0
    }
  },

  computed: mapState([
    'productNum'
  ]),

  // 初始化
  mounted() {
    this.$nextTick(() => {
      // 接收商品数量改变的事件
      this.bus.$on('change-num', (num) => {
        this.inputProductNum = num
      })
    })
  },

  methods: {
    ...mapActions([
      'setProductNum'
    ]),

    // 增加商品数量
    addProductNum() {
      if (this.productNum >= this.limitProductNum) {
        return
      }

      this.setProductNum(this.productNum + 1)
      this.inputProductNum = this.productNum
    },

    // 减少商品数量
    reduceProductNum() {
      if (this.productNum <= 1) {
        return
      }

      this.setProductNum(this.productNum - 1)
      this.inputProductNum = this.productNum
    },

    changeNum: function() {
      // 每两秒钟判断一次
      setTimeout(() => {
        // 如果inputProductNum的值不是数字
        // 如果inputProductNum的值的值为0
        // 如果inputProductNum的值超过了取值范围
        // 如果inputProductNum没有值
        if (isNaN(this.inputProductNum) ||
            this.inputProductNum === 0 ||
            this.inputProductNum.length === 0) {
          this.inputProductNum = 1
        }

        if (this.inputProductNum >= this.limitProductNum) {
          this.inputProductNum = this.limitProductNum
        }

        this.setProductNum(this.inputProductNum)
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
  .change-product-num {
    margin-right: 1px;
    float: left;
  }

  .change-product-num div {
    height: 32px;
    line-height: 32px;
    margin-left: -1px;
    float: left;
  }

  .change-product-num .reduce,
  .change-product-num .plus {
    width: 15px;
    height: 100%;
    border: solid 1px #B2B2B2;
    background-color: #EFEFEF;
    text-align: center;
    cursor: pointer;
    moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  .change-product-num input {
    width: 50px;
    height: 100%;
    text-align: center;
    background-color: #fff;
    border: solid 1px #B2B2B2;
  }

  .change-product-num .disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>
